import styled from "styled-components";

export const WorkSectionContainer = styled.div`
    background-color: ${(props) => props.theme.colors.grayScale.ash};
    margin-left: -${(props) => props.theme.spacing[13]};
    width: 100%;
    padding ${(props) => props.theme.spacing[8]} ${(props) =>
  props.theme.spacing[13]};
`;

export const WorkSectionTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.body.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  line-height: 32px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.grayScale.line};
  width: fit-content;
  padding-bottom: ${(props) => props.theme.spacing[5]};
  border-bottom: 2px solid ${(props) => props.theme.colors.accents.green};
`;
