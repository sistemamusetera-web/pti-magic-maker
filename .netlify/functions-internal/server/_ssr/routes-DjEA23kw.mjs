import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Dwp1IA2L.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-C-NRKeJj.mjs";
import { d as Link, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as FileText, g as CircleCheck, n as Users, p as FileSpreadsheet } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjEA23kw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
/**
* Direção de design: produto clínico operacional — leitura rápida, ações explícitas
* e linguagem profissional orientada à geração do PTI.
*/
var _jsxFileName = "/home/ubuntu/pti-magic-maker/src/routes/index.tsx?tsr-split=component";
function Landing() {
	const navigate = useNavigate();
	const [checking, setChecking] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		try {
			supabase.auth.getSession().then(({ data }) => {
				if (data.session) navigate({
					to: "/dashboard",
					replace: true
				});
				else setChecking(false);
			}).catch(() => setChecking(false));
		} catch {
			setChecking(false);
		}
	}, [navigate]);
	if (checking) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "border-b bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
								children: "Inventário"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-bold tracking-tight",
								children: "PORTAGE"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/auth",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							children: "Entrar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:px-6",
					children: "PORTAGE · Plano de Ensino Individualizado"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "grid items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 15
							}, this), " Baseado no Inventário Portage Operacionalizado"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: [
								"Avalie, pontue e gere o ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-primary",
									children: "PTI em PDF"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 39
								}, this),
								" sem digitar."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 max-w-xl text-lg text-muted-foreground",
							children: "Cadastre o paciente, preencha a avaliação em cliques (Sim · Não · Às vezes · NA) e receba um Plano Terapêutico Individual clínico, com objetivos, material e atividades já mapeados."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-7 flex gap-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/auth",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									size: "lg",
									children: "Começar avaliação"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "sheet overflow-hidden rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 border-b bg-primary px-3 py-2 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-bold uppercase tracking-widest",
								children: "Portage · AV"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "w-full text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
								className: "bg-muted text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell px-2 py-1 text-left",
										children: "Socialização — 0 a 1 ano"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 86,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell w-24 px-2 py-1",
										children: "Resposta"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-2 py-1 w-12",
										children: "Pts"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 19
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
								className: "bg-paper",
								children: [
									[
										"01 Observa uma pessoa movimentando-se…",
										"Às vezes",
										"0,5"
									],
									[
										"02 Sorri em response à atenção do adulto",
										"Sim",
										"1"
									],
									[
										"03 Vocaliza em response à atenção",
										"Não",
										"0"
									],
									[
										"04 Olha para sua própria mão…",
										"NA",
										"-"
									],
									[
										"05 Responde a seu círculo familiar…",
										"Sim",
										"1"
									]
								].map(([t, a, p]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "grid-cell px-2 py-1",
										children: t
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "grid-cell px-2 py-1 text-center font-medium",
										children: a
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-2 py-1 text-center border-b",
										children: p
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 95,
										columnNumber: 21
									}, this)
								] }, t, true, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 309
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-20 grid gap-5 sm:grid-cols-3",
					children: [
						{
							icon: Users,
							title: "Pacientes",
							desc: "Cadastro rápido com nome, nascimento, responsável e diagnóstico."
						},
						{
							icon: FileSpreadsheet,
							title: "Planilha em cliques",
							desc: "5 áreas × 6 faixas etárias. Marque com um toque e a pontuação é calculada."
						},
						{
							icon: FileText,
							title: "PTI em PDF",
							desc: "Objetivos prioritários e demais, com material e atividade, prontos para imprimir."
						}
					].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "sheet rounded-md p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-6 w-6 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-3 font-semibold",
								children: title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 15
							}, this)
						]
					}, title, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "mt-16 border-t bg-paper py-6 text-center text-xs text-muted-foreground",
				children: "Baseado no Inventário Portage Operacionalizado."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
//#endregion
export { Landing as component };
