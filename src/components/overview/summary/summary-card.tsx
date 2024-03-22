import { LucideIcon } from "lucide-react";

export default function SummaryCard({
  description,
  value,
  Icon,
  cardColor,
}: {
  description?: string;
  value?: string;
  Icon?: LucideIcon;
  cardColor?: string;
}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
      <div
        className={`w-full text-ugray-0 flex items-center justify-between p-4 rounded-lg ${cardColor}`}
      >
        <div className="flex items-center">
          <div className={`mr-4 p-3 rounded-full bg-ugray-0/20`}>
            {Icon && <Icon size={20} className="text-ugray-0" />}
          </div>
          <div>
            <h3 className="text-white text-lg font-medium line-clamp-1">{description}</h3>
            <p className="text-white text-xl font-bold">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
