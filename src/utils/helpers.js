const util = {};

util.formatList = (list) => {
  const sortNames = list.results.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (list = {
    ...list,
    results: sortNames,
  });
};

util.SurfaceArea = (surfaceWater, diameter) => {
  if (surfaceWater === "unknown" || diameter === "unknown") {
    return "?";
  }
  const radius = Math.round(diameter / 2);
  const surfacearea = Math.round(
    4 * Math.PI * radius * radius * (surfaceWater / 100)
  );
  return util.DataFormat(surfacearea, "number");
};

util.DataFormat = (dataValue, type) => {
  if (type === "number" && dataValue !== "unknown") {
    const tonum = Number(dataValue);
    if (tonum > 999) {
      const val = tonum.toLocaleString("en-US");
      return val.replaceAll(",", " ");
    }
    return dataValue;
  }
  return dataValue === "unknown" ? "?" : dataValue;
};

export default util;
