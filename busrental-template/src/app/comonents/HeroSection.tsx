"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export type HeroSlide = {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
};

export default function HeroSection({ slides }: HeroSliderProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className={`keen-slider rounded-[20px] overflow-hidden transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {slides.map((slide, index) => (
          <section
            key={index}
            className={`keen-slider__slide relative h-[80vh] w-full flex items-center justify-center bg-gray-400`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 px-6 py-20 sm:px-12 text-center max-w-4xl mx-auto text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
                {slide.description}
              </p>

              <Link href={slide.ctaLink}>
                <button className="bg-[rgba(91,99,255,0.8)] hover:bg-[rgba(91,99,255,1)] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  {slide.ctaText} →
                </button>
              </Link>

              <div className="mt-6 text-sm flex justify-center space-x-4 text-white/80">
                <Link href="#" className="hover:underline">
                  Bus Rental Dubai
                </Link>
                <Link href="#" className="hover:underline">
                  Car with Driver
                </Link>
                <Link href="#" className="hover:underline">
                  Yacht Rentals
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Slider dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-5 right-6 z-20 flex space-x-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full border border-white transition ${
                currentSlide === idx ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// components/HeroSliderClient.tsx
// 'use client';

// import {useKeenSlider} from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import {useState, useEffect} from 'react';
// import {HeroSlide} from './HeroSection';

// type Props = {
//   slides: HeroSlide[];
// };

// export default function HeroSliderClient({slides}: Props) {
//   const [loaded, setLoaded] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {perView: 1},
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     }
//   });

//   return (
//     <div
//       ref={sliderRef}
//       className="keen-slider absolute inset-0 z-10 transition-opacity duration-500"
//     >
//       {slides.map((slide, index) => (
//         <section
//           key={index}
//           className="keen-slider__slide relative h-[80vh] w-full flex items-center justify-center"
//         >
//           <div className="absolute inset-0 z-0">
//             <Image
//               src={slide.image}
//               alt={slide.title}
//               fill
//               priority={index === 0}
//               className="object-cover object-center"
//               sizes="(max-width: 768px) 100vw, 100vw"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//           </div>

//           <div className="relative z-10 px-6 py-20 sm:px-12 text-center max-w-4xl mx-auto text-white">
//             <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md">
//               {slide.title}
//             </h1>
//             <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
//               {slide.description}
//             </p>

//             <Link href={slide.ctaLink}>
//               <button className="bg-[rgba(91,99,255,0.8)] hover:bg-[rgba(91,99,255,1)] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
//                 {slide.ctaText} →
//               </button>
//             </Link>

//             <div className="mt-6 text-sm flex justify-center space-x-4 text-white/80">
//               <Link href="#" className="hover:underline">
//                 Bus Rental Dubai
//               </Link>
//               <Link href="#" className="hover:underline">
//                 Car with Driver
//               </Link>
//               <Link href="#" className="hover:underline">
//                 Yacht Rentals
//               </Link>
//             </div>
//           </div>
//         </section>
//       ))}

//       {loaded && instanceRef.current && (
//         <div className="absolute bottom-5 right-6 z-20 flex space-x-2">
//           {[
//             ...Array(instanceRef.current.track.details.slides.length).keys()
//           ].map((idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={`w-3 h-3 rounded-full border border-white transition ${
//                 currentSlide === idx ? 'bg-white' : 'bg-transparent'
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
