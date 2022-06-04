import React from "react";
import { CardContainer, CardImage, CardTitle } from "./Card.style";

const Card = ({ title, image, slug }) => (
  <CardContainer>
    <CardImage src={image} width="440px" height="360px" />
    <CardTitle width="440px">{title}</CardTitle>
  </CardContainer>
);

export default Card;
