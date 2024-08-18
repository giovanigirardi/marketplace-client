import { Plus } from "lucide-react";
import { Outlet } from "react-router-dom";

import logoMinSvg from "@/assets/logo-min.svg";
import { NavigationMenu } from "@/components/navigationMenu";
import { Button } from "@/components/ui/button";

export function AppLayout() {
  return (
    <div>
      <header className="flex h-20 w-full items-center justify-between border-b border-popover px-5">
        <img src={logoMinSvg} alt="" className="h-10 w-14" />
        <div className="flex items-center gap-2">
          <NavigationMenu />
        </div>
        <div className="flex items-center gap-4">
          <Button size="sm">
            <Plus className="mr-2" />
            Novo produto
          </Button>
          <div className="size-12 rounded-xl bg-black"></div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
