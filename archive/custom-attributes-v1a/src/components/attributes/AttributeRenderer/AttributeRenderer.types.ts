import type { AttributeDefinition } from "../../../utils/types.js";

export type AttributeState =
  | "default"
  | "filled"
  | "required"
  | "error"
  | "readOnly"
  | "disabled";

export interface AttributeRendererProps {
  definition: AttributeDefinition;
  value?: unknown;
  state?: AttributeState;
  errorMessage?: string;
  className?: string;
}
