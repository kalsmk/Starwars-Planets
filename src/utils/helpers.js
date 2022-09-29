export const surfaceArea = (surfaceWater) => {
  if (surfaceWater === "unknown") {
    return "-";
  } else {
    return `${surfaceWater}%`;
  }
};

export const dataFormat = (dataValue) => {
  if (dataValue === "unknown") {
    return "-";
  }
  const tonum = Number(dataValue);
  const val = tonum.toLocaleString("en-US");
  return val.replaceAll(",", " ");
};
