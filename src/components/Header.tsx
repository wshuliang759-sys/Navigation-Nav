import { useEffect, useRef, useId } from "react";
import * as LucideIcons from "lucide-react";

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
}: HeaderProps) {
  // Common icons
  const Search = LucideIcons.Search;
  const Plus = LucideIcons.Plus;
  const Menu = LucideIcons.Menu;
  const X = LucideIcons.X;
  const Pocket = LucideIcons.Pocket;

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
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Left: Brand & Mobile Trigger */}
        <div className="flex justify-between items-center w-full md:w-auto gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
              title="打开分类"
            >
              <Menu className="w-5.5 h-5.5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-2.5 rounded-2xl shadow-md shadow-indigo-100 flex items-center justify-center">
                <Pocket className="w-5.5 h-5.5" />
              </div>
              <div>
                <h1 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                  工具导航 <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-lg">V1.2</span>
                </h1>
                <p className="text-[10px] text-slate-400 font-medium">极简、纯净、开箱即用的开发导航库</p>
              </div>
            </div>
          </div>

          {/* Mobile Right: New Tool Button */}
          <button
            onClick={onOpenAddModal}
            className="md:hidden p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-sm cursor-pointer"
            title="添加新工具"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Search input */}
        <div className="relative w-full md:max-w-md">
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
            placeholder="输入名称、描述、拼音或标签进行检索..."
            className="w-full text-sm pl-9 pr-20 py-2.5 bg-slate-50/80 focus:bg-white border border-slate-200 focus:border-indigo-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all shadow-inner-sm text-slate-800 placeholder:text-slate-400"
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

        {/* Right: Actions and Stats */}
        <div className="hidden md:flex items-center gap-5">
          {/* Real-time stats */}
          <div className="flex items-center gap-4 px-4 py-2 bg-slate-50/60 border border-slate-100 rounded-2xl text-xs font-semibold text-slate-500 select-none">
            <div className="flex flex-col items-center px-1">
              <span className="text-slate-900 font-extrabold font-mono text-sm leading-none">{totalCount}</span>
              <span className="text-[9px] text-slate-400 font-medium mt-0.5">工具数</span>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex flex-col items-center px-1">
              <span className="text-amber-500 font-extrabold font-mono text-sm leading-none">{favoritesCount}</span>
              <span className="text-[9px] text-slate-400 font-medium mt-0.5">我的收藏</span>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex flex-col items-center px-1">
              <span className="text-indigo-600 font-extrabold font-mono text-sm leading-none">{customCount}</span>
              <span className="text-[9px] text-slate-400 font-medium mt-0.5">已收录</span>
            </div>
          </div>

          <button
            onClick={onOpenAddModal}
            className="px-4 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl transition-all shadow-md shadow-indigo-100 flex items-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-indigo-200"
          >
            <Plus className="w-4 h-4" />
            收录新网站
          </button>
        </div>
      </div>
    </header>
  );
}
