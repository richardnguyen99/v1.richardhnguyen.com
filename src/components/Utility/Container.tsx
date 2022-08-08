/**
 * A React component to centralize content in a container
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { ContainerProps } from "./type";
import { StyledContainer } from "./style";

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
