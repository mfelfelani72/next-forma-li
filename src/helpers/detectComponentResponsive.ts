/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 14:06:46
 * @Description: Detect device type from cookies and return appropriate component
 */

import { cookies } from "next/headers";
import { type ComponentType } from "react";

export async function detectComponentsResponsive(
  MobileComponent: ComponentType<any>,
  IpadComponent: ComponentType<any>,
  DesktopComponent: ComponentType<any>
): Promise<ComponentType<any> | string> {
  const cookieStore = await cookies();
  const deviceType = cookieStore.get("device-type")?.value;

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