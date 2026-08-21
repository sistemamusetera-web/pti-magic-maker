// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  // Permite que o preview gerenciado pelo workspace acesse o servidor Vite.
  vite: {
    server: { allowedHosts: true },
  },
  // Fora do build da Lovable (ex.: Netlify) usamos o preset netlify.
  // Dentro da Lovable o preset é fixado automaticamente e esta opção é ignorada.
  nitro: { preset: process.env["NITRO_PRESET"] ?? "netlify" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
