import * as React from "react";
import { Script } from "gatsby";
import { GatsbyBrowser } from "gatsby";
import { Prism } from "prism-react-renderer";

import RootLayout from "./src/components/Layout/Root";
import ThemeProvider from "./src/components/Theme/Provider";

import "./fonts/fonts.css";
import "./src/styles/index.css";
import "katex/dist/katex.min.css";

(typeof global !== "undefined" ? global : window).Prism = Prism;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <ThemeProvider>
        <RootLayout>{element}</RootLayout>
      </ThemeProvider>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-python.min.js"
        integrity="sha512-3qtI9+9JXi658yli19POddU1RouYtkTEhTHo6X5ilOvMiDfNvo6GIS6k2Ukrsx8MyaKSXeVrnIWeyH8G5EOyIQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
};
