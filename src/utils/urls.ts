const removeTrailingSlash = (s: string) => {
  const lastIndex = s.length - 1;
  if (lastIndex < 1) return s;
  if (s[lastIndex] === "/") return s.substring(0, lastIndex);
  return s;
};

export { removeTrailingSlash };
