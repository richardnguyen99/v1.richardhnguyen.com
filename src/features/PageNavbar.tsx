/**
 * A featuring component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import Navbar from "@components/Navbar";

const PageNavbar = () => {
  return (
    <Navbar>
      <Navbar.Container>Hello, World</Navbar.Container>
    </Navbar>
  );
};

export default PageNavbar;
