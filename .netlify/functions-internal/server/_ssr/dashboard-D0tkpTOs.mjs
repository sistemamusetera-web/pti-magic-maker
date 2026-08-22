import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BV4m8YEh.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { d as Link, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ArrowRight, a as Shield, c as Plus, i as Trash2, m as FileSpreadsheet, p as FileText, r as User, t as X, u as LogOut } from "../_libs/lucide-react.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as Route$1 } from "./router-CHW_MWU_.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-D0tkpTOs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function latestPtiDeletionMessage(patientName) {
	return `Excluir o PTI mais recente de ${patientName}? O cadastro e a avaliação serão mantidos, mas os dados do PTI e as sessões vinculadas a esse plano serão removidos.`;
}
async function deleteLatestPatientPti(dataSource, patientId) {
	const target = await dataSource.findLatestEvaluation(patientId);
	if (!target) return { status: "not_found" };
	await dataSource.clearPtiForEvaluation(target.evaluationId);
	try {
		await dataSource.deleteSessionsForEvaluation(target.evaluationId);
	} catch (error) {
		await dataSource.restorePtiForEvaluation(target.evaluationId, target.ptiData);
		throw error;
	}
	return {
		status: "deleted",
		evaluationId: target.evaluationId
	};
}
async function confirmAndDeleteLatestPatientPti({ confirm, patientName, patientId, dataSource }) {
	if (!confirm(latestPtiDeletionMessage(patientName))) return { status: "cancelled" };
	return deleteLatestPatientPti(dataSource, patientId);
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function Dashboard() {
	const navigate = useNavigate();
	const { role } = Route$1.useRouteContext();
	const [patients, setPatients] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		birth_date: ""
	});
	const [deletingPtiId, setDeletingPtiId] = (0, import_react.useState)(null);
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
			birth_date: form.birth_date || null
		}).select().single();
		if (error) return toast.error(error.message);
		toast.success("Paciente cadastrado");
		setOpen(false);
		setForm({
			name: "",
			birth_date: ""
		});
		navigate({
			to: "/patients/$id",
			params: { id: data.id }
		});
	};
	const deletePatientPti = async (patient) => {
		setDeletingPtiId(patient.id);
		try {
			const result = await confirmAndDeleteLatestPatientPti({
				confirm: (message) => window.confirm(message),
				patientName: patient.name,
				patientId: patient.id,
				dataSource: {
					findLatestEvaluation: async (patientId) => {
						const { data, error } = await supabase.from("evaluations").select("id, pti_data").eq("patient_id", patientId).order("evaluation_date", { ascending: false }).limit(1).maybeSingle();
						if (error) throw error;
						return data?.pti_data ? {
							evaluationId: data.id,
							ptiData: data.pti_data
						} : null;
					},
					clearPtiForEvaluation: async (evaluationId) => {
						const { error } = await supabase.from("evaluations").update({ pti_data: null }).eq("id", evaluationId);
						if (error) throw error;
					},
					deleteSessionsForEvaluation: async (evaluationId) => {
						const { error } = await supabase.from("pei_sessions").delete().eq("evaluation_id", evaluationId);
						if (error) throw error;
					},
					restorePtiForEvaluation: async (evaluationId, ptiData) => {
						const { error } = await supabase.from("evaluations").update({ pti_data: ptiData }).eq("id", evaluationId);
						if (error) throw error;
					}
				}
			});
			if (result.status === "cancelled") return;
			if (result.status === "not_found") return toast.info("Este paciente não possui PTI salvo na avaliação mais recente para excluir.");
			toast.success("PTI mais recente e sessões vinculadas excluídos. O paciente e a avaliação foram mantidos.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Não foi possível excluir o PTI.");
		} finally {
			setDeletingPtiId(null);
		}
	};
	const logout = async () => {
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
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
								className: "truncate font-bold tracking-tight",
								children: "PORTAGE"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "default",
								size: "sm",
								className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mr-2 h-4 w-4" }), "Painel de Administração"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: logout,
							className: "shrink-0 px-2 sm:px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 sm:mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Sair"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary-foreground",
						children: "Pacientes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-primary-foreground/80",
						children: [
							patients.length,
							" cadastrado",
							patients.length === 1 ? "" : "s"
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl sm:text-2xl font-bold",
							children: "Meus pacientes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Selecione um paciente para conduzir a avaliação Portage."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "shrink-0 px-2 sm:px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 sm:mr-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Novo paciente"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden",
										children: "Novo"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Novo paciente" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: create,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Nome *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "birth",
									children: "Data de nascimento"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "birth",
									type: "date",
									value: form.birth_date,
									onChange: (e) => setForm({
										...form,
										birth_date: e.target.value
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Salvar"
								}) })
							]
						})] })]
					})]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Carregando…"
				}) : patients.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sheet flex flex-col items-center rounded-md py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-10 w-10 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Nenhum paciente cadastrado ainda."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							onClick: () => setOpen(true),
							children: "Cadastrar primeiro paciente"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:hidden",
					children: patients.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet rounded-md p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/patients/$id",
							params: { id: p.id },
							className: "block hover:bg-muted/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate font-semibold",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "Sem nascimento", p.guardian ? ` · ${p.guardian}` : ""]
										}),
										p.diagnosis && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 truncate text-xs text-muted-foreground",
											children: p.diagnosis
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-primary" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "mt-3 w-full text-destructive hover:text-destructive",
							disabled: deletingPtiId === p.id,
							onClick: () => deletePatientPti(p),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1 h-4 w-4" }), deletingPtiId === p.id ? "Excluindo PTI…" : "Excluir PTI mais recente"]
						})]
					}, p.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sheet hidden overflow-hidden rounded-md sm:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[720px] text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Paciente"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Nascimento"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Responsável"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "grid-cell px-4 py-2 text-left",
										children: "Diagnóstico"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 text-right",
										children: "Ações"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "bg-paper",
								children: patients.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t hover:bg-muted/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3 font-medium",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3",
											children: p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3",
											children: p.guardian || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3",
											children: p.diagnosis || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-4 py-3 text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/patients/$id",
												params: { id: p.id },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-primary",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1 h-4 w-4" }),
														"Avaliar / PTI",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												size: "sm",
												variant: "ghost",
												className: "ml-1 text-destructive hover:text-destructive",
												disabled: deletingPtiId === p.id,
												onClick: () => deletePatientPti(p),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1 h-4 w-4" }), deletingPtiId === p.id ? "Excluindo…" : "Excluir PTI mais recente"]
											})]
										})
									]
								}, p.id))
							})]
						})
					})
				})] })]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
