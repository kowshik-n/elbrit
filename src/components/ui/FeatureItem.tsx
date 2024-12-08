import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureItem({
  icon,
  title,
  description,
  className,
}: FeatureItemProps) {
  return (
    <div
      className={cn(
        "group flex items-start space-x-4 rounded-lg",
        "hover:bg-white/50",
        "focus-within:ring-2 focus-within:ring-[#17414F]/20",
        className
      )}
      role="article"
    >
      <div className={cn("bg-[#17414F]rounded-full flex-shrink-0")}>
        <Image
          src={icon}
          alt=""
          width={60}
          height={60}
          className=" text-white"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="font-semibold text-[#17414F] text-base sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#17414F]/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
