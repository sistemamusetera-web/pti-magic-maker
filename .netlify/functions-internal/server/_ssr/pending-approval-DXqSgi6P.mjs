import { t as supabase } from "./client-Dwp1IA2L.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-C-NRKeJj.mjs";
import { p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Clock, u as LogOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pending-approval-DXqSgi6P.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/home/ubuntu/pti-magic-maker/src/routes/pending-approval.tsx?tsr-split=component";
function PendingApproval() {
	const navigate = useNavigate();
	const logout = async () => {
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background flex flex-center items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "sheet max-w-md w-full rounded-md p-8 text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-primary/10 p-4 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-12 w-12 text-primary animate-pulse" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: "Acesso Pendente"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-muted-foreground",
						children: "Sua conta foi criada com sucesso, mas ainda precisa ser aprovada pelo administrador para acessar o sistema."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-muted p-4 rounded text-sm text-left border-l-4 border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-semibold mb-1",
						children: "O que acontece agora?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "list-disc list-inside space-y-1 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "O administrador foi notificado." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Você receberá acesso assim que for verificado." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Tente recarregar esta página em breve." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: () => window.location.reload(),
						className: "w-full",
						children: "Verificar status"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						onClick: logout,
						className: "w-full text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "mr-2 h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this), "Sair e entrar com outra conta"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { PendingApproval as component };
