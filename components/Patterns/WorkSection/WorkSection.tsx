import React from "react";
import { CardList } from "..";
import { WorkSectionContainer, WorkSectionTitle } from "./WorkSection.style";

const cardList = [
  {
    id: "1",
    title: "React native: Electrical circuit viewer in AR",
    slug: "",
    image: "/PostIllustration.jpg",
  },
  {
    id: "2",
    title: "Remix: A CMS for 13 sports teams",
    slug: "",
    image: "/PostIllustration.jpg",
  },
  {
    id: "3",
    title: "MurphyUI - A React UI library",
    slug: "",
    image: "/PostIllustration.jpg",
  },
  {
    id: "4",
    title: "Blob - A blob UI generator",
    slug: "",
    image: "/PostIllustration.jpg",
  },
  {
    id: "5",
    title: "Squarespace - A squarespace clone",
    slug: "",
    image: "/PostIllustration.jpg",
  },
];

const WorkSection = (): JSX.Element => (
  <WorkSectionContainer>
    <WorkSectionTitle>Last Things I Worked On</WorkSectionTitle>
    <CardList cardList={cardList} />
  </WorkSectionContainer>
);

export default WorkSection;
