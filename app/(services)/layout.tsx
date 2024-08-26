import "@/styles/globals.css"
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ServicesLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <div className="relative flex min-h-screen flex-col">
            {/* <SiteHeader /> */}
            <AdminPanelLayout>
              <div className="flex-1">{children}</div>
            </AdminPanelLayout>
          </div>
        </body>
      </html>
    </>
  )
}
