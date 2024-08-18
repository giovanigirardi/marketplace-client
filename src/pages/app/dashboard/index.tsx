import { Store, Tag, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { InfoCard } from "./components/infoCard";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />

      <main className="mx-auto flex w-full max-w-[1030px] flex-col gap-10 py-16">
        <header>
          <h1 className="font-dm-sans text-2xl/tight font-bold text-gray-500">Últimos 30 dias</h1>
          <p className="font-poppins text-sm/tight text-gray-300">Confira as estatísticas da sua loja no último mês</p>
        </header>

        <div className="flex items-stretch gap-6">
          <div className="flex flex-col gap-4">
            <InfoCard title="Produtos vendidos" value="24" icon={<Tag size={40} />} iconColor="blue-dark" />
            <InfoCard title="Produtos anunciados" value="56" icon={<Store size={40} />} iconColor="blue-dark" />
            <InfoCard title="Pessoas visitantes" value="1238" icon={<Users size={40} />} />
          </div>
          {/* chart */}
        </div>
      </main>
    </div>
  );
}
