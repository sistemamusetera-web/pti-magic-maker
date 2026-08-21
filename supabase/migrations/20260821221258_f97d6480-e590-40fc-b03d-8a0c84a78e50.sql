create or replace function public.grant_admin_for_known_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email_confirmed_at is not null
     and lower(new.email) = 'musicoterapeutakarlos@gmail.com' then
    insert into public.user_roles (user_id, role)
    values (new.id, 'admin')
    on conflict (user_id, role) do nothing;

    insert into public.user_approvals (user_id, email, is_approved)
    values (new.id, new.email, true)
    on conflict (user_id) do update set is_approved = true, updated_at = now();
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_grant_admin on auth.users;
create trigger on_auth_user_created_grant_admin
after insert on auth.users
for each row execute function public.grant_admin_for_known_email();

drop trigger if exists on_auth_user_confirmed_grant_admin on auth.users;
create trigger on_auth_user_confirmed_grant_admin
after update of email_confirmed_at on auth.users
for each row
when (old.email_confirmed_at is null and new.email_confirmed_at is not null)
execute function public.grant_admin_for_known_email();

insert into public.user_roles (user_id, role)
select u.id, 'admin' from auth.users u
where lower(u.email) = 'musicoterapeutakarlos@gmail.com' and u.email_confirmed_at is not null
on conflict (user_id, role) do nothing;

insert into public.user_approvals (user_id, email, is_approved)
select u.id, u.email, true from auth.users u
where lower(u.email) = 'musicoterapeutakarlos@gmail.com' and u.email_confirmed_at is not null
on conflict (user_id) do update set is_approved = true, updated_at = now();