import * as React from "react";
import {
  awsIcons,
  cloudIcons,
  klarityIcons,
  menuIcons,
  osComponentsIcons,
  osProviderIcons,
  uiIcons,
  NCIcons,
} from "./icons";

export const paths = {
  ...awsIcons,
  ...cloudIcons,
  ...klarityIcons,
  ...menuIcons,
  ...uiIcons,
  ...osProviderIcons,
  ...osComponentsIcons,
  ...NCIcons,
  default: <path />,
} as const;

export const getPath = (name: PathName) => {
  return paths[name] ?? paths["default"];
};

export type PathName = keyof typeof paths;
