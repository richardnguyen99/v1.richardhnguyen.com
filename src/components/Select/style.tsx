/**
 * Styling for <Select /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledSelectForm = styled.form`
  display: inline-block;
  position: relative;
`;

export const StyledSelect = styled.select`
  background-color: rgba(0, 0, 0, 0);
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: #24292f;
  border: 1px solid rgba(27, 31, 36, 0.15);
  height: 38px;
  border-radius: 19px;
  padding-left: 16px;
  padding-right: 32px;
  font-weight: 500;
  text-transform: capitalize;
`;
