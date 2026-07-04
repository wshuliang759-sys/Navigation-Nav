import * as LucideIcons from "lucide-react";
import { Category } from "../types";
import { TranslationDict } from "../lib/translations";
import CustomAdSlot from "./CustomAdSlot";

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  getCategoryCount: (id: string) => number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  t: TranslationDict;
}

export default function Sidebar({
  categories,
  activeCategory,
  setActiveCategory,
  getCategoryCount,
  isOpen,
  setIsOpen,
  t,
}: SidebarProps) {
  // Common icons
  const X = LucideIcons.X;
  const Compass = LucideIcons.Compass;

  const getCategoryName = (id: string, defaultName: string) => {
    switch (id) {
      case "all":
        return t.categoryAll;
      case "favorites":
        return t.categoryFav;
      case "utility":
        return t.categoryUtility;
      case "ai":
        return t.categoryAi;
      case "dev":
        return t.categoryDev;
      case "design":
        return t.categoryDesign;
      case "productivity":
        return t.categoryProductivity;
      case "other":
        return t.categoryOther;
      default:
        return defaultName;
    }
  };

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
        className={`fixed top-0 bottom-0 left-0 z-40 bg-white/95 backdrop-blur-md border-r border-slate-100 flex flex-col justify-between transform transition-all duration-300 lg:sticky lg:top-28 ${
          isOpen
            ? "translate-x-0 w-64 opacity-100 visible p-5 lg:translate-x-0 lg:opacity-100 lg:visible lg:w-64 lg:h-[calc(100vh-9.5rem)] lg:border lg:border-slate-200/50 lg:rounded-3xl lg:shadow-sm lg:p-6"
            : "-translate-x-full w-0 opacity-0 invisible p-0 lg:-translate-x-4 lg:opacity-0 lg:invisible lg:w-0 lg:p-0 lg:border-none lg:shadow-none"
        }`}
      >
        <div className="space-y-6 overflow-y-auto max-h-[75vh] pr-1 scrollbar-thin">
          {/* Mobile Header Title */}
          <div className="flex items-center justify-between lg:hidden border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-slate-800">{t.categoryAll}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-3 pl-3">
              {languageHeaderLabel(t)}
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
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left text-xs font-bold transition-all cursor-pointer group duration-150 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <IconComponent
                        className={`w-4 h-4 transition-transform group-hover:scale-110 shrink-0 ${
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
                      <span className="truncate">{getCategoryName(cat.id, cat.name)}</span>
                    </div>

                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-lg font-mono font-bold transition-colors shrink-0 ${
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

        {/* Bottom portion: Sponsor + Brand Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
          {/* Custom Ad Slot Space */}
          <CustomAdSlot />

          <div className="text-center">
            <p className="text-[10px] text-slate-400 font-medium">
              © 2026 {t.brandTitle}. Powered by React 19
            </p>
            <p className="text-[9px] text-slate-300 mt-0.5 font-mono">
              All data stored locally in your browser.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

// Low level category divider header localization helper
function languageHeaderLabel(t: TranslationDict): string {
  // Translate "工具分类目录" / "CATEGORIES" based on some key or simple check
  return t.colCategory.toUpperCase();
}
