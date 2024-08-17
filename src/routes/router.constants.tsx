import { Dashboard } from "@/pages/app/dashboard";
import { SignIn } from "@/pages/auth/signIn";

export const ROUTES = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];
