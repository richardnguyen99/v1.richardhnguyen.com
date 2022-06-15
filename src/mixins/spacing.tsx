/**
 * Mixins for spacing elements and components with normal CSS class names
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { css } from "styled-components";

const spacingSize = {
  1: 4,
  2: 8,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
  8: 64,
  9: 80,
  10: 96,
  11: 112,
  12: 128,
  auto: "auto",
};

const marginMixins = (size: string) => css`
  .m-${size} {
    margin: ${spacingSize[size]}px;
  }

  .mx-${size} {
    margin-left: ${spacingSize[size]}px;
    margin-right: ${spacingSize[size]}px;
  }

  .my-${size} {
    margin-top: ${spacingSize[size]}px;
    margin-bottom: ${spacingSize[size]}px;
  }

  .mt-${size} {
    margin-top: ${spacingSize[size]}px;
  }

  .mb-${size} {
    margin-bottom: ${spacingSize[size]}px;
  }

  .ml-${size} {
    margin-left: ${spacingSize[size]}px;
  }

  .mr-${size} {
    margin-right: ${spacingSize[size]}px;
  }
`;

const paddingMixins = (size: string) => css`
  .p-${size} {
    padding: ${spacingSize[size]}px;
  }

  .px-${size} {
    padding-left: ${spacingSize[size]}px;
    padding-right: ${spacingSize[size]}px;
  }

  .py-${size} {
    padding-top: ${spacingSize[size]}px;
    padding-bottom: ${spacingSize[size]}px;
  }

  .pt-${size} {
    padding-top: ${spacingSize[size]}px;
  }

  .pb-${size} {
    padding-bottom: ${spacingSize[size]}px;
  }

  .pl-${size} {
    padding-left: ${spacingSize[size]}px;
  }

  .pr-${size} {
    padding-right: ${spacingSize[size]}px;
  }
`;

const SpacingCSS = css`
  ${Object.keys(spacingSize).map((key) => marginMixins(key))}
  ${Object.keys(spacingSize).map((key) => paddingMixins(key))}
`;

export default SpacingCSS;
