import type { FC } from "react";
import type { AttributeDefinition } from "../../../utils/types.js";
import { STR } from "../../../utils/i18n.js";

type Props = {
  definition: AttributeDefinition;
  value?: unknown;
  className?: string;
};

export const AttributeValue: FC<Props> = ({ definition, value, className }) => {
  const { type, options, currencyMode } = definition;

  const render = () => {
    if (value == null || (Array.isArray(value) && value.length === 0)) {
      return <span className="attr-empty">{STR.noValue}</span>;
    }

    switch (type) {
      case "text":
      case "longText":
        return (
          <span className={type === "longText" ? "attr-long" : ""}>
            {String(value)}
          </span>
        );

      case "singleSelect": {
        const opt = options?.find((o) => o.id === value);
        if (!opt) return <span>{String(value)}</span>;
        return (
          <span>
            {opt.label}
            {opt.deprecated ? ` (${STR.deprecated})` : ""}
          </span>
        );
      }

      case "multiSelect": {
        const ids = Array.isArray(value) ? value : [];
        return (
          <span className="chips">
            {ids.map((id) => {
              const opt = options?.find((o) => o.id === id);
              const label = opt
                ? `${opt.label}${opt.deprecated ? ` (${STR.deprecated})` : ""}`
                : String(id);
              return (
                <span className="chip" key={String(id)}>
                  {label}
                </span>
              );
            })}
          </span>
        );
      }

      case "user": {
        const u = value as { name?: string; displayName?: string; inactive?: boolean };
        const name = u.name ?? u.displayName ?? String(value);
        return (
          <span>
            {name}
            {u.inactive ? " (inactive)" : ""}
          </span>
        );
      }

      case "users": {
        const arr = Array.isArray(value)
          ? (value as Array<{ name?: string; displayName?: string; inactive?: boolean }>)
          : [];
        return (
          <span className="chips">
            {arr.map((u, i) => {
              const name = u.name ?? u.displayName ?? String(u);
              return (
                <span className="chip" key={i}>
                  {name}
                  {u.inactive ? " (inactive)" : ""}
                </span>
              );
            })}
          </span>
        );
      }

      case "date": {
        const d = new Date(String(value));
        return <time dateTime={d.toISOString()}>{d.toLocaleDateString()}</time>;
      }

      case "number":
        return <span>{new Intl.NumberFormat().format(Number(value))}</span>;

      case "boolean":
        return <span>{value ? STR.yes : STR.no}</span>;

      case "currency": {
        const v =
          typeof value === "object" && value !== null && "amount" in value
            ? (value as { amount: number; currency?: string })
            : { amount: Number(value), currency: undefined };
        const code =
          v.currency ?? (currencyMode === "perAttribute" ? "USD" : "");
        const amount = Number.isFinite(v.amount) ? v.amount : 0;
        return (
          <span>
            {code ? `${code} ` : ""}
            {new Intl.NumberFormat(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(amount)}
          </span>
        );
      }

      case "attachment": {
        const files = Array.isArray(value)
          ? (value as Array<{ name: string; size?: string }>)
          : [];
        return (
          <ul className="attachments">
            {files.map((f, i) => (
              <li key={i}>
                {f.name}
                {f.size ? ` · ${f.size}` : ""}
              </li>
            ))}
          </ul>
        );
      }

      case "link": {
        const linkVal =
          typeof value === "object" && value !== null
            ? (value as { href?: string; label?: string })
            : null;
        const href = linkVal?.href ?? (typeof value === "string" ? value : undefined);
        const label = linkVal?.label;
        return href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label ?? href}
          </a>
        ) : (
          <span>{STR.noValue}</span>
        );
      }

      default:
        return <span>{String(value)}</span>;
    }
  };

  return <div className={className}>{render()}</div>;
};
