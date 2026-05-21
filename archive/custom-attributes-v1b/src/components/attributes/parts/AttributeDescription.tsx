import { useState, type FC } from "react";

type Props = {
  id: string; // for aria-describedby
  text?: string;
  maxLines?: number;
  tooltip?: string; // optional extended text
  className?: string;
};

export const AttributeDescription: FC<Props> = ({
  id,
  text,
  maxLines: _maxLines = 3,
  tooltip,
  className,
}) => {
  if (!text && !tooltip) return null;

  const [expanded, setExpanded] = useState(false);
  const inlineText = text ?? "";
  const shouldClamp = inlineText.length > 220 && !expanded;

  return (
    <div id={id} className={className}>
      {inlineText ? (
        <p
          className={shouldClamp ? "attr-desc clamp" : "attr-desc"}
          style={{ margin: 0 }}
        >
          {inlineText}
          {shouldClamp ? (
            <>
              {" "}
              <button
                type="button"
                className="link-like"
                onClick={() => setExpanded(true)}
              >
                More
              </button>
            </>
          ) : null}
        </p>
      ) : null}
      {tooltip ? (
        <div className="attr-desc-tooltip">
          <span className="info-icon" title={tooltip} aria-label={tooltip}>
            i
          </span>
        </div>
      ) : null}
    </div>
  );
};
