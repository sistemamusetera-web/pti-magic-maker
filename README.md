# PTI Magic Maker

Sistema clínico para avaliação Portage, elaboração de Plano Terapêutico Individualizado e geração de PDF.

## Desenvolvimento

Use Node.js 22 e pnpm.

```sh
pnpm install
pnpm run dev
```

## Exportação do PDF

Na tela do paciente, antes de gerar o PTI em PDF, o usuário pode escolher se deseja incluir as logos Hapvida e NotreDame no cabeçalho e no rodapé de todas as páginas. A inclusão do aviso legal e da paginação é configurada separadamente.

## Validação

```sh
pnpm test
pnpm exec tsc --noEmit
pnpm run build
```

O sistema usa Supabase para autenticação e dados. Cadastre somente as variáveis públicas do Supabase necessárias ao ambiente; nunca inclua a chave administrativa no cliente.
