type InfoCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconColor?: string;
};

export function InfoCard({ title, value, icon, iconColor = "gray-300" }: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] bg-card p-3">
      <div className={`bg-blue-light flex size-20 items-center justify-center rounded-xl text-${iconColor}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-dm-sans text-[28px]/tight font-bold text-gray-400">{value}</span>
        <span className="font-poppins text-xs/tight text-gray-300">{title}</span>
      </div>
    </div>
  );
}
