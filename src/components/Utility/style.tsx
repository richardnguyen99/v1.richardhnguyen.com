/**
 * Styling for <Utility /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;

  max-width: 980px;
`;

export const StyledWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;
