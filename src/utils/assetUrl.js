export const resolveAssetUrl = (value) => {
  if (!value) return "";

  if (
    /^(https?:)?\/\//i.test(value) ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value.startsWith("//") ? `https:${value}` : value;
  }

  const normalizedPath = value.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};
