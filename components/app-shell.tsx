import { Bell, Search } from "lucide-react";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-column">
        <header className="topbar">
          <div className="search"><Search size={17} /><span>Search</span></div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Notifications"><Bell size={18} /></button>
            <div className="avatar">VP</div>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
