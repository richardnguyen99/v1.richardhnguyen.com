/**
 * Styling for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

import { StyledContainer } from "@components/Utility/Container";

export const StyledNavbarWrapper = styled.nav`
  @media screen and (min-width: 750px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
`;

export const StyledNavbar = styled(StyledContainer)`
  display: flex;
  align-items: center;
`;
