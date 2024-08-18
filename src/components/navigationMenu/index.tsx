import { NavigationItem } from "./navigationItem";
import { NAV_ROUTES } from "./navigationMenu.constants";

export function NavigationMenu() {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {NAV_ROUTES.map((route) => (
          <NavigationItem key={route.to} {...route} />
        ))}
      </ul>
    </nav>
  );
}
