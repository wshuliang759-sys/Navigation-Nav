import { useEffect, useRef, useId } from "react";
import * as LucideIcons from "lucide-react";
import { Language, languagesList, TranslationDict } from "../lib/translations";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAddModal: () => void;
  onToggleSidebar: () => void;
  totalCount: number;
  favoritesCount: number;
  customCount: number;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  isAdmin: boolean;
  onLogoutAdmin: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  onOpenAddModal,
  onToggleSidebar,
  totalCount,
  favoritesCount,
  customCount,
  selectedTag,
  setSelectedTag,
  language,
  setLanguage,
  t,
  isAdmin,
  onLogoutAdmin,
}: HeaderProps) {
  // Common icons
  const Search = LucideIcons.Search;
  const Plus = LucideIcons.Plus;
  const Menu = LucideIcons.Menu;
  const X = LucideIcons.X;
  const Pocket = LucideIcons.Pocket;
  const Languages = LucideIcons.Languages;
  const Shield = LucideIcons.Shield;
  const ShieldCheck = LucideIcons.ShieldCheck;
  const LogOut = LucideIcons.LogOut;

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchInputId = useId();

  // Listen for Ctrl+K and / globally to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === "k") || e.key === "/") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-4 z-30 bg-white/90 backdrop-blur-md border border-slate-200/50 px-6 py-4 rounded-3xl shadow-sm transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left: Brand & Mobile Trigger */}
        <div className="flex justify-between items-center w-full lg:w-auto gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200/40 hover:border-slate-300 rounded-2xl cursor-pointer transition-all flex items-center justify-center shadow-sm"
              title={t.categoryAll}
            >
              <Menu className="w-4.5 h-4.5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-2.5 rounded-2xl shadow-md shadow-indigo-100 flex items-center justify-center">
                <Pocket className="w-5.5 h-5.5" />
              </div>
              <div>
                <h1 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                  {t.brandTitle} <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-lg">OSS</span>
                </h1>
                <p className="text-[10px] text-slate-400 font-medium">{t.brandSubtitle}</p>
              </div>
            </div>
          </div>

          {/* Mobile Right: Language and Admin Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Native Select picker */}
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2 py-1.5 rounded-xl text-slate-700">
              <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[11px] font-bold focus:outline-none cursor-pointer"
              >
                {languagesList.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-slate-800 bg-white">
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={onOpenAddModal}
              className={`p-2.5 rounded-xl transition-all shadow-sm cursor-pointer ${
                isAdmin ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
              title={t.submitTool}
            >
              {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Center: Search input */}
        <div className="relative w-full lg:max-w-md xl:max-w-xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>

          <input
            ref={searchInputRef}
            id={searchInputId}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              if (selectedTag) setSelectedTag(""); // Clear active tag filter if typing
              setSearchQuery(e.target.value);
            }}
            placeholder={t.searchPlaceholder}
            className="w-full text-xs pl-9 pr-20 py-2.5 bg-slate-50/80 focus:bg-white border border-slate-200 focus:border-indigo-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all shadow-inner-sm text-slate-800 placeholder:text-slate-400 font-medium"
          />

          <div className="absolute inset-y-1 right-2 flex items-center gap-1">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold text-slate-400 bg-white border border-slate-200 rounded-md select-none">
              /
            </kbd>
          </div>
        </div>

        {/* Right: Actions, Language Selection, Stats */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Real-time stats */}
          <div className="flex items-center gap-4 px-4 py-2 bg-slate-50/60 border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-500 select-none">
            <div className="flex flex-col items-center px-1">
              <span className="text-slate-900 font-extrabold font-mono text-xs leading-none">{totalCount}</span>
              <span className="text-[8px] text-slate-400 font-semibold mt-0.5">{t.totalTools}</span>
            </div>
            <div className="h-5 w-px bg-slate-250" />
            <div className="flex flex-col items-center px-1">
              <span className="text-amber-500 font-extrabold font-mono text-xs leading-none">{favoritesCount}</span>
              <span className="text-[8px] text-slate-400 font-semibold mt-0.5">{t.myFavorites}</span>
            </div>
            <div className="h-5 w-px bg-slate-250" />
            <div className="flex flex-col items-center px-1">
              <span className="text-indigo-600 font-extrabold font-mono text-xs leading-none">{customCount}</span>
              <span className="text-[8px] text-slate-400 font-semibold mt-0.5">{t.customAdded}</span>
            </div>
          </div>

          {/* Languages selection dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-3 py-2 rounded-2xl shadow-sm hover:border-slate-300 transition-all">
            <Languages className="w-4 h-4 text-indigo-500 shrink-0" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer pr-1"
            >
              {languagesList.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-slate-800 bg-white font-semibold">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit tool button */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenAddModal}
              className={`px-4 py-2.5 text-xs font-bold rounded-2xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:shadow-lg active:scale-95 ${
                isAdmin
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100 hover:shadow-emerald-200"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100 hover:shadow-indigo-200"
              }`}
            >
              {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <Shield className="w-4 h-4 text-indigo-200" />}
              {t.submitTool}
            </button>

            {isAdmin && (
              <button
                onClick={onLogoutAdmin}
                className="p-2.5 text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 rounded-2xl transition-all cursor-pointer"
                title="退出管理员会话 / Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
