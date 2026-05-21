export const ariaDescribedBy = (ids: Array<string | undefined>) =>
  ids.filter(Boolean).join(" ") || undefined;
