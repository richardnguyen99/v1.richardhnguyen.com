/**
 * A React component to centralize content in a container
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

import { CFC } from "@config/react";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
  max-width: 980px;
`;

const Container: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
