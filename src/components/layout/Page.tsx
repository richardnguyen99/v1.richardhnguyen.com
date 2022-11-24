/**
 * A React component that display a template for pages (/pages).
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { Navbar } from "@components";
import type { CFC } from "@config/react";

const Page: CFC<HTMLElement> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Page;
