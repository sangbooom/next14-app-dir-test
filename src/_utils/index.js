export const delay = (param, ms = 2000) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(param);
    }, ms);
  });
};
