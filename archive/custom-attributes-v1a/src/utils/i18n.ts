export const t = (_key: string, fallback: string) => fallback;

// common strings
export const STR = {
  required: t("required", "Required"),
  deprecated: t("deprecated", "Deprecated"),
  noValue: t("noValue", "—"),
  yes: t("yes", "Yes"),
  no: t("no", "No"),
  schema: {
    header: t("schema.header", "Schema"),
  },
};
