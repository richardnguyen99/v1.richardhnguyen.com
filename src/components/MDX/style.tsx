/**
 * Styling for custom MDX components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledAlertWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  flex-direction: column;

  width: auto;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  background: var(--systemColor);
`;
