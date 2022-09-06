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
  padding: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;

  &.primary,
  &.default {
    border: 1px solid rgba(var(--systemColor-cyan-raw), 0.4);

    background: rgba(var(--systemColor-cyan-raw), 0.16);

    code {
      background: rgba(var(--systemColor-cyan-raw), 0.2);
    }

    a > code {
      color: var(--systemColor-cyan);
      border: 1px solid var(--systemColor-cyan);
      background: rgba(var(--systemColor-blue-raw), 0.2);
    }

    a:hover,
    a:visited,
    a:active {
      color: var(--systemColor-cyan);
    }
  }

  &.danger {
    border: 1px solid rgba(var(--systemColor-red-raw), 0.4);
    background: rgba(var(--systemColor-red-raw), 0.16);

    code {
      background: rgba(var(--systemColor-red-raw), 0.2);
    }

    a > code {
      color: var(--systemColor-red);
      border: 1px solid var(--systemColor-red);
      background: rgba(var(--systemColor-red-raw), 0.2);
    }

    a:hover,
    a:visited,
    a:active {
      color: var(--systemColor-red);
    }
  }

  &.warning {
    border: 1px solid rgba(var(--systemColor-yellow-raw), 0.4);
    background: rgba(var(--systemColor-yellow-raw), 0.16);

    code {
      background: rgba(var(--systemColor-yellow-raw), 0.2);
    }

    a > code {
      color: var(--systemColor-orange);
      border: 1px solid var(--systemColor-orange);
      background: rgba(var(--systemColor-yellow-raw), 0.2);
    }

    a:hover,
    a:visited,
    a:active {
      color: var(--systemColor-orange);
    }
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

  .warning & {
    color: rgba(var(--systemColor-yellow-raw), 1);
  }

  .danger & {
    color: rgba(var(--systemColor-red-raw), 1);
  }
`;

export const StyledAlertTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5rem;

  color: var(--systemColor-title);
`;

export const StyledSummaryWrapper = styled.details`
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  flex-direction: column;

  width: auto;
  padding: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;

  background-color: var(--systemColor-content__summary-bg);
  color: var(--systemColor-content__summary-text);
`;

export const StyledSummaryHeader = styled.summary`
  display: inline;
  font-weight: 500;
  color: var(--systemColor-content__summary-text);

  cursor: pointer;
  display: list-item;

  em {
    font-weight: 500;
    color: var(--systemColor-green);
    font-style: normal;
  }
`;
