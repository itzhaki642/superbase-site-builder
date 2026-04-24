import { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Snowflake, LayoutDashboard, Package, Tags, MessageSquare, Users, LogOut, Home } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/admin", label: "דשבורד", icon: LayoutDashboard, end: true },
  { to: "/admin/products", label: "מוצרים", icon: Package },
  { to: "/admin/categories", label: "קטגוריות", icon: Tags },
  { to: "/admin/messages", label: "פניות", icon: MessageSquare },
  { to: "/admin/admins", label: "מנהלים", icon: Users },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted-foreground">טוען...</div>
      </div>
    );
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <Users className="h-8 w-8" />
          </div>
          <h1 className="mt-4 text-2xl font-bold">אין לך הרשאת מנהל</h1>
          <p className="mt-2 text-muted-foreground">
            כדי לגשת לפאנל הניהול, יש לקבל הרשאת admin ממנהל קיים.
            אם זוהי ההתקנה הראשונית, צרו את המנהל הראשון דרך כפתור ה-User בפאנל של Lovable Cloud.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={() => signOut().then(() => navigate("/"))} variant="outline">
              <LogOut className="ml-1 h-4 w-4" /> התנתק
            </Button>
            <Button asChild>
              <Link to="/"><Home className="ml-1 h-4 w-4" /> חזרה לאתר</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground md:flex">
        <Link to="/" className="flex items-center gap-3 border-b border-sidebar-border p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-accent">
            <Snowflake className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-base font-extrabold text-white">נאור אדיר</div>
            <div className="text-[10px] uppercase tracking-widest opacity-70">Admin</div>
          </div>
        </Link>

        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-white"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-white",
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <div className="px-3 py-2 text-xs text-sidebar-foreground/60 truncate">{user.email}</div>
          <button
            onClick={() => signOut().then(() => navigate("/"))}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/50 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            התנתקות
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-border bg-sidebar p-3 md:hidden">
          <Link to="/admin" className="flex items-center gap-2 text-white">
            <Snowflake className="h-5 w-5" />
            <span className="font-bold">ניהול</span>
          </Link>
          <button onClick={() => signOut().then(() => navigate("/"))} className="text-white">
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile nav tabs */}
        <div className="flex overflow-x-auto border-b border-border bg-sidebar md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex shrink-0 items-center gap-2 px-4 py-3 text-xs font-medium transition-colors",
                  isActive ? "border-b-2 border-primary text-white" : "text-sidebar-foreground/70",
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
