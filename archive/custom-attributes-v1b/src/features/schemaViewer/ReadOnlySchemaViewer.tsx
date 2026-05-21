import type { FC } from "react";
import type { ObjectSchema } from "../../utils/types.js";
import { AttributeRenderer } from "../../components/attributes/AttributeRenderer/AttributeRenderer.js";

type Props = {
  schema: ObjectSchema;
  className?: string;
};

export const ReadOnlySchemaViewer: FC<Props> = ({ schema, className }) => {
  return (
    <div className={`schema-viewer ${className ?? ""}`.trim()}>
      <header className="schema-header">
        <h1>{schema.objectName}</h1>
        {schema.objectDescription ? (
          <p className="schema-desc">{schema.objectDescription}</p>
        ) : null}
      </header>

      <main className="schema-body">
        {schema.attributes.map((attr) => (
          <AttributeRenderer
            key={attr.id}
            definition={attr}
            state="readOnly"
          />
        ))}
      </main>
    </div>
  );
};
