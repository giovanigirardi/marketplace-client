import { Link, useLocation } from "react-router-dom";

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
};

export function NavigationItem({ icon, label, to }: NavigationItemProps) {
  const { pathname } = useLocation();

  const isActive = pathname === to;
  const activeClasses = isActive
    ? "font-medium bg-popover text-primary"
    : "text-gray-300 transition-colors hover:text-primary";

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-2 rounded-[10px] px-4 py-2.5 font-poppins text-sm/tight ${activeClasses}`}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}
