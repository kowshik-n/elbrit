import { GridFeature } from "@/components/ui/GridFeature";

const features = [
  {
    icon: "/images/Group-1.svg",
    title: "Clinically Studied",
    description:
      "All products that we offer have undergone lab and safety tests",
  },
  {
    icon: "/images/Group-2.svg",
    title: "Vegetarian Friendly",
    description:
      "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    icon: "/images/Group-3.svg",
    title: "Made In India",
    description:
      "Shop local and explore health products made right here in India",
  },
  {
    icon: "/images/Group-4.svg",
    title: "Free Shipping",
    description:
      "We deliver to your door with no shipping costs above minimum order",
  },
  {
    icon: "/images/Group-5.svg",
    title: "No Risk",
    description:
      "We ensure that all products are safe and meet quality standards",
  },
  {
    icon: "/images/Group-6.svg",
    title: "GMO Free",
    description: "Natural, no artificial products and ingredients are used",
  },
] as const;

export function FeaturesGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 mt-16 sm:mt-20 lg:mt-24">
      <div
        className="container mx-auto bg-[#17414F] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] lg:rounded-[5rem] 
        py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-10 lg:px-16 relative"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 
          -mt-20 sm:-mt-24 lg:-mt-32 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <GridFeature key={`feature-${index}`} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
