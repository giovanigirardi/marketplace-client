import { AppLayout } from "@/pages/_layouts/AppLayout";
import { AuthLayout } from "@/pages/_layouts/AuthLayout";
import { Dashboard } from "@/pages/app/dashboard";
import { SignIn } from "@/pages/auth/signIn";

const AUTH_ROUTES = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];

const APP_ROUTES = [
  {
    path: "/",
    element: <Dashboard />,
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
