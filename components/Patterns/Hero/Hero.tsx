import React from "react";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./Hero.style";

const Hero = (): JSX.Element => (
  <HeroContainer>
    <HeroSubtitle>Hey! I&apos;m Jason š</HeroSubtitle>
    <HeroTitle>
      {" "}
      Iām a <span>Frontend</span> developer that have fun playing around with{" "}
      <span>React</span>.
    </HeroTitle>
  </HeroContainer>
);

export default Hero;
