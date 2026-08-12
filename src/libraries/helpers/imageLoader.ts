/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Custom image loader for Next.js with configurable basePath
 */

import { ImageLoaderProps } from "next/image";

type NextImageLoaderOptions = {
  basePath?: string;
};

export const imageLoader = (
  { src, width, quality }: ImageLoaderProps,
  options: NextImageLoaderOptions = {}
) => {
  const { basePath = "" } = options;

  let processedSrc = src;

  if (processedSrc.startsWith("http://")) {
    processedSrc = processedSrc.replace("http://", "https://");
  }

  const isExternal = processedSrc.startsWith("https://");

  const finalSrc = isExternal ? processedSrc : `${basePath}${processedSrc}`;

  return `${finalSrc}?w=${width}&q=${quality || 75}`;
};