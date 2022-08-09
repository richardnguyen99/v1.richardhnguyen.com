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
  ...rest
}) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
