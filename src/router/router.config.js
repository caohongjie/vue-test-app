const Home = () => import("@views/home");
const Cart = () => import("@views/cart");
const Mine = () => import("@views/mine");
const Category = () => import("@views/category");
const Dashboard = () => import("@views/dashboard");

export default [
  {
    path: "",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        redirect: "/dashboard/home",
      },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: {
          cache: true,
        },
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "category",
        name: "category",
        component: Category,
        meta: {
          cache: true,
        },
      },
      {
        path: "mine",
        name: "mine",
        component: Mine,
        meta: {
          isLogin: true,
        },
      },
    ],
  },
];
