import styled from "styled-components";
import Image from "next/image";
import { CardTitleProps } from "./Card.interface";

export const CardContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.01);
    transform: rotate(1deg);
    p {
      color: ${(props) => props.theme.colors.primary.default};
      text-decoration: underline;
    }
  }

  @media (max-width: ${(props) => props.theme.spacing.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacing[8]};
    width: 100%;
  }
`;

export const CardImage = styled(Image)`
  border-radius: 12px;

  @media (max-width: ${(props) => props.theme.spacing.breakpoints.mobile}) {
    margin-right: ${(props) => props.theme.spacing[4]};
  }
`;

export const CardTitle = styled.p<CardTitleProps>`
  color: ${(props) => props.theme.colors.grayScale.offWhite};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  width: ${(props) => props.width};
  margin-top: 0;
`;
