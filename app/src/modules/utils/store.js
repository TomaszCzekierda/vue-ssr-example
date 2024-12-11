export const deepMerge = (target, source) => {
  const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

  return Object.keys(source).reduce(
    (acc, key) => {
      if (isObject(source[key]) && isObject(target[key])) {
        acc[key] = deepMerge(target[key], source[key]);
      } else if (isObject(source[key])) {
        acc[key] = source[key];
      } else {
        acc[key] = source[key];
      }

      return acc;
    },
    { ...target }
  );
};
