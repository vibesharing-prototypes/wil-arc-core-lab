import type { ObjectSchema } from "../../utils/types.js";

export const riskSchema: ObjectSchema = {
  objectType: "risk",
  objectName: "Risk",
  objectDescription:
    "A standardized risk object with out-of-the-box attributes.",
  attributes: [
    {
      id: "riskId",
      name: "Risk ID",
      type: "text",
      required: true,
      semanticDescription: "Unique identifier for the risk record.",
    },
    {
      id: "riskCategory",
      name: "Risk category",
      type: "singleSelect",
      options: [
        { id: "strategic", label: "Strategic" },
        { id: "operational", label: "Operational" },
        { id: "financial", label: "Financial" },
        { id: "compliance", label: "Compliance" },
        { id: "other", label: "Other", deprecated: true },
      ],
      semanticDescription:
        "Primary classification used for reporting and ownership.",
    },
    {
      id: "riskDesc",
      name: "Risk description",
      type: "longText",
      semanticDescription:
        "Plain-language summary of the risk and potential impact.",
    },
    {
      id: "riskOwner",
      name: "Risk owner",
      type: "user",
      required: true,
      semanticDescription:
        "Accountable individual responsible for the risk.",
    },
    {
      id: "orgUnit",
      name: "Related org unit",
      type: "singleSelect",
      options: [
        { id: "corp", label: "Corporate" },
        { id: "it", label: "IT" },
        { id: "ops", label: "Operations" },
      ],
      semanticDescription: "Owning department or functional area.",
    },
    {
      id: "inherentScore",
      name: "Inherent risk score",
      type: "number",
      semanticDescription:
        "Pre-control risk level used for baseline evaluations.",
    },
    {
      id: "mitigation",
      name: "Mitigation present?",
      type: "boolean",
      semanticDescription: "Whether a mitigation plan exists.",
    },
    {
      id: "effectiveDate",
      name: "Effective date",
      type: "date",
      semanticDescription: "Date when the risk record became effective.",
    },
    {
      id: "refLink",
      name: "Reference link",
      type: "link",
      semanticDescription: "URL to supporting documentation.",
    },
    {
      id: "evidence",
      name: "Attachment",
      type: "attachment",
      attachmentMode: "multiple",
      semanticDescription:
        "Files that support the record (PDFs, spreadsheets, etc.).",
    },
    {
      id: "budget",
      name: "Currency budget",
      type: "currency",
      currencyMode: "perAttribute",
      semanticDescription:
        "Allocated budget for risk mitigation activities.",
    },
    {
      id: "tags",
      name: "Tags",
      type: "multiSelect",
      options: [
        { id: "critical", label: "Critical" },
        { id: "high", label: "High" },
        { id: "medium", label: "Medium" },
        { id: "low", label: "Low" },
      ],
      semanticDescription: "Labels used for filtering and reporting.",
    },
  ],
};
