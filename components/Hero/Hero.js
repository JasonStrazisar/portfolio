import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => (
  <div>
    <h1 className={styles.hero__title}>Jason Strazisar</h1>
    <p className={styles.hero__subtitle}>
      I&apos;m a{" "}
      <span>
        <Image width="30px" height="26px" src="/react.png" />
      </span>{" "}
      developer. Spending my time at{" "}
      <span id="dvore">
        <Image width="30px" height="43px" src="/dvore.png" />
      </span>
      {"  "}
      helping building the best BI tool for restaurants.
    </p>
  </div>
);

export default Hero;
