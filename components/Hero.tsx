import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import SponserButton from "../components/SponserButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[30vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-40 top-28 h-[40vh] w-[20vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[100vw] mt-[60px] lg:mt-[2px] lg:mb-[2px] flex flex-col items-center justify-center">
          <p className="uppercase font-semibold tracking-widest text-xs lg:text-xl text-center text-blue-100 max-w-120">
            Powered by SRMIST & Team LiveWires
          </p>

          <TextGenerateEffect
            words="Hackfinity - Innovate for Quality Education"
            className="text-center text-4xl md:text-6xl lg:text-6xl "
          />

          <p className="text-center md:tracking-wider mb-[40px] lg:mb-[10px] text-sm md:text-lg lg:text-2xl">
            December 3-4, 2024 | SRMIST, Chennai
          </p>

          <div className="flex">
            <a href="#about" className="mx-5">
              <MagicButton
                title="Register Now"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="#sponsors">
              <SponserButton
                title="Become a Sponsor"
                icon={""}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
