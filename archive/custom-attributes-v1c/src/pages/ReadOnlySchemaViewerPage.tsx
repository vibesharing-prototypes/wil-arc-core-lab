import { Container } from "@mui/material";
import type { FC } from "react";
import { ReadOnlySchemaViewer } from "../features/schemaViewer/ReadOnlySchemaViewer.js";
import { riskSchema } from "../features/schemaViewer/sampleData.js";

const ReadOnlySchemaViewerPage: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <ReadOnlySchemaViewer schema={riskSchema} />
    </Container>
  );
};

export default ReadOnlySchemaViewerPage;
