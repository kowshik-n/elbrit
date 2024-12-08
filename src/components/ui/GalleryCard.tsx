import { GalleryItem } from "@/types/gallery";
import Image from "next/image";

export function GalleryCard({
  title,
  date,
  imageUrl,
  alt,
}: Omit<GalleryItem, "description">) {
  return (
    <div className="relative overflow-visible bg-white rounded-2xl h-full w-full group">
      <div className="bg-[#1e3a5f] text-white text-xs px-2 py-1 rounded-lg absolute top-4 -left-3 z-20 pl-6">
        {date}
      </div>

      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent z-10 rounded-t-2xl">
        <div className="flex items-start justify-end mt-6">
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  );
}
