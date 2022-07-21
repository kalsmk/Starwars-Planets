import _ from "lodash";

const util = {};

util.formatList = (list) => {
  const sortNames = _.sortBy(list.results, "name");
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
    const tonum = _.toInteger(dataValue);
    if (tonum > 999) {
      const val = tonum.toLocaleString("en-US");
      return val.replaceAll(",", " ");
    }
    return dataValue;
  }
  return dataValue === "unknown" ? "?" : dataValue;
};

export default util;
