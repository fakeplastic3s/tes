import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center px-24 lg:px-0">
        <p className="font-bold p-2 text-xl uppercase">Welcome to Khomsa_</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#607274]">Reach the pinnacle of fashion with us!</h1>
        <div className="flex">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Trendsetting Styles, Quality Craftsmanship, Inclusive Fashion for{" "}
            <TypeAnimation
              className="text-[#607274]"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "All",
                10000, // wait 1s before replacing "Mice" with "Hamsters"
                "Kids",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Teen",
                1000,
                "Adults",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-fle" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl text-gray-600"> Explore the latest fashion collections and express yourself with unique flair from Khomsa_</p>
        <button className="bg-[#607274] text-[#faf6f0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-110 duration-300">Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
