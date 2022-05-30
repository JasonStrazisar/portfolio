import React from "react";
import styles from "./hero.module.css";

const Hero = () => (
  <div>
    <h1 className={styles.hero__title}>Jason Strazisar</h1>
    <p className={styles.hero__subtitle}>
      I'm a{" "}
      <span>
        <img id="react" src="/react.png" />
      </span>{" "}
      developer. Spending my time at{" "}
      <span id="dvore">
        <img src="/dvore.png" />
      </span>
      {"  "}
      helping building the best BI tool for restaurants.
    </p>
  </div>
);

export default Hero;
