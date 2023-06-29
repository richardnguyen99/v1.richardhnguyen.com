import * as React from "react";
import { CalloutProps } from "./types";
import {
  AlertIcon,
  CheckCircleIcon,
  InfoIcon,
  XCircleIcon,
} from "@primer/octicons-react";

type IconMap<T = object> = {
  [k in CalloutProps["type"]]: React.ReactElement<T>;
};

const iconComponents: IconMap = {
  default: <InfoIcon size={32} className="!block fill-sky-500" />,
  info: <InfoIcon size={32} className="!block fill-sky-500" />,
  danger: <XCircleIcon size={32} className="!block fill-rose-500" />,
  warning: <AlertIcon size={32} className="!block fill-amber-500" />,
  success: <CheckCircleIcon size={32} className="!block fill-lime-500" />,
};

const CalloutIcon: React.FC<Pick<CalloutProps, "type">> = ({ type }) => {
  return iconComponents[type];
};

export default CalloutIcon;
