/**
 * Styling for <Footer /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  width: 100%;
  margin: 0px;
  margin-top: 5rem;
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      0deg,
      var(--systemColor-gray-2) 0%,
      var(--systemColor-gray-3) 100%
    )
    repeat scroll 0% 0%;
`;

export const StyledFooter = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFooterGrid = styled.div`
  display: grid;

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1rem;
  }
`;

export const StyledFooterGridColumn = styled.div`
  margin: 0;
`;

export const StyledFooterGridColumnTitle = styled.h2`
  .blue & {
    color: var(--systemColor-blue);
  }
  .red & {
    color: var(--systemColor-red);
  }
  .green & {
    color: var(--systemColor-green);
  }
  .indigo & {
    color: var(--systemColor-indigo);
  }
`;

export const StyledFooterGridColumnList = styled.ul`
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding-top: 1.25rem;
  gap: 1rem;

  @media screen and (min-width: 780px) {
    display: grid;
  }
`;

export const StyledFooterGridColumnItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.4;
  line-height: 1.25;
  margin-bottom: 0.5rem;
  text-decoration: none;
  display: inline-block;
  transition: opacity 300ms;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledFooterCopyright = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media screen and (min-width: 780px) {
    flex-direction: row;
  }
`;
