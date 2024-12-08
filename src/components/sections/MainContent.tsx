import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeatureItem } from "@/components/ui/FeatureItem";

const features = [
  {
    icon: "/images/v1.svg",
    title: "Vitamins",
    description: "Enhanced vitamins and minerals in your diet",
  },
  {
    icon: "/images/v2.svg",
    title: "Weight Loss",
    description: "Help you achieve your weight loss goals",
  },
  {
    icon: "/images/v3.svg",
    title: "Functional Foods",
    description: "From organic sources to better formula",
  },
] as const;

export function MainContent() {
  return (
    <main className="container mx-auto px-4 sm:px-6  pb-6  lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-[#17414F]/70 text-lg font-medium tracking-wide uppercase">
              Online Medical Supplies
            </p>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#17414F] leading-tight">
              Get Your Vitamins
              <br className="hidden sm:block" />& Minerals
            </h2>
            <p className="text-[#17414F]/80 text-lg max-w-md mx-auto lg:mx-0">
              Discover our premium selection of vitamins and supplements for
              your daily health needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-[#17414F] hover:bg-[#17414F]/90 text-white px-8 py-6 rounded-3xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg">
              EXPLORE NOW
            </Button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-[500px]">
          <div className="aspect-square bg-[#FFE5BA] rounded-tl-[10rem] rounded-br-[8rem] transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
            <Image
              src="/images/tablet.png"
              alt="Vitamin Landing"
              width={500}
              height={500}
              className="absolute left-1/2 -translate-x-1/2 -top-16 sm:-top-24 w-[90%] max-w-[450px] drop-shadow-2xl transform hover:rotate-2 transition-all duration-500"
              priority
            />
          </div>
        </div>

        <div className="space-y-10 max-w-md mx-auto lg:mx-0 order-3 mt-8 lg:mt-0">
          {features.map((feature, index) => (
            <div
              key={`feature-wrapper-${index}`}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <FeatureItem key={`feature-item-${index}`} {...feature} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
