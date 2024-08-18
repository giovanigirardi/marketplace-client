import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Helmet title="Dashboard" />
    </div>
  );
}
