import { AppLayout } from "@/pages/_layouts/AppLayout";
import { AuthLayout } from "@/pages/_layouts/AuthLayout";
import { Dashboard } from "@/pages/app/dashboard";
import { Products } from "@/pages/app/products";
import { SignIn } from "@/pages/auth/signIn";
import { SignUp } from "@/pages/auth/signUp";

const AUTH_ROUTES = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

const APP_ROUTES = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <Products />,
  },
];

export const ROUTES = [
  {
    path: "/",
    element: <AppLayout />,
    children: APP_ROUTES,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: AUTH_ROUTES,
  },
];
