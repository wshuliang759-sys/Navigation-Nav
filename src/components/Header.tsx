import { useState, useEffect, useRef, useId } from "react";
import * as LucideIcons from "lucide-react";
import { Language, languagesList, TranslationDict } from "../lib/translations";
import logoImg from "../assets/images/logo_tf_1783140903194.jpg";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onToggleSidebar: () => void;
  totalCount: number;
  favoritesCount: number;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  onToggleSidebar,
  totalCount,
  favoritesCount,
  selectedTag,
  setSelectedTag,
  language,
  setLanguage,
  t,
  theme = "light",
  onToggleTheme,
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
    <header className="sticky top-4 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 px-6 py-4 rounded-3xl shadow-sm transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left: Brand & Mobile Trigger */}
        <div className="flex justify-between items-center w-full lg:w-auto gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-700/80 hover:border-slate-300 rounded-2xl cursor-pointer transition-all flex items-center justify-center shadow-sm"
              title={t.categoryAll}
            >
              <Menu className="w-4.5 h-4.5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl overflow-hidden flex items-center justify-center shadow-md shadow-indigo-100/30 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-1.5">
                  {t.brandTitle} <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 px-1.5 py-0.5 rounded-lg">OSS</span>
                </h1>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{t.brandSubtitle}</p>
              </div>
            </div>
          </div>

          {/* Mobile Right: Language & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-2xl shadow-sm active:scale-95 transition-all cursor-pointer text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:border-slate-700 dark:text-slate-200"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? (
                  <LucideIcons.Sun className="w-4.5 h-4.5 text-amber-500 animate-[spin_12s_linear_infinite]" />
                ) : (
                  <LucideIcons.Moon className="w-4.5 h-4.5 text-indigo-500" />
                )}
              </button>
            )}
            <LanguagePicker language={language} setLanguage={setLanguage} align="right" />
          </div>
        </div>

        {/* Center: Search input */}
        <div className="relative w-full lg:max-w-md xl:max-w-xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
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
            className="w-full text-xs pl-9 pr-20 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 dark:focus:border-indigo-400 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950 transition-all shadow-inner-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
          />

          <div className="absolute inset-y-1 right-2 flex items-center gap-1">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 rounded-lg cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md select-none">
              /
            </kbd>
          </div>
        </div>

        {/* Right: Actions, Language Selection, Stats */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Real-time stats */}
          <div className="flex items-center gap-4 px-4 py-2 bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl text-[11px] font-bold text-slate-500 dark:text-slate-400 select-none">
            <div className="flex flex-col items-center px-1">
              <span className="text-slate-900 dark:text-slate-200 font-extrabold font-mono text-xs leading-none">{totalCount}</span>
              <span className="text-[8px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{t.totalTools}</span>
            </div>
            <div className="h-5 w-px bg-slate-250 dark:bg-slate-700" />
            <div className="flex flex-col items-center px-1">
              <span className="text-amber-500 font-extrabold font-mono text-xs leading-none">{favoritesCount}</span>
              <span className="text-[8px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{t.myFavorites}</span>
            </div>
          </div>

          {/* Theme Switcher Toggle */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="h-10 w-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:border-slate-700 dark:text-slate-200"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <LucideIcons.Sun className="w-4 h-4 text-amber-500 animate-[spin_12s_linear_infinite]" />
              ) : (
                <LucideIcons.Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>
          )}

          {/* Languages selection dropdown */}
          <LanguagePicker language={language} setLanguage={setLanguage} align="right" />
        </div>
      </div>
    </header>
  );
}

// Compact and elegant language picker component that avoids long strip styling
function LanguagePicker({
  language,
  setLanguage,
  align = "right"
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
  align?: "left" | "right";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 px-3 flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer text-slate-700 dark:text-slate-200 min-w-[40px] md:min-w-[100px]"
        title={activeLang.name}
      >
        <LucideIcons.Languages className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
        <span className="hidden md:inline text-xs font-bold text-slate-600 dark:text-slate-300 truncate">{activeLang.name}</span>
        <LucideIcons.ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-48 max-h-64 overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xl z-50 py-1.5 scrollbar-thin dark:scrollbar-thumb-slate-800 scrollbar-thumb-slate-200 scrollbar-track-transparent`}
        >
          {languagesList.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-left transition-colors cursor-pointer ${
                language === lang.code
                  ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }`}
            >
              <span className="truncate text-slate-700 dark:text-slate-300">{lang.name}</span>
              {language === lang.code && (
                <LucideIcons.Check className="w-3.5 h-3.5 ml-auto text-indigo-500 dark:text-indigo-400 shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
