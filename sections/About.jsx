"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About DigitalDandies" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:tex-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{" "}
        <span className="font-extrabold text-white">DigitalDandies</span>, your
        go-to destination for all things related to the future of the metaverse.
        We're passionate about exploring the possibilities of this exciting new
        frontier and bringing you the latest news, insights, and trends. Join us
        on our journey as we delve into the world of virtual reality, augmented
        reality, and all the exciting technology that's driving us towards a
        more immersive and interconnected digital world.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.5, 1)}
        src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
