import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BV4m8YEh.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { d as Link, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as FileSpreadsheet, n as Users, p as FileText, y as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBCby_cf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Direção de design: produto clínico operacional — leitura rápida, ações explícitas
* e linguagem profissional orientada à geração do PTI.
*/
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
								children: "Inventário"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold tracking-tight",
								children: "PORTAGE"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Entrar"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:px-6",
					children: "PORTAGE · Plano de Ensino Individualizado"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Baseado no Inventário Portage Operacionalizado"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: [
								"Avalie, pontue e gere o ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "PTI em PDF"
								}),
								" sem digitar."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-muted-foreground",
							children: "Cadastre o paciente, preencha a avaliação em cliques (Sim · Não · Às vezes · NA) e receba um Plano Terapêutico Individual clínico, com objetivos, material e atividades já mapeados."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									children: "Começar avaliação"
								})
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet overflow-hidden rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b bg-primary px-3 py-2 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest",
								children: "Portage · AV"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell px-2 py-1 text-left",
										children: "Socialização — 0 a 1 ano"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell w-24 px-2 py-1",
										children: "Resposta"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-1 w-12",
										children: "Pts"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
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
								].map(([t, a, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "grid-cell px-2 py-1",
										children: t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "grid-cell px-2 py-1 text-center font-medium",
										children: a
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-2 py-1 text-center border-b",
										children: p
									})
								] }, t))
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
					].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet rounded-md p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: desc
							})
						]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t bg-paper py-6 text-center text-xs text-muted-foreground",
				children: "Baseado no Inventário Portage Operacionalizado."
			})
		]
	});
}
//#endregion
export { Landing as component };
