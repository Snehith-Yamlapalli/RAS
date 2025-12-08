import Sidebar from "./Sidebar"
import AuthGuard from './../Authguard';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AuthGuard>
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <Sidebar />
          <div className="flex-grow-1">
            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
        </AuthGuard>
      </body>
    </html>
  );
}
