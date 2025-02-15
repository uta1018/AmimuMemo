export function translateStitchType(stitchType: string, language: "ja" | "en"): string {
  if (language === "en") {
    const stitchTypes: { [key: string]: string } = {
      chain: "CH",
      single: "SH",
      double: "DH",
      halfDouble: "HDH",
      slip: "slst",
    };
    return stitchTypes[stitchType] || stitchType;
  } else {
    const stitchTypes: { [key: string]: string } = {
      chain: "鎖編み",
      single: "細編み",
      double: "長編み",
      halfDouble: "中長編み",
      slip: "引き抜き編み",
    };
    return stitchTypes[stitchType] || stitchType;
  }
}
