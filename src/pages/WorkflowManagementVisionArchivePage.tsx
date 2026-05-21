import type { FC } from "react";
import { Alert, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { PageHeader } from "@diligentcorp/atlas-react-bundle";
import EditIcon from "@diligentcorp/atlas-react-bundle/icons/Edit";
import AddIcon from "@diligentcorp/atlas-react-bundle/icons/Add";
import { useLocation, useNavigate } from "react-router";
import PageLayout from "../components/PageLayout.js";
import type { StatusIndicatorColor } from "../features/workflowManagementVisionArchive/draftTypes.js";
import WorkflowTemplateBoard from "../features/workflowManagementVisionArchive/WorkflowTemplateBoard.js";
import WorkflowInstanceTable from "../features/workflowManagementVisionArchive/WorkflowInstanceTable.js";
import {
  RISK_LIFECYCLE_TEMPLATE,
  RISK_LIFECYCLE_STATE_VIEW_MODELS,
  RISK_LIFECYCLE_INSTANCES,
} from "../features/workflowManagementVisionArchive/sampleData.js";
import { STR } from "../utils/i18n.js";

const ARCHIVE_EDIT_TEMPLATE = "/explorations/workflows-vision-archive/template/edit";

/**
 * Frozen snapshot of the Vision workflows overview + editor entry (see custom-attributes-v2).
 * Preserved under explorations for comparison; active iteration stays in the Vision prototype.
 */
interface WorkflowsLocationState {
  colorOverrides?: Record<string, StatusIndicatorColor>;
}

const WorkflowManagementVisionArchivePage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as WorkflowsLocationState | null;
  const colorOverrides = locationState?.colorOverrides;

  return (
    <PageLayout>
      <PageHeader
        pageTitle={STR.workflowManagement.pageTitle}
        pageSubtitle={STR.workflowManagement.pageSubtitle}
      />

      <Alert severity="info" sx={{ mt: 2, mb: 3 }}>
        {STR.workflowManagement.scaffoldNotice}
      </Alert>

      <Alert severity="warning" sx={{ mb: 3 }}>
        Vision workflows archive snapshot — read-only reference; use Workflows in the nav for the current lab build.
      </Alert>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: 2,
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          backgroundColor: "var(--lens-semantic-color-surface-subtle, #fafafa)",
        }}
      >
        <Stack gap={0.25}>
          <Typography variant="subtitle2" fontWeight={600}>
            {STR.workflowEditor.editorEntryTitle}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {STR.workflowEditor.editorEntryHint}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} flexShrink={0}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<EditIcon />}
            onClick={() =>
              navigate(ARCHIVE_EDIT_TEMPLATE, {
                state: { mode: "edit", template: RISK_LIFECYCLE_TEMPLATE },
              })
            }
          >
            {STR.workflowEditor.editTemplateButton}
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => navigate(ARCHIVE_EDIT_TEMPLATE, { state: { mode: "new" } })}
          >
            {STR.workflowEditor.newTemplateButton}
          </Button>
        </Stack>
      </Box>

      <Stack gap={4}>
        <WorkflowTemplateBoard
          template={RISK_LIFECYCLE_TEMPLATE}
          states={RISK_LIFECYCLE_STATE_VIEW_MODELS}
          colorOverrides={colorOverrides}
        />

        <Divider />

        <WorkflowInstanceTable
          instances={RISK_LIFECYCLE_INSTANCES}
          stateViewModels={RISK_LIFECYCLE_STATE_VIEW_MODELS}
        />
      </Stack>
    </PageLayout>
  );
};

export default WorkflowManagementVisionArchivePage;
