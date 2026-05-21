import type { FC } from "react";
import {
  Alert,
  Button,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PageHeader } from "@diligentcorp/atlas-react-bundle";
import AddIcon from "@diligentcorp/atlas-react-bundle/icons/Add";
import { useNavigate } from "react-router";
import PageLayout from "../components/PageLayout.js";
import WorkflowInstanceTable from "../features/workflowManagement/WorkflowInstanceTable.js";
import {
  RISK_LIFECYCLE_INSTANCES,
  RISK_LIFECYCLE_STATE_VIEW_MODELS,
  RISK_LIFECYCLE_TEMPLATE,
} from "../features/workflowManagement/sampleData.js";
import { STR } from "../utils/i18n.js";

/**
 * Archived workflows home IA: template list + one global Active instances section.
 * See `src/features/workflowManagementGlobalInstancesArchive/README.md`.
 */
const WorkflowsGlobalInstancesArchivePage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHeader
        pageTitle={STR.explorations.workflowsGlobalInstancesArchive.pageTitle}
        pageSubtitle={STR.explorations.workflowsGlobalInstancesArchive.pageSubtitle}
      />

      <Alert severity="info" sx={{ mt: 2, mb: 3 }}>
        {STR.explorations.workflowsGlobalInstancesArchive.archiveAlert}
      </Alert>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
        sx={{ mb: 1.5 }}
      >
        <Typography component="h2" variant="h4" sx={{ fontWeight: 600 }}>
          {STR.workflowManagement.templatesListSectionTitle}
        </Typography>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          onClick={() => navigate("/workflows/template/edit", { state: { mode: "new" } })}
        >
          {STR.workflowEditor.newTemplateButton}
        </Button>
      </Stack>

      <Paper variant="outlined" sx={{ mb: 3, overflow: "hidden" }}>
        <Table size="small" aria-label={STR.workflowManagement.templatesListSectionTitle}>
          <TableHead>
            <TableRow>
              <TableCell>{STR.workflowManagement.templatesListColTemplate}</TableCell>
              <TableCell align="right">{STR.workflowManagement.templatesListColVersion}</TableCell>
              <TableCell>{STR.workflowManagement.templatesListColService}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {RISK_LIFECYCLE_TEMPLATE.name}
                </Typography>
              </TableCell>
              <TableCell align="right">{RISK_LIFECYCLE_TEMPLATE.version}</TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
                  {RISK_LIFECYCLE_TEMPLATE.service}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Divider sx={{ mb: 3 }} />

      <WorkflowInstanceTable
        instances={RISK_LIFECYCLE_INSTANCES}
        stateViewModels={RISK_LIFECYCLE_STATE_VIEW_MODELS}
      />
    </PageLayout>
  );
};

export default WorkflowsGlobalInstancesArchivePage;
