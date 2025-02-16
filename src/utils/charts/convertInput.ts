import { StitchInChart, STITCH_TYPE_KEYS } from "../../types/Stitch.types";

export const parseStitchInput = (input: string) => {

  type StitchType = (typeof STITCH_TYPE_KEYS)[number];

  const stitchMap: Record<string, StitchType> = {
    magicRing: "magicRing",
    ch: "chain",
    inc: "inc",
    dec: "dec",
    sc: "single",
    hdc: "halfDouble",
    dc: "double",
    tr: "treble",
    slst: "slip",
  };

  return input
    .trim()
    .split("\n")
    .map((line) => {
      let index = 0;
      return line
        .split(",")
        .map((stitchStr) => {
          const match = stitchStr.trim().match(/^([a-z]+)(\d+)?(?:->(\d+))?$/i);
          if (!match) return null;

          const [, stitchKey, countStr, relativeToStr] = match;
          const type = stitchMap[stitchKey];

          if (!type) return null;

          const count = countStr ? parseInt(countStr, 10) : 1;
          const relativeTo = relativeToStr
            ? parseInt(relativeToStr, 10)
            : undefined;

          return Array.from(
            { length: count },
            () =>
              ({
                type,
                index: index++,
                ...(relativeTo !== undefined ? { relativeTo } : {}),
              } as StitchInChart)
          );
        })
        .flat()
        .filter((item): item is StitchInChart => !!item);
    });
};
