import { LayoutProps } from "../types/common";

/**
 * Visual layout wrapper. Metadata is handled via Next.js metadata API per route.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100">
      <main>{children}</main>
    </div>
  );
}
