# Schema management — Vision archive

Snapshot of the `custom-attributes-v2` schema-management implementation
(SchemaManagementView + hook + types + Vision-specific components) preserved
on 2026-05-01 before the MVP variant was promoted into the Vision prototype.

This archive is referenced by
`custom-attributes-lab/src/pages/SchemaManagementVisionArchivePage.tsx` and
mounted at `/explorations/schema-management-vision`.

## Provenance

Files copied verbatim from `custom-attributes-v2/src/features/schemaManagement/`:

- `SchemaManagementView.tsx`
- `hooks/useSchemaManagement.ts`
- `types.ts`
- `components/AttributeFormSheet.tsx`
- `components/AttributeListRow.tsx`
- `components/DeprecationDialog.tsx`

## Shared dependencies

To minimise duplication, this archive imports unchanged shared components
from the lab's main `features/schemaManagement/`:

- `AttributeFormFields`
- `AttributeTypeSelector`
- `AuditLogDrawer`
- `DeprecatedChip`

Pages and utils used by the view (`pages/FormPreviewReorderSheet`,
`pages/formPreviewShared`, `utils/i18n`, `utils/atlasToastLayout`,
`utils/uiDividerBorder`, `types/attribute`) are imported from the lab's
top-level folders, which match v2's API at the time of archival.

If lab's main schema management is ever changed in a way that breaks one of
the shared imports above, copy the affected file into this folder to keep
the archive self-contained.
