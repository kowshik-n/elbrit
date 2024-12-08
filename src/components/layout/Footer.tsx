import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#17414F] text-white p-8 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center mb-8 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-[#215D72] p-6 rounded-lg flex items-center w-full lg:w-auto hover:bg-teal-700 transition-colors duration-300 gap-4">
          <Image
            src="/images/phone.svg"
            alt="Phone Icon"
            width={42}
            height={42}
            priority={false}
            loading="lazy"
          />
          <div>
            <p className="font-bold">Phone Number</p>
            <p className="text-sm">+974 3118 1843</p>
          </div>
        </div>

        <div className="bg-[#215D72] p-6 rounded-lg flex items-center w-full lg:w-auto hover:bg-teal-700 transition-colors duration-300 gap-4">
          <Image
            src="/images/mail.svg"
            alt="Email Icon"
            width={42}
            height={42}
            priority={false}
            loading="lazy"
          />
          <div>
            <p className="font-bold">Email Address</p>
            <p className="text-sm">Elbrithqhr@gmail.com</p>
          </div>
        </div>

        <div className="bg-[#215D72] p-6 rounded-lg flex items-center w-full lg:w-auto hover:bg-teal-700 transition-colors duration-300 gap-4">
          <Image
            src="/images/location.svg"
            alt="Location Icon"
            width={42}
            height={42}
            priority={false}
            loading="lazy"
          />
          <div>
            <p className="font-bold">Office Location</p>
            <p className="text-sm">Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <Image
          src="/images/LOGO.png"
          alt="Elbrit Life Sciences Pvt. Ltd. logo"
          width={150}
          height={100}
        />
        <div className="text-center lg:text-left max-w-lg">
          <p>
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm">
          © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </p>
      </div>
    </footer>
  );
}
