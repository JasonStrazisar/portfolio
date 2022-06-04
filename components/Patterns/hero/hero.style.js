import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 60%;
  padding-bottom: ${(props) => props.theme.spacing[13]};
  padding-top: ${(props) => props.theme.spacing[12]};

  @media only screen and (max-width: ${(props) =>
      props.theme.spacing.breakpoints.mobile}) {
    width: 100%;
    padding: ${(props) => props.theme.spacing[13]} 0;
  }
`;

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.grayScale.offWhite};

  span {
    color: ${(props) => props.theme.colors.primary.default};
  }
`;

export const HeroSubtitle = styled.p`
  color: ${(props) => props.theme.colors.grayScale.line};
  font-size: ${(props) => props.theme.typography.fontSize.body.small};
  margin-bottom: ${(props) => props.theme.spacing[8]};
  line-height: 32px;
`;
