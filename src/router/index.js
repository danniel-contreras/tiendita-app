import { createRouter, createWebHistory } from "vue-router";
import { isUserLoggedApi } from "../api/token.api";
import AuthView from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import StoresView from "../views/StoresView.vue";
import ProvidersView from "../views/ProvidersView.vue";
const ProductsView = () => import("../views/ProductsView.vue");
const UsersView = () => import("../views/UsersView.vue");
const ShoppingHistoryView = () => import("../views/ShoppingHistoryView.vue");
const SalesHistoryView = () => import("../views/SalesHistoryView.vue");
const FinancesView = () => import("../views/FinancesView.vue");
const BoxDetailsView = () => import("../views/BoxDetailsView.vue");
const ReportView = () => import("../views/ReportView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
  {
    path: "/stores",
    name: "stores",
    component: StoresView,
  },
  {
    path: "/providers",
    name: "providers",
    component: ProvidersView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/shopping-history",
    name: "shopping-history",
    component: ShoppingHistoryView,
  },
  {
    path: "/sales-history",
    name: "sales-history",
    component: SalesHistoryView,
  },
  {
    path: "/finances",
    name: "finances",
    component: FinancesView,
  },
  {
    path: "/finance-details/:id",
    name: "finance-details",
    component: BoxDetailsView,
  },
  {
    path: "/report/:id",
    name: "report",
    component: ReportView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const auth = isUserLoggedApi();
router.beforeEach((to, _, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const authNotRequired = publicPages.includes(to.path);

  if (authNotRequired && auth) {
    return next("/");
  }

  if (authRequired && !auth) {
    return next("/login");
  }

  next();
});

export default router;
