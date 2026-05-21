import type { FC } from "react";
import { STR } from "../../../utils/i18n.js";

type Props = {
  id: string;
  label: string;
  required?: boolean;
  className?: string;
};

export const AttributeLabel: FC<Props> = ({ id, label, required, className }) => {
  return (
    <div className={className}>
      <label id={id} className="attr-label">
        {label}
        {required ? <span aria-hidden="true" className="attr-required"> *</span> : null}
        {required ? <span className="sr-only">({STR.required})</span> : null}
      </label>
    </div>
  );
};
