import type { FeatureItem } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends FeatureItem {
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "card-premium group rounded-2xl p-6",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 transition-all duration-500 group-hover:from-purple-200 group-hover:to-indigo-200 group-hover:shadow-lg group-hover:shadow-purple-200/50 group-hover:scale-110">
        <Icon className="h-6 w-6 text-purple-600 transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-800 transition-colors group-hover:text-purple-700">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600">
        {description}
      </p>
    </div>
  );
}
