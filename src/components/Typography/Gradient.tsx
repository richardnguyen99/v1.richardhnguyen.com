/* eslint-disable indent */
/**
 * A React component for gradient text components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { StyledGradientBlueText, StyledGradientGreenText } from "./style";
import { GradientTextProps } from "./type";

const Gradient: React.FC<GradientTextProps> = ({
  color = "blue",
  children,
  ...rest
}) => {
  const getGradientColor = () => {
    switch (color) {
      case "green":
        return StyledGradientGreenText;
      default:
        return StyledGradientBlueText;
    }
  };

  const Component = getGradientColor();

  return <Component {...rest}>{children}</Component>;
};

export default Gradient;
