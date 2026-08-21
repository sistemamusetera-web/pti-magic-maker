import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Dwp1IA2L.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-C-NRKeJj.mjs";
import { t as Input } from "./input-BGrmbOo-.mjs";
import { p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import { t as Label } from "./label-CAbqhG9Q.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CXcxaY-0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
var _jsxFileName = "/home/ubuntu/pti-magic-maker/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/dashboard",
				replace: true
			});
		});
	}, [navigate]);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin,
						data: { full_name: name }
					}
				});
				if (error) throw error;
				toast.success("Conta criada! Aguarde a aprovação do administrador para acessar o sistema.");
				setMode("signin");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				navigate({
					to: "/dashboard",
					replace: true
				});
			}
		} catch (err) {
			toast.error(err?.message ?? "Erro ao autenticar");
		} finally {
			setLoading(false);
		}
	};
	const google = async () => {
		setLoading(true);
		const res = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (res.error) {
			toast.error(res.error.message ?? "Falha no Google");
			setLoading(false);
			return;
		}
		if (res.redirected) return;
		navigate({
			to: "/dashboard",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "bg-header-strip",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl px-6 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground",
				children: "PORTAGE · Plano de Ensino Individualizado"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-center px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-6 flex items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
							children: "Inventário"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-bold tracking-tight",
							children: "PORTAGE"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "sheet rounded-md",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-b bg-muted px-5 py-3 text-sm font-semibold uppercase tracking-wide",
						children: mode === "signin" ? "Entrar" : "Criar conta"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								className: "w-full",
								onClick: google,
								disabled: loading,
								children: "Continuar com Google"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "my-4 text-center text-xs text-muted-foreground",
								children: "ou com e-mail"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit: submit,
								className: "space-y-3",
								children: [
									mode === "signup" && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(Label, {
										htmlFor: "name",
										children: "Nome"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Input, {
										id: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 114,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 39
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "email",
										children: "E-mail"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "email",
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 118,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "pw",
										children: "Senha"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "pw",
										type: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										minLength: 6,
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "submit",
										className: "w-full",
										disabled: loading,
										children: mode === "signin" ? "Entrar" : "Criar conta"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "mt-4 w-full text-sm text-primary hover:underline",
								onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
								children: mode === "signin" ? "Não tem conta? Criar" : "Já tem conta? Entrar"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 88,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
