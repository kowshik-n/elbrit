import Image from "next/image";
import Link from "next/link";

interface IngredientCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function IngredientCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: IngredientCardProps) {
  return (
    <div className="group bg-[#e6f3fa] rounded-lg p-6 flex flex-col h-56 w-full relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative z-10">
        <h4 className="font-bold text-[#1e3a5f] mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="mt-auto relative z-10">
        <Link
          href="#"
          className="text-sm font-semibold text-[#1e3a5f] hover:underline"
        >
          SEE MORE
        </Link>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-all duration-500 group-hover:opacity-30"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
