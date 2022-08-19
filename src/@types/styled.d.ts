/**
 * A Typescript definition to declare the global type for styled-components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
  }
}
