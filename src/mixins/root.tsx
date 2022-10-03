/**
 * A Styled-component mixins for CSS declaration for root.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { css } from "styled-components";

const RootVariables = css`
  :root {
    --system-font-mono: ui-monospace, "SFMono-Regular", "SF Mono", Menlo,
      Consolas, Liberation Mono, monospace;
    --system-font-serif: Georgia, ui-serif, serif;
    --system-font-sans: "Alliance No.1", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";

    --systemColor-red-light: 255, 59, 48;
    --systemColor-red-dark: 255, 69, 58;
    --systemColor-yellow-light: 255, 204, 0;
    --systemColor-yellow-dark: 255, 214, 0;
    --systemColor-orange-light: 255, 149, 0;
    --systemColor-orange-dark: 255, 159, 0;
    --systemColor-mint-light: 0, 199, 190;
    --systemColor-mint-dark: 102, 212, 207;
    --systemColor-green-light: 52, 199, 59;
    --systemColor-green-dark: 50, 215, 75;
    --systemColor-teal-light: 89, 173, 196;
    --systemColor-teal-dark: 106, 196, 220;
    --systemColor-cyan-light: 85, 190, 240;
    --systemColor-cyan-dark: 90, 200, 245;
    --systemColor-blue-light: 0, 122, 255;
    --systemColor-blue-dark: 10, 132, 255;
    --systemColor-indigo-light: 88, 86, 214;
    --systemColor-indigo-dark: 94, 92, 230;
    --systemColor-purple-light: 175, 82, 222;
    --systemColor-purple-dark: 191, 90, 242;
    --systemColor-pink-light: 255, 45, 85;
    --systemColor-pink-dark: 255, 55, 95;
    --systemColor-brown-light: 162, 132, 94;
    --systemColor-brown-dark: 172, 142, 104;

    --systemColor-gray-0: #ffffff;
    --systemColor-gray-1: #f8f9fb;
    --systemColor-gray-2: #f2f4f6;
    --systemColor-gray-3: #e5e5ea;
    --systemColor-gray-4: #d1d1d6;
    --systemColor-gray-5: #c7c7cc;
    --systemColor-gray-6: #aeaeb3;
    --systemColor-gray-7: #94949a;
    --systemColor-gray-8: #7a7a82;
    --systemColor-gray-9: #61616a;
    --systemColor-gray-10: #494951;
    --systemColor-gray-11: #333339;
    --systemColor-gray-12: #1e1e22;
    --systemColor-gray-13: #050506;
    --systemColor-gray-14: #000000;

    --systemColor-black: rgb(0, 0, 0);
    --systemColor-white: rgb(255, 255, 255);
  }

  :root[data-theme="dark"] {
    --systemColor-red-raw: var(--systemColor-red-dark);
    --systemColor-yellow-raw: var(--systemColor-yellow-dark);
    --systemColor-orange-raw: var(--systemColor-orange-dark);
    --systemColor-green-raw: var(--systemColor-green-dark);
    --systemColor-mint-raw: var(--systemColor-mint-dark);
    --systemColor-teal-raw: var(--systemColor-teal-dark);
    --systemColor-cyan-raw: var(--systemColor-cyan-dark);
    --systemColor-blue-raw: var(--systemColor-blue-dark);
    --systemColor-indigo-raw: var(--systemColor-indigo-dark);
    --systemColor-purple-raw: var(--systemColor-purple-dark);
    --systemColor-pink-raw: var(--systemColor-pink-dark);
    --systemColor-brown-raw: var(--systemColor-brown-dark);

    --systemColor-red: rgb(var(--systemColor-red-raw));
    --systemColor-yellow: rgb(var(--systemColor-yellow-raw));
    --systemColor-orange: rgb(var(--systemColor-orange-raw));
    --systemColor-green: rgb(var(--systemColor-green-raw));
    --systemColor-mint: rgb(var(--systemColor-mint-raw));
    --systemColor-teal: rgb(var(--systemColor-teal-raw));
    --systemColor-cyan: rgb(var(--systemColor-cyan-raw));
    --systemColor-blue: rgb(var(--systemColor-blue-raw));
    --systemColor-indigo: rgb(var(--systemColor-indigo-raw));
    --systemColor-purple: rgb(var(--systemColor-purple-raw));
    --systemColor-pink: rgb(var(--systemColor-pink-raw));
    --systemColor-brown: rgb(var(--systemColor-brown-raw));

    --systemColor-bg: var(--systemColor-gray-13);
    --systemColor-text: var(--systemColor-gray-4);
    --systemColor-sub-text: var(--systemColor-gray-7);
    --systemColor-title: var(--systemColor-gray-0);
    --systemColor-border: var(--systemColor-gray-9);
    --systemColor-svg: var(--systemColor-gray-3);

    --systemColor-timeline-text: var(--systemColor-text);
    --systemColor-timeline-border: var(--systemColor-border);
    --systemColor-timeline-sub-text: var(--systemColor-sub-text);
    --systemColor-timeline-boxShadow: var(--systemColor-gray-12);
    --systemColor-timeline__svg: var(--systemColor-svg);
    --systemColor-timeline__pill-color: var(--systemColor-blue-raw);
    --systemColor-timeline__pill-opacity: 0.8;
    --systemColor-timeline__pill-opacity--hover: 1;
    --systemColor-timeline__pill-text: var(--systemColor-gray-1);
    --systemColor-timeline__pill-text--hover: var(--systemColor-gray-3);

    --systemColor-content-text: var(--systemColor-text);
    --systemColor-content-sub-text: var(--systemColor-gray-5);
    --systemColor-content-description: var(--systemColor-gray-7);
    --systemColor-content__inline-code-bg: var(--systemColor-gray-10);
    --systemColor-content__inline-code-text: var(--systemColor-gray-2);
    --systemColor-content__chapter-item: var(--systemColor-gray-9);
    --systemColor-content__chapter-item--hover: var(--systemColor-gray-7);
    --systemColor-content__chapter-border: var(--systemColor-gray-9);
    --systemColor-content__chapter-border--hover: var(--systemColor-gray-7);
    --systemColor-content__blockquote-bg: rgb(30, 30, 30);
    --systemColor-content__blockquote-text: var(--systemColor-gray-1);
    --systemColor-content__blockquote-border: rgb(49, 49, 49);
    --systemColor-content__figure-bg: rgb(229, 229, 234);
    --systemColor-content__figure-text: var(--systemColor-gray-10);
    --systemColor-content__label-bg: rgba(var(--systemColor-green-raw), 0.2);
    --systemColor-content__label-bg--hover: rgba(
      var(--systemColor-green-raw),
      1
    );
    --systemColor-content__label-text: var(--systemColor-green);
    --systemColor-content__label-text--hover: var(--systemColor-gray-13);
    --systemColor-content__label-border: var(--systemColor-green);
    --systemColor-content__summary-bg: var(--systemColor-gray-12);
    --systemColor-content__sumarry-text: var(--systemColor-gray-2);

    --systemColor-terminal__toolbar-bg: rgb(25, 25, 25);
    --systemColor-cards__featured-bg: var(--systemColor-gray-13);
    --systemColor-cards__featured-text: var(--systemColor-white);

    --systemColor-navbar-bg: var(--systemColor-gray-14);
    --systemColor-navbar-text: var(--systemColor-gray-2);
    --systemColor-navbar__item-bg: transparent;
    --systemColor-navbar__item-bg--hover: var(--systemColor-gray-11);
    --systemColor-navbar__item-text: var(--systemColor-gray-4);
    --systemColor-navbar__item-text--hover: var(--systemColor-gray-1);
    --systemColor-navbar-border: var(--systemColor-gray-11);

    --systemColor-footer-bg-1: var(--systemColor-gray-13);
    --systemColor-footer-bg-2: var(--systemColor-gray-14);
  }

  :root[data-theme="light"] {
    --systemColor-red-raw: var(--systemColor-red-light);
    --systemColor-yellow-raw: var(--systemColor-yellow-light);
    --systemColor-orange-raw: var(--systemColor-orange-light);
    --systemColor-green-raw: var(--systemColor-green-light);
    --systemColor-mint-raw: var(--systemColor-mint-light);
    --systemColor-teal-raw: var(--systemColor-teal-light);
    --systemColor-cyan-raw: var(--systemColor-cyan-light);
    --systemColor-blue-raw: var(--systemColor-blue-light);
    --systemColor-indigo-raw: var(--systemColor-indigo-light);
    --systemColor-purple-raw: var(--systemColor-purple-light);
    --systemColor-pink-raw: var(--systemColor-pink-light);
    --systemColor-brown-raw: var(--systemColor-brown-light);

    --systemColor-red: rgb(var(--systemColor-red-raw));
    --systemColor-yellow: rgb(var(--systemColor-yellow-raw));
    --systemColor-orange: rgb(var(--systemColor-orange-raw));
    --systemColor-green: rgb(var(--systemColor-green-raw));
    --systemColor-mint: rgb(var(--systemColor-mint-raw));
    --systemColor-teal: rgb(var(--systemColor-teal-raw));
    --systemColor-cyan: rgb(var(--systemColor-cyan-raw));
    --systemColor-blue: rgb(var(--systemColor-blue-raw));
    --systemColor-indigo: rgb(var(--systemColor-indigo-raw));
    --systemColor-purple: rgb(var(--systemColor-purple-raw));
    --systemColor-pink: rgb(var(--systemColor-pink-raw));
    --systemColor-brown: rgb(var(--systemColor-brown-raw));

    --systemColor-bg: var(--systemColor-gray-1);
    --systemColor-text: var(--systemColor-gray-10);
    --systemColor-sub-text: var(--systemColor-gray-8);
    --systemColor-title: var(--systemColor-gray-13);
    --systemColor-border: var(--systemColor-gray-5);
    --systemColor-svg: var(--systemColor-gray-10);

    --systemColor-timeline-text: var(--systemColor-text);
    --systemColor-timeline-border: var(--systemColor-border);
    --systemColor-timeline-sub-text: var(--systemColor-sub-text);
    --systemColor-timeline-boxShadow: var(--systemColor-gray-6);
    --systemColor-timeline__svg: var(--systemColor-svg);
    --systemColor-timeline__pill-color: var(--systemColor-blue-raw);
    --systemColor-timeline__pill-opacity: 0.8;
    --systemColor-timeline__pill-opacity--hover: 1;
    --systemColor-timeline__pill-text: var(--systemColor-gray-1);
    --systemColor-timeline__pill-text--hover: var(--systemColor-gray-3);

    --systemColor-content-text: var(--systemColor-text);
    --systemColor-content-sub-text: var(--systemColor-gray-8);
    --systemColor-content-description: var(--systemColor-gray-7);
    --systemColor-content__inline-code-bg: var(--systemColor-gray-3);
    --systemColor-content__inline-code-text: var(--systemColor-gray-13);
    --systemColor-content__chapter-item: var(--systemColor-gray-7);
    --systemColor-content__chapter-item--hover: var(--systemColor-gray-5);
    --systemColor-content__chapter-border: var(--systemColor-gray-7);
    --systemColor-content__chapter-border--hover: var(--systemColor-gray-5);
    --systemColor-content__blockquote-bg: rgb(229, 229, 234);
    --systemColor-content__blockquote-text: var(--systemColor-gray-13);
    --systemColor-content__blockquote-border: rgb(229, 229, 234);
    --systemColor-content__figure-bg: var(--systemColor-gray-2);
    --systemColor-content__figure-text: var(--systemColor-gray-10);
    --systemColor-content__label-bg: rgba(var(--systemColor-green-raw), 0.2);
    --systemColor-content__label-bg--hover: rgba(
      var(--systemColor-green-raw),
      1
    );
    --systemColor-content__label-text: var(--systemColor-green);
    --systemColor-content__label-text--hover: var(--systemColor-gray-2);
    --systemColor-content__label-border: var(--systemColor-green);
    --systemColor-content__summary-bg: var(--systemColor-gray-3);
    --systemColor-content__sumarry-text: var(--systemColor-gray-12);

    --systemColor-cards__featured-bg: var(--systemColor-gray-2);
    --systemColor-cards__featured-text: var(--systemColor-gray-12);

    --systemColor-navbar-bg: white;
    --systemColor-navbar-text: black;
    --systemColor-navbar__item-bg: transparent;
    --systemColor-navbar__item-bg--hover: var(--systemColor-gray-3);
    --systemColor-navbar__item-text: var(--systemColor-gray-10);
    --systemColor-navbar__item-text--hover: black;
    --systemColor-navbar-border: var(--systemColor-gray-4);

    --systemColor-footer-bg-1: var(--systemColor-gray-2);
    --systemColor-footer-bg-2: var(--systemColor-gray-3);
  }
`;

export default RootVariables;
