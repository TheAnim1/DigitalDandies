"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Round up your pals and play together in a shared world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#fd6680] border-4 border-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#93C5B5] border-4 border-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#EF2E33] border-4 border-[#5d6680] ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div
          className="absolute top-[25px] left-[45%] w-[210px] h-[150px] p-[6px] rounded-lg border-4 border-[#3B4677] bg-cover bg-center  "
          style={{
            backgroundImage: "url('/planet-01.png')",
          }}
        >
          <img
            src="/people-01.png"
            alt=""
            className=" absolute top-5 w-[40px] h-[40px] p-[6px] rounded-full bg-[#562175] "
          />
          <img
            src="/people-03.png"
            alt=""
            className=" absolute top-5 left-[15%] w-[40px] h-[40px] p-[6px] rounded-full bg-[#FF6191] "
          />
          <img
            src="/people-02.png"
            alt=""
            className=" absolute top-5 left-[25%] w-[40px] h-[40px] p-[6px] rounded-full bg-[#F6623E]"
          />
          <p className="text-white absolute top-[30px] left-[100px] font-bold text-[12px]">
            +264 has joined
          </p>
          <p className="text-white absolute top-[100px] left-[25%] text-[18px] font-bold">
            NovaLuma
          </p>
        </div>
        <div
          className="absolute bottom-[55px] left-[15%] w-[210px] h-[150px] p-[6px] rounded-lg border-4 border-[#3B4677] bg-cover bg-center bg-[rgba(0,0,0,0.5)] "
          style={{
            backgroundImage: "url('/planet-05.png')",
          }}
        >
          <img
            src="/people-01.png"
            alt=""
            className=" absolute top-5 w-[40px] h-[40px] p-[6px] rounded-full bg-[#562175] "
          />
          <img
            src="/people-03.png"
            alt=""
            className=" absolute top-5 left-[15%] w-[40px] h-[40px] p-[6px] rounded-full bg-[#FF6191] "
          />
          <img
            src="/people-02.png"
            alt=""
            className=" absolute top-5 left-[25%] w-[40px] h-[40px] p-[6px] rounded-full bg-[#F6623E]"
          />
          <p className="text-white absolute top-[30px] left-[100px] font-bold text-[12px]">
            +154 has joined
          </p>
          <p className="text-white absolute top-[100px] left-[25%] text-[18px] font-bold">
            Starfallen
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
