"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { fredoka } from "../layout";  

const HeroSection = () => {
  return (
    <section className="pt-6 min-h-[85vh]"> 
      <div className="grid grid-cols-1 lg:grid-cols-12">

        <div className="col-span-7 place-self-center text-center sm:text-left">

          <h1 className={`${fredoka.className} mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold`}>
            
            <span className="text-black block">
              Hello, I am
            </span>

            <span className="text-[#FFA8CA] block">
              <TypeAnimation
                sequence={[
                  "Linh Nguyen",
                  1000,
                  "A Student at Bryn Mawr College",
                  1000,
                  "A Technology Enthusiast",
                  1000,
                  "An Aspiring Product Manager",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>

          </h1>

          <div className="flex gap-4 mt-6 justify-center sm:justify-start">

            <a
              href="https://www.linkedin.com/in/khanhlinhnguyen0206/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#FFA8CA] hover:bg-pink-200 text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/linhnguyen6206"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#FFA8CA] hover:bg-pink-50 text-black transition"
            >
              GitHub
            </a>

          </div>

        </div>

        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#18181818] 
                          w-[250px] h-[250px] 
                          lg:w-[380px] lg:h-[380px] relative">

            <Image 
              src="/images/linh.jpg"
              alt="hero image"
              fill
              className="object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;