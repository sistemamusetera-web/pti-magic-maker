import { t as supabase } from "./client-BV4m8YEh.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as LogOut, v as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pending-approval-Cdqn7IHm.js
var import_jsx_runtime = require_jsx_runtime();
function PendingApproval() {
	const navigate = useNavigate();
	const logout = async () => {
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background flex flex-center items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sheet max-w-md w-full rounded-md p-8 text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-primary/10 p-4 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-12 w-12 text-primary animate-pulse" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: "Acesso Pendente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Sua conta foi criada com sucesso, mas ainda precisa ser aprovada pelo administrador para acessar o sistema."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-muted p-4 rounded text-sm text-left border-l-4 border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold mb-1",
						children: "O que acontece agora?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc list-inside space-y-1 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "O administrador foi notificado." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Você receberá acesso assim que for verificado." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tente recarregar esta página em breve." })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => window.location.reload(),
						className: "w-full",
						children: "Verificar status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: logout,
						className: "w-full text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Sair e entrar com outra conta"]
					})]
				})
			]
		})
	});
}
//#endregion
export { PendingApproval as component };
