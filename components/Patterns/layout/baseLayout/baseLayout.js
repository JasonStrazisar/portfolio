import React from "react";
import { BaseLayoutContainer } from "./baseLayout.style";

const BaseLayout = ({ children }) => (
  <BaseLayoutContainer>{children}</BaseLayoutContainer>
);

export default BaseLayout;
