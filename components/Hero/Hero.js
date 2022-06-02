import React from "react";
import styles from "./hero.module.css";

{
  /*  */
}

const HeroDescription = () => (
  <>
    <p className={styles.hero__subtitle}>Hey! I&apos;m Jason 👋</p>
    <h1 className={styles.hero__title}>
      I’m a <span>Frontend</span> developer that have fun playing around with{" "}
      <span>React</span>.
    </h1>
  </>
);

const Hero = () => (
  <div className={styles.hero}>
    <HeroDescription />
  </div>
);

export default Hero;
