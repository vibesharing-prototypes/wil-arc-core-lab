import { RoutedNavLink } from "@diligentcorp/atlas-react-bundle/global-nav";
import DocumentIcon from "@diligentcorp/atlas-react-bundle/icons/Document";

export default function Navigation() {
  return (
    <RoutedNavLink to="/" label="Schema viewer">
      <DocumentIcon slot="icon" />
    </RoutedNavLink>
  );
}
