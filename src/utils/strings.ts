const isBlank = (value: string | null | undefined): boolean => {
  return value == null || value.trim().length === 0;
};

const nullifyIfBlank = (
  value: string | null | undefined
): string | null | undefined => {
  return isBlank(value) ? null : value;
};

const titleize = (value: string) => {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export { isBlank, nullifyIfBlank, titleize };
