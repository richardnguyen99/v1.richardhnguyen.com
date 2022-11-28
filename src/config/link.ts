export interface IsLinkProps {
  /**
   * @description Accept href prop to make Button an anchor element.
   * @default ""
   */
  href?: string;

  /**
   * @description Accept to prop to make Button a Gatsby Link component.
   * @default ""
   *
   * If `href` and `to` prop are passed together, `href` will override `to`.
   */
  to?: string;

  /**
   * @description Specify value for `target` attribute.
   * @default ""
   *
   * @see {@link https://www.w3schools.com/tags/att_a_target.asp} for more
   * information
   */
  target?: string;
}
