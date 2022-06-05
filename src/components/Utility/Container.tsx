/**
 * A React component to centralize content in a container
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

type ContainerProps = {
  [key: string]: any;
};

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;

  max-width: 980px;
`;

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
