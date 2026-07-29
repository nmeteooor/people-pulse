import Link from "next/link";
import { BarChart3, ClipboardList, FileText, Settings, Users } from "lucide-react";
import { AimprosoftLogo } from "./logo";

const items = [
  { href: "/", label: "Dashboard", icon: BarChart3 },
  { href: "/surveys", label: "Surveys", icon: ClipboardList },
  { href: "#", label: "Templates", icon: FileText },
  { href: "#", label: "Employees", icon: Users },
  { href: "#", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <AimprosoftLogo />
      <nav className="nav">
        {items.map(({ href, label, icon: Icon }) => (
          <Link href={href} key={label} className="nav-item">
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">MVP · v0.1</div>
    </aside>
  );
}
