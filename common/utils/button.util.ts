import { ButtonCollapseBreakPoint } from "../types/common.types";

export function getButtonCollapseStyle(
  breakpoint: ButtonCollapseBreakPoint | undefined
): string {
  if (breakpoint === undefined) return "";
  let style = "sr-only ";
  if (breakpoint === "2xl") {
    style += "2xl:not-sr-only";
  } else if (breakpoint === "xl") {
    style += "xl:not-sr-only";
  } else if (breakpoint === "lg") {
    style += "lg:not-sr-only";
  } else {
    style += "md:not-sr-only";
  }

  return style;
}
