import React from "react";
import { CardProps } from "./Card.interface";
import { CardContainer, CardImage, CardTitle } from "./Card.style";

const Card = ({ title, image, slug }: CardProps): JSX.Element => (
  <CardContainer>
    <CardImage src={image} width="440px" height="360px" />
    <CardTitle width="440px">{title}</CardTitle>
  </CardContainer>
);

export default Card;
