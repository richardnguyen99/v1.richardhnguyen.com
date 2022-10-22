/**
 * React context for Locale global state
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { ContextType } from "./type";

const Context = React.createContext<ContextType>({ lang: "en" });
Context.displayName = "LocalContext";

export default Context;
