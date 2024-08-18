import { Outlet } from "react-router-dom";

import logoSvg from "@/assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="flex h-screen p-6">
      <aside className="flex h-full flex-1 flex-col bg-auth-layout bg-[length:80%] bg-left bg-no-repeat p-4">
        <header>
          <img src={logoSvg} alt="" />
        </header>
      </aside>
      <div className="h-full w-[580px] overflow-auto rounded-[32px] bg-card px-20 py-[72px]">
        <Outlet />
      </div>
    </div>
  );
}
