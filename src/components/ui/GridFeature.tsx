import Image from "next/image";

interface GridFeatureProps {
  icon: string;
  title: string;
  description: string;
}

export function GridFeature({ icon, title, description }: GridFeatureProps) {
  return (
    <div className="group text-center text-white space-y-4 lg:px-20 hover:bg-white/10 rounded-xl transition-all duration-300">
      <div className="bg-white h-20 w-20 sm:h-24 sm:w-24 rounded-full inline-flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10 text-[#17414F]"
        />
      </div>
      <h3 className="font-semibold text-base sm:text-lg group-hover:translate-y-[-2px] transition-transform duration-300">
        {title}
      </h3>
      <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
