/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-07 06:31:56
 * @Description: Device detection hook for client-side
 */
"use client";

import { useState, useEffect, useMemo } from "react";

type DeviceType = "mobile" | "ipad" | "desktop";
type Orientation = "landscape" | "portrait";

interface DeviceInfo {
  type: DeviceType;
  orientation: Orientation;
  screenWidth: number;
  screenHeight: number;
  isTouchDevice: boolean;
  isMobile: boolean;
  isIpad: boolean;
  isDesktop: boolean;
}

export function useDevice(): DeviceInfo {
  const [screenWidth, setScreenWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024;
  });
  const [screenHeight, setScreenHeight] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 768;
  });
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deviceInfo = useMemo((): DeviceInfo => {
    const orientation: Orientation =
      screenWidth > screenHeight ? "landscape" : "portrait";

    let type: DeviceType;
    if (screenWidth < 540) {
      type = "mobile";
    } else if (screenWidth >= 540 && screenWidth < 992) {
      type = "ipad";
    } else {
      type = "desktop";
    }

    return {
      type,
      orientation,
      screenWidth,
      screenHeight,
      isTouchDevice,
      isMobile: type === "mobile",
      isIpad: type === "ipad",
      isDesktop: type === "desktop",
    };
  }, [screenWidth, screenHeight, isTouchDevice]);

  return deviceInfo;
}

export default useDevice;