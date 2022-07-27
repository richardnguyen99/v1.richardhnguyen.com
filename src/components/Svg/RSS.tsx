/**
 * React component for Octicon RSS icon
 *
 * @see https://primer.style/octicons/rss-16
 */
import * as React from "react";

import type { SVGProps } from "./type";

const RSSIcon: React.FC<SVGProps> = ({ size = 16, ...rest }) => {
  return size == 16 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z"
      ></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3.5 3.25a.75.75 0 01.75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 01-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 01-.75-.75zM3.5 19a2 2 0 114 0 2 2 0 01-4 0zm.75-9.5a.75.75 0 000 1.5 9.25 9.25 0 019.25 9.25.75.75 0 001.5 0C15 14.313 10.187 9.5 4.25 9.5z"
      ></path>
    </svg>
  );
};

export default RSSIcon;
