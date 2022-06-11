import React from "react";
import { BaseLayoutProps } from "./BaseLayout.interface";
import { BaseLayoutContainer } from "./BaseLayout.style";

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <BaseLayoutContainer>{children}</BaseLayoutContainer>
);

export default BaseLayout;
