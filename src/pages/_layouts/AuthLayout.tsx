import { Outlet } from "react-router-dom";

import logoSvg from "@/assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="flex p-6">
      <aside className="bg-auth-layout flex h-screen flex-1 flex-col bg-[length:50%] bg-left bg-no-repeat p-4">
        <header>
          <img src={logoSvg} alt="" />
        </header>
      </aside>
      <Outlet />
    </div>
  );
}
