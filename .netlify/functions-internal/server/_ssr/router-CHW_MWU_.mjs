import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BV4m8YEh.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as lazyRouteComponent, d as Link, g as redirect, h as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CHW_MWU_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BOk_wl8H.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PTI Portage" },
			{
				name: "description",
				content: "Sistema clínico para avaliação Portage e geração de PTI em PDF."
			},
			{
				name: "author",
				content: "PTI Portage"
			},
			{
				property: "og:title",
				content: "PTI Portage"
			},
			{
				property: "og:description",
				content: "Sistema clínico para avaliação Portage e geração de PTI em PDF."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "PTI Portage"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
/**
* Direção de design: produto clínico operacional — leitura rápida, ações explícitas
* e linguagem profissional orientada à geração do PTI.
*/
var $$splitComponentImporter$6 = () => import("./routes-DBCby_cf.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "PTI Portage — Avaliação e Plano Terapêutico Individual" },
		{
			name: "description",
			content: "Aplicativo clínico para conduzir o Inventário Portage Operacionalizado e gerar o PTI em PDF a partir da avaliação."
		},
		{
			property: "og:title",
			content: "PTI Portage — Avaliação e PTI em PDF"
		},
		{
			property: "og:description",
			content: "Marque cada item Sim/Não/Às vezes/NA e gere o PTI completo com material e atividades."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./route-Di7iQBCH.mjs");
var Route$5 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data: authData, error: authError } = await supabase.auth.getUser();
		if (authError || !authData.user) throw redirect({ to: "/auth" });
		const { data: approvalData, error: approvalError } = await supabase.from("user_approvals").select("is_approved").eq("user_id", authData.user.id).single();
		if (approvalError || !approvalData?.is_approved) {
			if (window.location.pathname !== "/pending-approval") throw redirect({ to: "/pending-approval" });
		}
		const { data: roleData } = await supabase.from("user_roles").select("role").eq("user_id", authData.user.id).single();
		return {
			user: authData.user,
			isApproved: !!approvalData?.is_approved,
			role: roleData?.role || "professional"
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./auth-CFkj0i4X.mjs");
/**
* Direção de design: acesso clínico direto, com feedback explícito para login,
* criação de conta e indisponibilidades de provedores externos.
*/
var Route$4 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Entrar — PTI Portage" },
		{
			name: "description",
			content: "Acesse sua conta para conduzir avaliações Portage e gerar o PTI em PDF."
		},
		{
			property: "og:title",
			content: "Entrar — PTI Portage"
		},
		{
			property: "og:description",
			content: "Acesse sua conta para conduzir avaliações Portage e gerar o PTI em PDF."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./pending-approval-Cdqn7IHm.mjs");
var Route$3 = createFileRoute("/pending-approval")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin-BPYrh1s5.mjs");
var Route$2 = createFileRoute("/_authenticated/admin")({
	beforeLoad: ({ context }) => {
		if (context.role !== "admin") throw new Error("Acesso negado: Somente administradores.");
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dashboard-D0tkpTOs.mjs");
var Route$1 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [
		{ title: "Pacientes — PTI Portage" },
		{
			name: "description",
			content: "Gerencie pacientes e acesse avaliações Portage para gerar PTIs em PDF."
		},
		{
			property: "og:title",
			content: "Pacientes — PTI Portage"
		},
		{
			property: "og:description",
			content: "Gerencie pacientes e acesse avaliações Portage para gerar PTIs em PDF."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./patients._id-Boc-gS7w.mjs");
var Route = createFileRoute("/_authenticated/patients/$id")({
	head: () => ({ meta: [
		{ title: "Avaliação Portage — PTI" },
		{
			name: "description",
			content: "Preencha o Inventário Portage e gere o Plano Terapêutico Individual em PDF."
		},
		{
			property: "og:title",
			content: "Avaliação Portage — PTI"
		},
		{
			property: "og:description",
			content: "Preencha o Inventário Portage e gere o Plano Terapêutico Individual em PDF."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AuthenticatedRouteRoute = Route$5.update({
	id: "/_authenticated",
	getParentRoute: () => Route$7
});
var AuthRoute = Route$4.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$7
});
var PendingApprovalRoute = Route$3.update({
	id: "/pending-approval",
	path: "/pending-approval",
	getParentRoute: () => Route$7
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminRoute: Route$2.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedDashboardRoute: Route$1.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedPatientsIdRoute: Route.update({
		id: "/patients/$id",
		path: "/patients/$id",
		getParentRoute: () => AuthenticatedRouteRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	PendingApprovalRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$1 as n, router_exports as t };
