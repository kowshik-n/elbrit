import { GalleryCard } from "../ui/GalleryCard";
import { GalleryItem } from "@/types/gallery";
import { SectionHeader } from "../ui/SectionHeader";

interface GalleryGridProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
}

export function GalleryGrid({
  items,
  title = "Our Blog",
  subtitle = "Latest News",
}: GalleryGridProps) {
  return (
    <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-4 items-center">
      <div className="min-h-screen py-4 sm:py-6 w-full">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className="text-center mb-12"
        />

        <div className="w-full h-full p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[180px] max-w-6xl mx-auto gap-2 sm:gap-8 relative ">
          {items.map((item, index) => (
            <div
              key={index}
              className={item.rowSpan ? "sm:row-span-2" : "col-span-1"}
            >
              <GalleryCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
