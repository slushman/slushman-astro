/**
 * Tailwind Screens Settings
 */

const settings = require("./tailwind.settings");

const remToPx = (rem) => {
  return `${rem * 16}px`;
};

module.exports = {
  "2xs": remToPx(settings.screensRem["2xs"]),
  xs: remToPx(settings.screensRem.xs),
  sm: remToPx(settings.screensRem.sm),
  md: remToPx(settings.screensRem.md),
  lg: remToPx(settings.screensRem.lg),
  xl: remToPx(settings.screensRem.xl),
  "2xl": remToPx(settings.screensRem["2xl"]),
  content: "845px",
};
