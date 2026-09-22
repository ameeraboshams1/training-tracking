function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function isArray(value) {
  return Array.isArray(value);
}