import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="Elbrit Logo"
        width={120}
        height={40}
        className="h-6 sm:h-8 md:h-10 w-auto hover:opacity-80 transition-opacity"
        priority
      />
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-[#17414F] hover:text-[#17414F]/80 text-sm sm:text-base hidden sm:inline-flex"
        >
          Contact Us
        </Button>
        <Button
          variant="default"
          className="bg-[#17414F] text-white hover:bg-[#17414F]/90 text-sm sm:text-base"
        >
          Shop Now
        </Button>
      </div>
    </header>
  );
}
