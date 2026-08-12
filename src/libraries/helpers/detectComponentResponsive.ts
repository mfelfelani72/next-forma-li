/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 14:06:46
 * @Description: Detect device type from cookies and return appropriate component
 */

import { type ComponentType } from "react";

export function detectComponentsResponsive(
  deviceType: string | undefined,
  MobileComponent: ComponentType<any>,
  IpadComponent: ComponentType<any>,
  DesktopComponent: ComponentType<any>
): ComponentType<any> | string {
  switch (deviceType) {
    case "mobile":
      return MobileComponent;

    case "ipad":
      return IpadComponent;

    case "desktop":
      return DesktopComponent;

    default:
      return "Unknown";
  }
}