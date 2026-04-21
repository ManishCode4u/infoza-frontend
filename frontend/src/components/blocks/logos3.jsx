"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const Logos3 = ({
  heading = "Trusted by 2,000+ founders and startups",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0",
    },
  ],
}) => {
  return (
    <div className="w-full flex flex-col items-center mt-24 mb-16 z-20 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
        <div className="flex -space-x-3">
          <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://i.pravatar.cc/100?img=33" alt="Founder 1" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://i.pravatar.cc/100?img=47" alt="Founder 2" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://i.pravatar.cc/100?img=12" alt="Founder 3" />
        </div>
        <p className="text-sm sm:text-base font-medium text-[#64748b]">
          Trusted by <span className="font-[700] text-[#2563EB]">2,000+</span> founders and startups
        </p>
      </div>

      <div className="w-full relative mx-auto flex items-center justify-center lg:max-w-6xl">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 items-center"
              >
                <div className="mx-6 flex shrink-0 items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export { Logos3 };
