# Publicação na Netlify

O projeto está configurado para publicação contínua a partir do repositório GitHub. A Netlify executa `pnpm run build`, identifica a saída nativa do Nitro para funções e publica o diretório `dist`.

## Publicar pela interface da Netlify

1. Em [app.netlify.com](https://app.netlify.com), selecione **Add new project** e escolha **Import an existing project**.
2. Conecte o repositório `sistemamusetera-web/pti-magic-maker` e mantenha a branch `main`.
3. Confirme os parâmetros detectados no arquivo `netlify.toml`: comando `pnpm run build`, diretório de publicação `dist` e Node.js 22.
4. Antes do primeiro deploy, cadastre as variáveis abaixo em **Project configuration → Environment variables**, com escopo de **Builds** e produção.
5. Clique em **Deploy site**. Após receber o domínio `*.netlify.app`, atualize a URL principal e as URLs de redirecionamento autorizadas no painel de autenticação do Supabase, quando aplicável.

## Variáveis obrigatórias

| Variável | Finalidade |
|---|---|
| `VITE_SUPABASE_URL` | URL pública do projeto Supabase usada pelo navegador. |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave publicável do Supabase usada pelo navegador. |
| `SUPABASE_URL` | URL do Supabase disponível durante a renderização no servidor. |
| `SUPABASE_PUBLISHABLE_KEY` | Chave publicável do Supabase disponível durante a renderização no servidor. |

> Não copie valores de `.env` para o repositório. Cadastre as variáveis diretamente na Netlify. As chaves usadas aqui são públicas do Supabase; uma chave secreta, se adotada futuramente, jamais deve receber prefixo `VITE_`.

## Validação local opcional

Para simular a forma de saída empregada pela Netlify, execute:

```bash
NETLIFY=true pnpm run build
```

O build deve gerar o diretório `dist` e a saída de funções da Netlify sem mover os arquivos para o adaptador de execução usado em outros provedores.
