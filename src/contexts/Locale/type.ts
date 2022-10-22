/**
 * Type definition for Locale Context
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import React from "react";

export type ContextType = {
  lang: string;
};

export type ProviderProps = ContextType & {
  children?: React.ReactNode | React.ReactNode[];
};
