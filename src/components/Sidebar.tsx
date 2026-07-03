import * as LucideIcons from "lucide-react";
import { Category } from "../types";

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  getCategoryCount: (id: string) => number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  setActiveCategory,
  getCategoryCount,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  // Common icons
  const X = LucideIcons.X;
  const Compass = LucideIcons.Compass;

  return (
    <>
      {/* Mobile Sidebar Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white/95 backdrop-blur-md border-r border-slate-100 p-5 flex flex-col justify-between transform transition-transform duration-300 lg:translate-x-0 lg:static lg:h-[calc(100vh-9.5rem)] lg:sticky lg:top-28 lg:border lg:border-slate-200/50 lg:rounded-3xl lg:shadow-sm lg:p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Mobile Header Title */}
          <div className="flex items-center justify-between lg:hidden border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-slate-800">全部分类</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-3.5 pl-3">
              工具分类目录
            </span>
            <nav className="space-y-1.5">
              {categories.map((cat) => {
                // Dynamic Lucide Icon mapping
                const IconComponent = (LucideIcons as any)[cat.icon] || LucideIcons.Globe;
                const isActive = activeCategory === cat.id;
                const count = getCategoryCount(cat.id);

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsOpen(false); // Close mobile menu if clicked
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer group duration-200 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`w-4.5 h-4.5 transition-transform group-hover:scale-110 ${
                          isActive
                            ? "text-white"
                            : cat.id === "favorites"
                            ? "text-amber-500"
                            : cat.id === "utility"
                            ? "text-emerald-500"
                            : cat.id === "ai"
                            ? "text-violet-500"
                            : cat.id === "dev"
                            ? "text-blue-500"
                            : cat.id === "design"
                            ? "text-pink-500"
                            : cat.id === "productivity"
                            ? "text-orange-500"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      />
                      <span>{cat.name}</span>
                    </div>

                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-lg font-mono font-bold transition-colors ${
                        isActive
                          ? "bg-indigo-700 text-indigo-100"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Brand footer inside sidebar */}
        <div className="pt-4 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            © 2026 工具导航. Powered by React 19
          </p>
          <p className="text-[9px] text-slate-300 mt-0.5 font-mono">
            All data stored in your browser.
          </p>
        </div>
      </aside>
    </>
  );
}
