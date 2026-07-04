import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as LucideIcons from "lucide-react";

import { presetTools, categories } from "./data/presetTools";
import { Tool, UserCustomTool } from "./types";
import { Language, translations } from "./lib/translations";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ToolCard from "./components/ToolCard";
import ToolTable from "./components/ToolTable";
import AddToolModal from "./components/AddToolModal";
import BuiltInTools from "./components/BuiltInTools";

export default function App() {
  // State: selected active language (defaulting to English "en")
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("user_lang");
      return (stored as Language) || "en";
    } catch {
      return "en";
    }
  });

  // State: Admin authorization (for restricting "add tools" functionality)
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("admin_session");
      return stored === "active";
    } catch {
      return false;
    }
  });

  // State 1: Custom User Tools (persisted in localStorage)
  const [customTools, setCustomTools] = useState<Tool[]>(() => {
    try {
      const stored = localStorage.getItem("user_custom_tools");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // State 2: Favorites (list of tool IDs, persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("user_favorite_tools");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // State 3: Click tracking statistics
  const [clicks, setClicks] = useState<Record<string, number>>(() => {
    try {
      const stored = localStorage.getItem("user_tool_clicks");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // UI state
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeBuiltInKey, setActiveBuiltInKey] = useState<string | null>(null);

  // View mode state ('table' or 'grid'), default to 'table' (high density data mode)
  const [viewMode, setViewMode] = useState<"grid" | "table">(() => {
    try {
      const stored = localStorage.getItem("user_view_mode");
      return (stored as "grid" | "table") || "table";
    } catch {
      return "table";
    }
  });

  // Sort metric: 'clicks' | 'name' | 'seoScore' | 'monthlyVisits'
  const [sortBy, setSortBy] = useState<"clicks" | "name" | "seoScore" | "monthlyVisits">("clicks");

  // Sync viewMode to localStorage
  useEffect(() => {
    localStorage.setItem("user_view_mode", viewMode);
  }, [viewMode]);

  // Sync language selection to localStorage
  useEffect(() => {
    localStorage.setItem("user_lang", language);
  }, [language]);

  // Sync custom tools to localStorage
  useEffect(() => {
    localStorage.setItem("user_custom_tools", JSON.stringify(customTools));
  }, [customTools]);

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem("user_favorite_tools", JSON.stringify(favorites));
  }, [favorites]);

  // Sync clicks to localStorage
  useEffect(() => {
    localStorage.setItem("user_tool_clicks", JSON.stringify(clicks));
  }, [clicks]);

  // Admin Logout action
  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem("admin_session");
    } catch (e) {}
  };

  // Get active translation dictionary
  const t = translations[language] || translations["en"];

  // Handle adding custom tool
  const handleAddTool = (newTool: UserCustomTool) => {
    const customToolItem: Tool = {
      id: `custom-${Date.now()}`,
      name: newTool.name,
      url: newTool.url,
      category: newTool.category,
      description: newTool.description || "用户自行添加的工具链接。",
      tags: newTool.tags
        ? newTool.tags
            .split(/[,，]/)
            .map((t) => t.trim())
            .filter(Boolean)
        : ["自定义"],
      icon: newTool.icon || "Globe",
      isCustom: true,
      clicks: 0,
    };

    setCustomTools((prev) => [customToolItem, ...prev]);
  };

  // Toggle Favorite
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Click statistics recorder
  const handleIncrementClicks = (id: string) => {
    setClicks((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Combine and map click counters to the tools database
  const allTools: Tool[] = [...presetTools, ...customTools].map((t) => ({
    ...t,
    clicks: clicks[t.id] || 0,
  }));

  // Helper: compute counts dynamically
  const getCategoryCount = (catId: string) => {
    if (catId === "all") {
      return allTools.length;
    }
    if (catId === "favorites") {
      return favorites.length;
    }
    return allTools.filter((t) => t.category === catId).length;
  };

  // Core Filtering Pipeline
  const filteredTools = allTools.filter((tool) => {
    // 1. Filter by Category
    if (activeCategory === "favorites") {
      if (!favorites.includes(tool.id)) return false;
    } else if (activeCategory !== "all") {
      if (tool.category !== activeCategory) return false;
    }

    // 2. Filter by Tag
    if (selectedTag && !tool.tags.includes(selectedTag)) {
      return false;
    }

    // 3. Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchTags = tool.tags.some((t) => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchTags;
    }

    return true;
  });

  // Helper to parse traffic visits
  const parseVisits = (visits?: string): number => {
    if (!visits) return 0;
    if (visits === "本地免流") return 10000000000;
    const val = parseFloat(visits);
    if (isNaN(val)) return 0;
    if (visits.endsWith("B")) return val * 1000000000;
    if (visits.endsWith("M")) return val * 1000000;
    if (visits.endsWith("K")) return val * 1000;
    return val;
  };

  // Sort tools dynamically based on selected sorting metric
  const sortedTools = [...filteredTools].sort((a, b) => {
    // Put built-ins first in their category
    if (a.isBuiltIn && !b.isBuiltIn) return -1;
    if (!a.isBuiltIn && b.isBuiltIn) return 1;

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "seoScore") {
      return (b.seoTraffic?.seoScore || 0) - (a.seoTraffic?.seoScore || 0);
    }
    if (sortBy === "monthlyVisits") {
      return parseVisits(b.seoTraffic?.monthlyVisits) - parseVisits(a.seoTraffic?.monthlyVisits);
    }
    // Default or clicks sorting
    return (b.clicks || 0) - (a.clicks || 0);
  });

  // Localized helper to get Category Title with custom emoji
  const getCategoryBannerTitle = () => {
    switch (activeCategory) {
      case "all": return `✨ ${t.categoryAll}`;
      case "favorites": return `⭐ ${t.categoryFav}`;
      case "utility": return `🧳 ${t.categoryUtility}`;
      case "ai": return `🤖 ${t.categoryAi}`;
      case "dev": return `💻 ${t.categoryDev}`;
      case "design": return `🎨 ${t.categoryDesign}`;
      case "productivity": return `📝 ${t.categoryProductivity}`;
      case "other": return `🔍 ${t.categoryOther}`;
      default: return `✨ ${t.categoryAll}`;
    }
  };

  const isChinese = language === "zh_cn" || language === "zh_tw";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Bento Layout Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Dynamic Header */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          totalCount={allTools.length}
          favoritesCount={favorites.length}
          customCount={customTools.length}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          language={language}
          setLanguage={setLanguage}
          isAdmin={isAdmin}
          onLogoutAdmin={handleLogoutAdmin}
          t={t}
        />

        {/* Main Workspace Layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 relative items-start">
          {/* Sticky/Collapsible Left Sidebar */}
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={(catId) => {
              setActiveCategory(catId);
              setSelectedTag(""); // Clear active tag when category changes
              setActiveBuiltInKey(null); // Return to default list when category changes
            }}
            getCategoryCount={getCategoryCount}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            t={t}
          />

          {/* Right main grid viewport */}
          <main className="flex-1 w-full overflow-x-hidden space-y-6">
            <AnimatePresence mode="wait">
              {/* 1. Show Takeover Workspace if a built-in micro-tool is active */}
              {activeBuiltInKey ? (
                <motion.div
                  key="builtin-workspace"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  <BuiltInTools
                    toolKey={activeBuiltInKey}
                    onClose={() => setActiveBuiltInKey(null)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="navigation-workspace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Active Filter Indicators */}
                  {(selectedTag || searchQuery) && (
                    <div className="flex flex-wrap items-center gap-3 p-4 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl animate-fade-in">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-900">
                        <LucideIcons.Filter className="w-4 h-4 text-indigo-600" />
                        <span>{isChinese ? "正在应用过滤检索:" : "Applying active filters:"}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {selectedTag && (
                          <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm shadow-indigo-100">
                            {t.modalAddTags || "Tags"}: #{selectedTag}
                            <button
                              onClick={() => setSelectedTag("")}
                              className="hover:bg-indigo-700 p-0.5 rounded-full cursor-pointer transition-colors"
                              title={isChinese ? "清除标签" : "Clear tag"}
                            >
                              <LucideIcons.X className="w-3 h-3" />
                            </button>
                          </span>
                        )}

                        {searchQuery && (
                          <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm shadow-indigo-100">
                            {isChinese ? "搜索:" : "Search:"} "{searchQuery}"
                            <button
                              onClick={() => setSearchQuery("")}
                              className="hover:bg-indigo-700 p-0.5 rounded-full cursor-pointer transition-colors"
                              title={isChinese ? "清除搜索" : "Clear search"}
                            >
                              <LucideIcons.X className="w-3 h-3" />
                            </button>
                          </span>
                        )}

                        {(selectedTag || searchQuery) && (
                          <button
                            onClick={() => {
                              setSelectedTag("");
                              setSearchQuery("");
                            }}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline ml-2 cursor-pointer transition-colors"
                          >
                            {isChinese ? "重置所有" : "Reset All"}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Dashboard Category Description Banner */}
                  <div className="p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-3xl text-white shadow-md shadow-indigo-100/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-base font-bold flex items-center gap-2">
                        {getCategoryBannerTitle()}
                      </h2>
                      <p className="text-xs text-indigo-200/80">
                        {activeCategory === "all" ? t.brandSubtitle : (activeCategory === "favorites" ? t.myFavorites : categories.find((c) => c.id === activeCategory)?.description)}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl text-[10px] font-bold font-mono tracking-wider text-indigo-200">
                      {isChinese ? "当前列表:" : "Active list:"} {sortedTools.length} {t.altText || "items"}
                    </span>
                  </div>

                  {/* Layout & Sorting Control Bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-white border border-slate-200/50 p-4 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] select-none">
                    {/* View Switcher */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">{t.viewLayout}:</span>
                      <div className="inline-flex bg-slate-100 p-1 rounded-2xl">
                        <button
                          onClick={() => setViewMode("table")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            viewMode === "table"
                              ? "bg-white text-indigo-600 shadow-sm"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <LucideIcons.List className="w-3.5 h-3.5" />
                          <span>{t.dataTable}</span>
                        </button>
                        <button
                          onClick={() => setViewMode("grid")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            viewMode === "grid"
                              ? "bg-white text-indigo-600 shadow-sm"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <LucideIcons.LayoutGrid className="w-3.5 h-3.5" />
                          <span>{t.cardView}</span>
                        </button>
                      </div>
                    </div>

                    {/* Sort Selector */}
                    <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                      <span className="text-xs font-bold text-slate-400">{t.sortIndicator}:</span>
                      <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-0.5">
                        <button
                          onClick={() => setSortBy("clicks")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                            sortBy === "clicks"
                              ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                              : "bg-white border-slate-250 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          🔥 {t.sortClicks}
                        </button>
                        <button
                          onClick={() => setSortBy("seoScore")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                            sortBy === "seoScore"
                              ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                              : "bg-white border-slate-250 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          🎯 {t.sortSeo}
                        </button>
                        <button
                          onClick={() => setSortBy("monthlyVisits")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                            sortBy === "monthlyVisits"
                              ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                              : "bg-white border-slate-250 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          📈 {t.sortTraffic}
                        </button>
                        <button
                          onClick={() => setSortBy("name")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                            sortBy === "name"
                              ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                              : "bg-white border-slate-250 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          🔤 {t.sortAlpha}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Grid View */}
                  {sortedTools.length > 0 ? (
                    viewMode === "table" ? (
                      <ToolTable
                        tools={sortedTools}
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                        onTagClick={(tag) => setSelectedTag(tag)}
                        onSelectBuiltIn={(key) => setActiveBuiltInKey(key)}
                        incrementClicks={handleIncrementClicks}
                        t={t}
                      />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {sortedTools.map((tool) => (
                          <div key={tool.id} className="h-full">
                            <ToolCard
                              tool={tool}
                              isFavorited={favorites.includes(tool.id)}
                              onToggleFavorite={handleToggleFavorite}
                              onTagClick={(tag) => setSelectedTag(tag)}
                              onSelectBuiltIn={(key) => setActiveBuiltInKey(key)}
                              incrementClicks={handleIncrementClicks}
                              t={t}
                            />
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="text-center py-20 bg-white border border-slate-200/60 rounded-3xl p-6 flex flex-col items-center justify-center max-w-lg mx-auto shadow-sm">
                      <div className="p-4 bg-slate-50 text-slate-400 rounded-full mb-4">
                        <LucideIcons.SearchSlash className="w-10 h-10 text-slate-300" />
                      </div>
                      <h3 className="font-extrabold text-slate-800 text-lg">
                        {isChinese ? "没有找到匹配的工具" : "No matching tools found"}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed font-medium">
                        {activeCategory === "favorites"
                          ? (isChinese ? "您还没有收藏过任何工具！点击任意工具卡片右上角的星标即可收藏在此。" : "You haven't bookmarked any applications yet! Select the star on any card to add it here.")
                          : (isChinese ? "请尝试更改搜索词，或切换不同的分类查看。您也可以点击右上角添加自己的常用网站。" : "Please try another search keyword, filter by another category, or add your customized tool.")}
                      </p>
                      {activeCategory === "favorites" ? (
                        <button
                          onClick={() => setActiveCategory("all")}
                          className="mt-6 px-4 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors cursor-pointer shadow-sm"
                        >
                          {isChinese ? "浏览全部工具" : "Browse All"}
                        </button>
                      ) : (
                        <div className="flex gap-3 mt-6">
                          <button
                            onClick={() => {
                              setSearchQuery("");
                              setSelectedTag("");
                            }}
                            className="px-4 py-2.5 text-xs font-bold border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl transition-colors cursor-pointer"
                          >
                            {isChinese ? "清除当前过滤" : "Clear Active Filters"}
                          </button>
                          <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="px-4 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors cursor-pointer shadow-sm"
                          >
                            {t.submitTool}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Slide-over submission modal */}
      <AddToolModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        categories={categories}
        onAddTool={handleAddTool}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        t={t}
      />
    </div>
  );
}
