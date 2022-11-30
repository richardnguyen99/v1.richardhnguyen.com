/**
 * Style definition for Tooltip components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledPopup = styled.div`
  font-feature-settings: "tnum";
  box-sizing: border-box;
  color: rgba(var(--rc-color-gray-900));
  display: block;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  margin: 0;
  max-width: 250px;
  padding: 0;
  position: absolute;
  visibility: visible;
  z-index: 9999;
  pointer-events: none;
`;

export const StyledPopupInner = styled.div`
  overflow-wrap: break-word;
  opacity: 1;
  min-height: 0;
  line-height: 1;
  height: auto;
  font-size: 0.75rem;
  background: rgb(var(--rc-rgb-slate-700));
  border-radius: 5px;
  min-width: 32px;
  text-align: center;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
`;
