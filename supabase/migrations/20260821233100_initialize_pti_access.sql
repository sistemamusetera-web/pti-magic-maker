create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'app_role' and typnamespace = 'public'::regnamespace) then
    create type public.app_role as enum ('admin', 'professional');
  end if;
end;
$$;

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role public.app_role not null default 'professional'
);

create table if not exists public.user_approvals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null,
  is_approved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  birth_date date,
  guardian text,
  diagnosis text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.evaluations (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  evaluator_name text not null,
  evaluation_date date not null default current_date,
  patient_age text,
  answers jsonb not null default '{}'::jsonb,
  pti_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pei_sessions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients(id) on delete cascade,
  evaluation_id uuid not null references public.evaluations(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  area text not null,
  age_range text not null,
  item_key text not null,
  item_num text not null,
  ajuda text not null,
  tentativas integer not null default 0 check (tentativas >= 0),
  acertos integer not null default 0 check (acertos >= 0),
  notes text,
  session_date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_user_approvals_updated_at on public.user_approvals;
create trigger set_user_approvals_updated_at
before update on public.user_approvals
for each row execute function public.set_updated_at();

drop trigger if exists set_patients_updated_at on public.patients;
create trigger set_patients_updated_at
before update on public.patients
for each row execute function public.set_updated_at();

drop trigger if exists set_evaluations_updated_at on public.evaluations;
create trigger set_evaluations_updated_at
before update on public.evaluations
for each row execute function public.set_updated_at();

drop trigger if exists set_pei_sessions_updated_at on public.pei_sessions;
create trigger set_pei_sessions_updated_at
before update on public.pei_sessions
for each row execute function public.set_updated_at();

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;

create or replace function public.is_approved(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_approvals
    where user_id = _user_id and is_approved = true
  );
$$;

create or replace function public.handle_new_user_access()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  is_primary_admin boolean := lower(coalesce(new.email, '')) = 'adminportage@gmail.com';
begin
  insert into public.user_roles (user_id, role)
  values (new.id, case when is_primary_admin then 'admin'::public.app_role else 'professional'::public.app_role end)
  on conflict (user_id) do update set role = excluded.role;

  insert into public.user_approvals (user_id, email, is_approved)
  values (new.id, coalesce(new.email, ''), is_primary_admin)
  on conflict (user_id) do update
    set email = excluded.email,
        is_approved = case when is_primary_admin then true else public.user_approvals.is_approved end,
        updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_access on auth.users;
create trigger on_auth_user_created_access
after insert on auth.users
for each row execute function public.handle_new_user_access();

insert into public.user_roles (user_id, role)
select u.id,
       case when lower(u.email) = 'adminportage@gmail.com' then 'admin'::public.app_role else 'professional'::public.app_role end
from auth.users u
on conflict (user_id) do update
  set role = case
    when lower((select email from auth.users where id = public.user_roles.user_id)) = 'adminportage@gmail.com'
      then 'admin'::public.app_role
    else public.user_roles.role
  end;

insert into public.user_approvals (user_id, email, is_approved)
select u.id, coalesce(u.email, ''), lower(u.email) = 'adminportage@gmail.com'
from auth.users u
on conflict (user_id) do update
  set email = excluded.email,
      is_approved = case
        when lower(excluded.email) = 'adminportage@gmail.com' then true
        else public.user_approvals.is_approved
      end,
      updated_at = now();

alter table public.user_roles enable row level security;
alter table public.user_approvals enable row level security;
alter table public.patients enable row level security;
alter table public.evaluations enable row level security;
alter table public.pei_sessions enable row level security;

drop policy if exists "users can read their own role" on public.user_roles;
create policy "users can read their own role"
on public.user_roles for select
to authenticated
using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

drop policy if exists "users can read their approval" on public.user_approvals;
create policy "users can read their approval"
on public.user_approvals for select
to authenticated
using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

drop policy if exists "admins can update approvals" on public.user_approvals;
create policy "admins can update approvals"
on public.user_approvals for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "approved users can access patients" on public.patients;
create policy "approved users can access patients"
on public.patients for all
to authenticated
using (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
)
with check (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
);

drop policy if exists "approved users can access evaluations" on public.evaluations;
create policy "approved users can access evaluations"
on public.evaluations for all
to authenticated
using (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
)
with check (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
);

drop policy if exists "approved users can access pei sessions" on public.pei_sessions;
create policy "approved users can access pei sessions"
on public.pei_sessions for all
to authenticated
using (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
)
with check (
  public.is_approved(auth.uid())
  and (owner_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
);
