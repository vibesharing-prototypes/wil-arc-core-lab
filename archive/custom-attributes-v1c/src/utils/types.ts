export type AttributeType =
  | "text"
  | "longText"
  | "singleSelect"
  | "multiSelect"
  | "user"
  | "users"
  | "date"
  | "number"
  | "boolean"
  | "currency"
  | "attachment"
  | "link";

export interface Option {
  id: string;
  label: string;
  deprecated?: boolean;
}

export interface AttributeDefinition {
  id: string;
  name: string;
  type: AttributeType;
  required?: boolean;
  semanticDescription?: string;
  options?: Option[]; // for select types
  currencyMode?: "perAttribute" | "perValue"; // currency
  attachmentMode?: "single" | "multiple"; // attachments
  allowGroups?: boolean; // users; keep false in M0 unless DS has it
}

export interface ObjectSchema {
  objectType: string; // e.g., "Risk"
  objectName: string; // localized display name
  objectDescription?: string;
  attributes: AttributeDefinition[];
}
