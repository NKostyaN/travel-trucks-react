export const camelCaseToWords = (txt) => {
  const res = txt.replace(/([A-Z])/g, " $1");
  return res.charAt(0).toUpperCase() + res.slice(1);
};

export const filterObject = (obj) => {
  const filteredObj = {};
  for (const key in obj) {
    if (obj[key]) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
};
