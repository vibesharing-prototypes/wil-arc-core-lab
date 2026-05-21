# M0 Checklist

- [ ] 12 attribute types render in read-only with consistent label, required indicator, description, and value
- [ ] Inline semantic description placement (tooltip optional)
- [ ] Read-only schema viewer lists attributes in a flat list
- [ ] No edit/reorder/filters/permissions/sections
- [ ] Sample Risk schema available
- [ ] Decisions recorded in attributeTypeDecisions.md

## Atlas MCP

Use the **Atlas MCP** (not Figma MCP) to look up design system information when implementing or refining M0:

- **Typography scale** – label, body, caption, meta text
- **Spacing** – gaps between label, description, value
- **Required indicator** – color and placement
- **Helper/assistive text** – muted color, font size
- **Tooltip** – for long descriptions (optional)
- **Error state** – `role="alert"`, color for error message

See `semantic-descriptions-guidelines.md` and `attributeTypeDecisions.md` for M0-specific decisions.
