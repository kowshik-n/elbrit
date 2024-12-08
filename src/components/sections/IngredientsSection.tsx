import Image from "next/image";

const ingredients = [
  {
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    imageSrc: "/images/vitamin-1.png",
    imageAlt: "Vitamin C",
  },
  {
    title: "Vitamin B3",
    description: "Known for healthy gut and skin",
    imageSrc: "/images/vitamin-2.png",
    imageAlt: "Vitamin B3",
  },
  {
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    imageSrc: "/images/vitamin-3.png",
    imageAlt: "Magnesium",
  },
  {
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    imageSrc: "/images/vitamin-4.png",
    imageAlt: "Hyaluronic Acid",
  },
  {
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    imageSrc: "/images/vitamin-5.png",
    imageAlt: "Lactobacillus",
  },
] as const;

export function IngredientsSection() {
  return (
    <div className="px-4 sm:px-8 lg:px-24 lg:mx-24 my-24">
      <section className="mb-20">
        <div className="flex flex-wrap gap-6 flex-col sm:flex-row">
          <div className="h-56 w-full flex-[1.5]">
            <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">
              INGREDIENTS
            </h2>
            <h3 className="text-3xl font-bold text-[#1e3a5f]">
              Better Ingredients
            </h3>
            <p className="text-gray-600 mt-8 max-w-2xl">
              Only the best when you choose products offered on our platform.
              High-quality ingredients for high-quality products!
            </p>
          </div>
          {ingredients.slice(0, 2).map((ingredient) => (
            <div
              key={ingredient.title}
              className="bg-[#e6f3fa] rounded-lg p-6 flex flex-col h-56 flex-1 relative overflow-hidden"
            >
              <div className="relative z-20">
                <h4 className="font-bold text-[#1e3a5f] mb-2">
                  {ingredient.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {ingredient.description}
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end relative z-20 underline ">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#1e3a5f] hover:underline"
                >
                  SEE MORE
                </a>
              </div>
              <div className="absolute inset-0 z-10">
                <Image
                  src={ingredient.imageSrc}
                  alt={ingredient.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-right-bottom p-4 hover:opacity-60 transition-opacity"
                  priority={ingredient.title === "Vitamin C"}
                  loading={ingredient.title === "Vitamin C" ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 mt-7 flex-col sm:flex-row">
          {ingredients.slice(2).map((ingredient) => (
            <div
              key={ingredient.title}
              className="bg-[#e6f3fa] rounded-lg p-6 flex flex-col h-56 flex-1 relative overflow-hidden"
            >
              <div className="relative z-20">
                <h4 className="font-bold text-[#1e3a5f] mb-2">
                  {ingredient.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {ingredient.description}
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end relative z-20 underline">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#1e3a5f] hover:underline"
                >
                  SEE MORE
                </a>
              </div>
              <div className="absolute inset-0 z-10">
                <Image
                  src={ingredient.imageSrc}
                  alt={ingredient.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:opacity-60 transition-opacity"
                  priority={ingredient.title === "Hyaluronic Acid"}
                  loading={
                    ingredient.title === "Hyaluronic Acid" ? "eager" : "lazy"
                  }
                />
              </div>
            </div>
          ))}
          <div className="h-56 w-4 flex-[0.3] relative">
            <Image
              src="/images/ingredients.png"
              alt="Ingredients"
              fill
              sizes="(max-width: 768px) 20vw, 10vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
