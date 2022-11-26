/**
 * A React component that renders children into a DOM Node, which exists outside
 * the DOM of parent.
 *
 * @see {gatsby-ssr.tsx} fore more information on how many DOM nodes are created
 * for portals.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import { CFC } from "@config/react";

export interface PortalProps {
  /**
   * @description Id to DOM node that contains the portal component as children.
   *
   * Refer to `gatsby-ssr.tsx` to know how many DOM nodes are created outside
   * the main DOM node. Each outside DOM nodes has its own unique ID.
   */
  portalId: string;
}

const Portal: CFC<HTMLElement, PortalProps> = ({ children, portalId }) => {
  return ReactDOM.createPortal(children, document.querySelector(portalId));
};

export default Portal;
