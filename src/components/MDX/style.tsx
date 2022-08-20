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
  border-radius: 8px;
  border: 1px solid rgba(var(--systemColor-cyan-raw), 0.4);

  background: rgba(var(--systemColor-cyan-raw), 0.16);

  code {
    background: rgba(var(--systemColor-cyan-raw), 0.2);
  }
`;

export const StyledAlertPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledAlertIcon = styled.span`
  width: 24px;
  height: 24px;
  display: inherit;

  flex-shrink: 0;
  margin-right: 0.75rem;

  .default &,
  .primary & {
    color: rgba(var(--systemColor-cyan-raw), 1);
  }
`;

export const StyledAlertTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5rem;

  color: var(--systemColor-title);
`;
