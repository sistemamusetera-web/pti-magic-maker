import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Dwp1IA2L.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-C-NRKeJj.mjs";
import { t as Input } from "./input-BGrmbOo-.mjs";
import { d as Link, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as CircleCheckBig, a as Shield, b as ArrowLeft, l as Mail, n as Users, o as Search, t as X, v as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Buttod5Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/home/ubuntu/pti-magic-maker/src/components/ui/badge.tsx";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/home/ubuntu/pti-magic-maker/src/routes/_authenticated/admin.tsx?tsr-split=component";
function AdminPage() {
	useNavigate();
	const [records, setRecords] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const load = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("user_approvals").select("*").order("created_at", { ascending: false });
		if (error) toast.error(error.message);
		else setRecords(data);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const toggleApproval = async (id, currentStatus) => {
		const { error } = await supabase.from("user_approvals").update({ is_approved: !currentStatus }).eq("id", id);
		if (error) toast.error("Erro ao atualizar status");
		else {
			toast.success(currentStatus ? "Acesso revogado" : "Usuário aprovado");
			load();
		}
	};
	const filtered = records.filter((r) => r.email.toLowerCase().includes(search.toLowerCase()));
	const pending = filtered.filter((r) => !r.is_approved);
	const approved = filtered.filter((r) => r.is_approved);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "border-b bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/dashboard",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shield, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
								children: "Painel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-bold tracking-tight",
								children: "ADMINISTRAÇÃO"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/dashboard",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "mr-2 h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this), "Voltar ao Dashboard"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:px-6",
					children: "Gestão de Usuários e Acessos"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl font-bold flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 15
						}, this), "Aprovação de Usuários"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-muted-foreground",
						children: "Gerencie quem tem permissão para usar o sistema."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative w-full md:w-64",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							placeholder: "Buscar por e-mail...",
							className: "pl-9",
							value: search,
							onChange: (e) => setSearch(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this), loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-center py-20",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 20
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-8",
					children: [pending.length > 0 && /* @__PURE__ */ (void 0)("section", { children: [/* @__PURE__ */ (void 0)("h2", {
						className: "text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (void 0)(Clock$1, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 19
							}, this),
							"Aguardando Aprovação (",
							pending.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "sheet rounded-md overflow-hidden",
						children: /* @__PURE__ */ (void 0)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (void 0)("thead", {
								className: "bg-muted text-xs uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (void 0)("tr", { children: [
									/* @__PURE__ */ (void 0)("th", {
										className: "px-4 py-3 text-left",
										children: "E-mail"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 109,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-4 py-3 text-left",
										children: "Data de Cadastro"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-4 py-3 text-right",
										children: "Ações"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 25
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("tbody", {
								className: "divide-y",
								children: pending.map((r) => /* @__PURE__ */ (void 0)("tr", {
									className: "hover:bg-muted/30",
									children: [
										/* @__PURE__ */ (void 0)("td", {
											className: "px-4 py-4 font-medium flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)(Mail, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 117,
												columnNumber: 29
											}, this), r.email]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 116,
											columnNumber: 27
										}, this),
										/* @__PURE__ */ (void 0)("td", {
											className: "px-4 py-4 text-muted-foreground text-xs",
											children: new Date(r.created_at).toLocaleString("pt-BR")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 120,
											columnNumber: 27
										}, this),
										/* @__PURE__ */ (void 0)("td", {
											className: "px-4 py-4 text-right",
											children: /* @__PURE__ */ (void 0)(Button, {
												size: "sm",
												onClick: () => toggleApproval(r.id, r.is_approved),
												className: "bg-green-600 hover:bg-green-700",
												children: [/* @__PURE__ */ (void 0)(Check, { className: "mr-1 h-3 w-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 125,
													columnNumber: 31
												}, this), "Aprovar"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 124,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 123,
											columnNumber: 27
										}, this)
									]
								}, r.id, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 41
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 36
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 17
							}, this),
							"Usuários Aprovados (",
							approved.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "sheet rounded-md overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
								className: "bg-muted text-xs uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3 text-left",
										children: "E-mail"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3 text-left",
										children: "Status"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-3 text-right",
										children: "Ações"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
								className: "divide-y",
								children: [approved.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
									className: "hover:bg-muted/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4 font-medium",
											children: r.email
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 152,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												variant: "outline",
												className: "text-green-600 border-green-200 bg-green-50",
												children: "Aprovado"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 154,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 153,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => toggleApproval(r.id, r.is_approved),
												className: "text-red-600 hover:text-red-700 hover:bg-red-50",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "mr-1 h-3 w-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 160,
													columnNumber: 29
												}, this), "Revogar Acesso"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 159,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 158,
											columnNumber: 25
										}, this)
									]
								}, r.id, true, {
									fileName: _jsxFileName,
									lineNumber: 151,
									columnNumber: 40
								}, this)), approved.length === 0 && /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
									colSpan: 3,
									className: "px-4 py-8 text-center text-muted-foreground",
									children: "Nenhum usuário aprovado encontrado."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 25
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 47
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 20
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 10
	}, this);
}
var Clock$1 = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 183,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "12 6 12 12 16 14" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 184,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 182,
	columnNumber: 7
}, void 0);
//#endregion
export { AdminPage as component };
