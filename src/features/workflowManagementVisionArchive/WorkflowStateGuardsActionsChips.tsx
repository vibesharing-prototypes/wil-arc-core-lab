import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { STR } from "../../utils/i18n.js";

export interface WorkflowStateGuardsActionsChipsProps {
  guardTotal: number;
  actionTotal: number;
  /** Tighter typography for the narrow graph canvas card. */
  dense?: boolean;
}

const pillSx = (fontSize: string) => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  gap: 0.25,
  bgcolor: "action.hover",
  borderRadius: 1,
  px: 0.5,
  py: 0.125,
  flexShrink: 0,
  fontSize,
  lineHeight: 1.25,
});

/**
 * Compact "Guards:" / "Actions:" chips with counts (or N/A) — totals across outgoing transitions.
 * Vision workflow prototype only.
 */
export const WorkflowStateGuardsActionsChips: FC<WorkflowStateGuardsActionsChipsProps> = ({
  guardTotal,
  actionTotal,
  dense = false,
}) => {
  const fontSize = dense ? "0.65rem" : "0.75rem";
  const guardLabel = guardTotal > 0 ? String(guardTotal) : STR.workflowEditor.stateGuardsActionsCountNone;
  const actionLabel = actionTotal > 0 ? String(actionTotal) : STR.workflowEditor.stateGuardsActionsCountNone;

  return (
    <Stack direction="row" alignItems="center" gap={0.5} flexWrap="wrap" sx={{ pt: 0.25, mt: "auto" }}>
      <Box component="span" sx={pillSx(fontSize)} aria-label={STR.workflowEditor.stateGuardsChipAria(guardTotal)}>
        <Typography component="span" variant="caption" sx={{ fontSize, color: "text.secondary" }}>
          {STR.workflowEditor.stateGuardsChipLabel}
        </Typography>
        <Typography component="span" variant="caption" fontWeight={600} sx={{ fontSize }}>
          {guardLabel}
        </Typography>
      </Box>
      <Box component="span" sx={pillSx(fontSize)} aria-label={STR.workflowEditor.stateActionsChipAria(actionTotal)}>
        <Typography component="span" variant="caption" sx={{ fontSize, color: "text.secondary" }}>
          {STR.workflowEditor.stateActionsChipLabel}
        </Typography>
        <Typography component="span" variant="caption" fontWeight={600} sx={{ fontSize }}>
          {actionLabel}
        </Typography>
      </Box>
    </Stack>
  );
};
