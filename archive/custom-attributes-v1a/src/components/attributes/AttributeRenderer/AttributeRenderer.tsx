import type { FC } from "react";
import { AttributeDescription } from "../parts/AttributeDescription.js";
import { AttributeLabel } from "../parts/AttributeLabel.js";
import { AttributeValue } from "../parts/AttributeValue.js";
import type { AttributeRendererProps } from "./AttributeRenderer.types.js";
import { ariaDescribedBy } from "../../../utils/a11y.js";

export const AttributeRenderer: FC<AttributeRendererProps> = ({
  definition,
  value,
  state = "readOnly",
  errorMessage,
  className,
}) => {
  const labelId = `label-${definition.id}`;
  const descId = `desc-${definition.id}`;
  const errId = `err-${definition.id}`;

  const describedBy = ariaDescribedBy([
    definition.semanticDescription ? descId : undefined,
    state === "error" && errorMessage ? errId : undefined,
  ]);

  return (
    <section
      className={`attr ${state} ${className ?? ""}`.trim()}
      aria-describedby={describedBy}
      aria-invalid={state === "error" ? true : undefined}
    >
      <AttributeLabel
        id={labelId}
        label={definition.name}
        required={!!definition.required}
      />
      <AttributeDescription id={descId} text={definition.semanticDescription} />
      <div className="attr-meta">{definition.type}</div>
      <AttributeValue definition={definition} value={value} />
      {state === "error" && errorMessage ? (
        <div id={errId} role="alert" className="attr-error">
          {errorMessage}
        </div>
      ) : null}
    </section>
  );
};

export default AttributeRenderer;
