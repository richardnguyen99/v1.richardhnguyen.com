/**
 * A React component that allows its children to consume Locale Context
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import LocaleContext from "./Context";
import { ProviderProps } from "./type";

const Provider: React.FC<ProviderProps> = ({ children, lang }) => {
  return (
    <LocaleContext.Provider value={{ lang }}>{children}</LocaleContext.Provider>
  );
};

export default Provider;
