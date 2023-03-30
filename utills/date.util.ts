interface RTFUnits {
  unit: Intl.RelativeTimeFormatUnit;
  ms: number;
}

const rtfUnits: RTFUnits[] = [
  { unit: "year", ms: 31536000000 },
  { unit: "month", ms: 2628000000 },
  { unit: "week", ms: 604800000 }, // 7 x 24 x 60 x 60 x 1000
  { unit: "day", ms: 86400000 }, // 24 x 60 x 60 x 1000
  { unit: "hour", ms: 3600000 }, // 60 x 60 x 1000
  { unit: "minute", ms: 60000 }, // 60 x 1000
  { unit: "second", ms: 1000 },
];

const rtf = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
  style: "short",
});

const getRelativeTime = (date?: Date, pivot: Date = new Date()) => {
  if (!date) return "";

  const timeDifference = date.getTime() - pivot.getTime();

  return formatUnit(timeDifference);
};

const formatUnit = (elapsed: number) => {
  for (const { unit, ms } of rtfUnits) {
    if (Math.abs(elapsed) >= ms || unit === "second") {
      return rtf.format(Math.round(elapsed / ms), unit);
    }
  }

  return "";
};

export { getRelativeTime };
