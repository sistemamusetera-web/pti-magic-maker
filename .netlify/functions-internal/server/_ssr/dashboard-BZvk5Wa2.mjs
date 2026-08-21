import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Dwp1IA2L.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as cn, t as Button } from "./button-C-NRKeJj.mjs";
import { t as Input } from "./input-BGrmbOo-.mjs";
import { d as Link, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Shield, c as Plus, f as FileText, p as FileSpreadsheet, r as User, t as X, u as LogOut, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Label } from "./label-CAbqhG9Q.mjs";
import { n as Route$1 } from "./router-lCtrJVgY.mjs";
import { t as Textarea } from "./textarea-BSYVO_N4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BZvk5Wa2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/home/ubuntu/pti-magic-maker/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName = "/home/ubuntu/pti-magic-maker/src/routes/_authenticated/dashboard.tsx?tsr-split=component";
function Dashboard() {
	const navigate = useNavigate();
	const { role } = Route$1.useRouteContext();
	const [patients, setPatients] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		birth_date: "",
		guardian: "",
		diagnosis: "",
		notes: ""
	});
	const load = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("patients").select("*").order("created_at", { ascending: false });
		if (error) toast.error(error.message);
		else setPatients(data);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const create = async (e) => {
		e.preventDefault();
		const { data: session } = await supabase.auth.getUser();
		if (!session.user) return;
		const { error, data } = await supabase.from("patients").insert({
			owner_id: session.user.id,
			name: form.name,
			birth_date: form.birth_date || null,
			guardian: form.guardian || null,
			diagnosis: form.diagnosis || null,
			notes: form.notes || null
		}).select().single();
		if (error) return toast.error(error.message);
		toast.success("Paciente cadastrado");
		setOpen(false);
		setForm({
			name: "",
			birth_date: "",
			guardian: "",
			diagnosis: "",
			notes: ""
		});
		navigate({
			to: "/patients/$id",
			params: { id: data.id }
		});
	};
	const logout = async () => {
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "border-b bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/dashboard",
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileSpreadsheet, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
								children: "Inventário"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "truncate font-bold tracking-tight",
								children: "PORTAGE"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [role === "admin" && /* @__PURE__ */ (void 0)(Link, {
							to: "/admin",
							children: /* @__PURE__ */ (void 0)(Button, {
								variant: "default",
								size: "sm",
								className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm",
								children: [/* @__PURE__ */ (void 0)(Shield, { className: "mr-2 h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 19
								}, this), "Painel de Administração"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 34
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: logout,
							className: "shrink-0 px-2 sm:px-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-4 w-4 sm:mr-2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden sm:inline",
								children: "Sair"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary-foreground",
						children: "Pacientes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs text-primary-foreground/80",
						children: [
							patients.length,
							" cadastrado",
							patients.length === 1 ? "" : "s"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-xl sm:text-2xl font-bold",
							children: "Meus pacientes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Selecione um paciente para conduzir a avaliação Portage."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								className: "shrink-0 px-2 sm:px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 sm:mr-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "Novo paciente"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "sm:hidden",
										children: "Novo"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Novo paciente" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: create,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "name",
									children: "Nome *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 151,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "name",
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									required: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "birth",
										children: "Data de nascimento"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "birth",
										type: "date",
										value: form.birth_date,
										onChange: (e) => setForm({
											...form,
											birth_date: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 160,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "guardian",
										children: "Responsável"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "guardian",
										value: form.guardian,
										onChange: (e) => setForm({
											...form,
											guardian: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "diag",
									children: "Diagnóstico / Hipótese"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 174,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "diag",
									value: form.diagnosis,
									onChange: (e) => setForm({
										...form,
										diagnosis: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 175,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "notes",
									children: "Observações"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									id: "notes",
									value: form.notes,
									onChange: (e) => setForm({
										...form,
										notes: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									children: "Salvar"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 9
				}, this), loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground",
					children: "Carregando…"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 20
				}, this) : patients.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "sheet flex flex-col items-center rounded-md py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-10 w-10 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Nenhum paciente cadastrado ainda."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "mt-4",
							onClick: () => setOpen(true),
							children: "Cadastrar primeiro paciente"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 99
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:hidden",
					children: patients.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/patients/$id",
						params: { id: p.id },
						className: "sheet block rounded-md p-4 hover:bg-muted/40",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "truncate font-semibold",
										children: p.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 209,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "Sem nascimento", p.guardian ? ` · ${p.guardian}` : ""]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 23
									}, this),
									p.diagnosis && /* @__PURE__ */ (void 0)("div", {
										className: "mt-1 truncate text-xs text-muted-foreground",
										children: p.diagnosis
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 214,
										columnNumber: 39
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 shrink-0 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 19
						}, this)
					}, p.id, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 203,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "sheet hidden overflow-hidden rounded-md sm:block",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "w-full min-w-[720px] text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
								className: "bg-muted text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Paciente"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Nascimento"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 227,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Responsável"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 228,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Diagnóstico"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 229,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
										className: "px-4 py-2 text-right",
										children: "Avaliação"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 230,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 225,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 224,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
								className: "bg-paper",
								children: patients.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
									className: "border-t hover:bg-muted/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "grid-cell px-4 py-3 font-medium",
											children: p.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 235,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "grid-cell px-4 py-3",
											children: p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "—"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 236,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "grid-cell px-4 py-3",
											children: p.guardian || "—"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 239,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "grid-cell px-4 py-3",
											children: p.diagnosis || "—"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 240,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
											className: "px-4 py-3 text-right",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/patients/$id",
												params: { id: p.id },
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-primary",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "mr-1 h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 246,
															columnNumber: 31
														}, this),
														"Avaliar / PTI",
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-1 h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 248,
															columnNumber: 31
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 245,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 242,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 25
										}, this)
									]
								}, p.id, true, {
									fileName: _jsxFileName,
									lineNumber: 234,
									columnNumber: 40
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 222,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 201,
					columnNumber: 20
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component };
