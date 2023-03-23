"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";

import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-4");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "show", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Space" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the planet you want <br className="md:block hidden" /> to
              explore!
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
