/* eslint-disable indent */
/**
 * A React component to display an alert component what will be imported to
 * <MDXProvider /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { AlertProps, AlertIconType } from "./type";
import {
  StyledAlertIcon,
  StyledAlertPanel,
  StyledAlertTitle,
  StyledAlertWrapper,
} from "./style";

import SVG from "@components/Svg";

const Alert: React.FC<AlertProps> = ({
  title,
  status = "default",
  icon = "information",
  children,
  ...rest
}) => {
  const renderAlertIcon = (_icon: AlertIconType) => {
    switch (_icon) {
      case "checkmark":
        return <SVG.AlertCheckmark />;
      case "information":
      default:
        return <SVG.AlertInfo />;
    }
  };

  return (
    <StyledAlertWrapper data-status={status} className={status} {...rest}>
      <StyledAlertPanel>
        <StyledAlertIcon>{renderAlertIcon(icon)}</StyledAlertIcon>
        <StyledAlertTitle>{title}</StyledAlertTitle>
      </StyledAlertPanel>
      {children}
    </StyledAlertWrapper>
  );
};

export default Alert;
