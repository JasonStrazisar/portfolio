import styled from "styled-components";

export const BaseLayoutContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing[13]};
  width: calc(100% - calc(${(props) => props.theme.spacing[13]} * 2));

  @media only screen and (max-width: ${(props) =>
      props.theme.spacing.breakpoints.mobile}) {
    padding: 0 ${(props) => props.theme.spacing[7]};
    width: calc(100% - calc(${(props) => props.theme.spacing[7]} * 2));
  }
`;
