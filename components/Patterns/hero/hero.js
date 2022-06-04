import React from "react";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./hero.style";

const Hero = () => (
  <HeroContainer>
    <HeroSubtitle>Hey! I&apos;m Jason 👋</HeroSubtitle>
    <HeroTitle>
      {" "}
      I’m a <span>Frontend</span> developer that have fun playing around with{" "}
      <span>React</span>.
    </HeroTitle>
  </HeroContainer>
);

export default Hero;
