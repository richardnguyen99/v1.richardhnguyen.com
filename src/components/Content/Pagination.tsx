/**
 * A React component to display a container that can go to the previous or next * article if available.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import {
  StyledPagination,
  StyledPaginationLink,
  StyledPaginationLinkContainer,
  StyledPaginationLinkContent,
  StyledPaginationLinkSub,
} from "./style";
import { PaginationProps } from "./type";

import SVG from "@components/Svg";

const Pagination: React.FC<PaginationProps> = ({ next, prev }) => {
  const renderPrevPagination = () => {
    return (
      <StyledPaginationLinkContainer aria-label="pagination-prev">
        {prev.url && prev.title ? (
          <StyledPaginationLink to={prev.url}>
            <StyledPaginationLinkSub>Previous</StyledPaginationLinkSub>
            <StyledPaginationLinkContent>
              <SVG.ArrowLeft />
              {prev.title}
            </StyledPaginationLinkContent>
          </StyledPaginationLink>
        ) : null}
      </StyledPaginationLinkContainer>
    );
  };

  const renderNextPagination = () => {
    return (
      <StyledPaginationLinkContainer aria-label="pagination-next">
        {next.url && next.title ? (
          <StyledPaginationLink to={next.url}>
            <StyledPaginationLinkSub>Next</StyledPaginationLinkSub>
            <StyledPaginationLinkContent>
              {next.title}
              <SVG.ArrowRight />
            </StyledPaginationLinkContent>
          </StyledPaginationLink>
        ) : null}
      </StyledPaginationLinkContainer>
    );
  };

  return (
    <StyledPagination aria-label="pagination">
      {renderPrevPagination()}
      {renderNextPagination()}
    </StyledPagination>
  );
};

export default Pagination;
