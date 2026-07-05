import { useState, useId, MouseEvent, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { Tool } from "../types";
import { TranslationDict, Language } from "../lib/translations";

interface ToolTableProps {
  tools: Tool[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onTagClick: (tag: string) => void;
  onSelectBuiltIn: (key: string) => void;
  incrementClicks: (id: string) => void;
  t: TranslationDict;
  language?: Language;
}

export default function ToolTable({
  tools,
  favorites,
  onToggleFavorite,
  onTagClick,
  onSelectBuiltIn,
  incrementClicks,
  t,
  language = "en",
}: ToolTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const tableId = useId();
  const rowLinks = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isZh = language === "zh_cn" || language === "zh_tw";

  // Helper to parse visits to number for analytics calculation
  const parseVisitsToNumber = (visits?: string): number => {
    if (!visits) return 0;
    if (visits === "本地免流" || visits === "免流" || visits === "Local") return 0;
    const val = parseFloat(visits);
    if (isNaN(val)) return 0;
    if (visits.endsWith("B")) return val * 1000000000;
    if (visits.endsWith("M")) return val * 1000000;
    if (visits.endsWith("K")) return val * 1000;
    return val;
  };

  const formatVisitsNumber = (num: number, isZhLang: boolean): string => {
    if (num <= 0) return "Local";
    if (isZhLang) {
      if (num >= 100000000) { // 1亿
        const yi = num / 100000000;
        return `${yi % 1 === 0 ? yi.toFixed(0) : yi.toFixed(1)}亿`;
      }
      if (num >= 10000) { // 1万
        const wan = num / 10000;
        return `${wan % 1 === 0 ? wan.toFixed(0) : wan.toFixed(1)}万`;
      }
      return `${num}`;
    } else {
      if (num >= 1000000000) {
        const b = num / 1000000000;
        return `${b % 1 === 0 ? b.toFixed(0) : b.toFixed(1)}B`;
      }
      if (num >= 1000000) {
        const m = num / 1000000;
        return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
      }
      if (num >= 1000) {
        return `${Math.round(num / 1000)}K`;
      }
      return `${num}`;
    }
  };

  const formatVisitsStr = (visits?: string): string => {
    if (!visits) return "Local";
    if (visits === "本地免流" || visits === "免流" || visits === "Local") return "Local";
    const num = parseVisitsToNumber(visits);
    return formatVisitsNumber(num, isZh);
  };

  const handleCopyLink = (e: MouseEvent, id: string, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRowClick = (tool: Tool) => {
    incrementClicks(tool.id);
    if (tool.isBuiltIn && tool.builtInKey) {
      onSelectBuiltIn(tool.builtInKey);
    } else {
      const linkEl = rowLinks.current[`mobile-${tool.id}`] || rowLinks.current[tool.id];
      if (linkEl) {
        linkEl.click();
      } else {
        window.open(tool.url, "_blank", "noopener,noreferrer");
      }
    }
  };

  // Calculate SEO Traffic Analytics for the currently filtered tools
  const validSeoTools = tools.filter(t => t.seoTraffic && t.seoTraffic.seoScore);
  const avgSeoScore = validSeoTools.length > 0 
    ? Math.round(validSeoTools.reduce((acc, t) => acc + (t.seoTraffic?.seoScore || 0), 0) / validSeoTools.length)
    : 0;

  // Total Traffic
  const totalVisitsNum = tools.reduce((acc, t) => acc + parseVisitsToNumber(t.seoTraffic?.monthlyVisits), 0);
  const totalVisitsFormatted = formatVisitsNumber(totalVisitsNum, isZh);

  // Find tool with maximum visits
  const maxTrafficTool = [...tools].sort((a, b) => {
    return parseVisitsToNumber(b.seoTraffic?.monthlyVisits) - parseVisitsToNumber(a.seoTraffic?.monthlyVisits);
  })[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 🚀 SEO & Traffic Intelligence Widget Dashboard */}
      {tools.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-gradient-to-br from-indigo-900/10 via-slate-50 to-indigo-900/5 dark:from-indigo-950/20 dark:via-slate-900/30 dark:to-indigo-950/10 border border-indigo-150/40 dark:border-slate-800/80 rounded-3xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400 text-indigo-700 rounded-2xl">
              <LucideIcons.TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {t.estMonthlyTraffic}
              </p>
              <h4 className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-tight mt-0.5">
                {totalVisitsFormatted === "Local" ? "100% Offline Local" : `~${totalVisitsFormatted}`}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 text-emerald-700 rounded-2xl">
              <LucideIcons.ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {t.avgSeoScore}
              </p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-tight">
                  {avgSeoScore || "100"}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">/ 100 XP</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-700 rounded-2xl">
              <LucideIcons.Crown className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {t.categoryLeader}
              </p>
              <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                {maxTrafficTool ? maxTrafficTool.name : "N/A"}
              </p>
              {maxTrafficTool && maxTrafficTool.seoTraffic && (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold font-mono">
                  Visits: ~{formatVisitsStr(maxTrafficTool.seoTraffic.monthlyVisits)} (SEO {maxTrafficTool.seoTraffic.seoScore})
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 📊 Data Grid Layout container (Slick high density list) */}
      <div className="bg-white dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] dark:shadow-none">
        <div className="overflow-x-auto">
          {/* Table view for MD and UP */}
          <table className="w-full text-left border-collapse min-w-[800px] hidden md:table">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/60 text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none">
                <th className="py-4 px-6 w-[280px]">{t.colName}</th>
                <th className="py-4 px-4 w-[120px]">{t.colCategory}</th>
                <th className="py-4 px-4 w-[160px]">{t.colSeo}</th>
                <th className="py-4 px-4 w-[240px]">{t.colAlternatives}</th>
                <th className="py-4 px-4 w-[80px] text-center">{t.colPopularity}</th>
                <th className="py-4 px-6 w-[140px] text-right">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/60 dark:divide-slate-800/50">
              {tools.map((tool) => {
                const isFavorited = favorites.includes(tool.id);
                const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;
                const isCopied = copiedId === tool.id;

                // Color score classes
                const score = tool.seoTraffic?.seoScore || 100;
                const scoreColor = score >= 95 
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30" 
                  : score >= 90 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30" 
                  : "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30";

                return (
                  <tr
                    key={tool.id}
                    onClick={() => handleRowClick(tool)}
                    className="hover:bg-indigo-50/20 dark:hover:bg-slate-800/40 group transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                  >
                    {/* Name & description */}
                    <td className="py-3 px-6 vertical-align-middle">
                      {/* Hidden anchor tag for programmatic native click */}
                      {!tool.isBuiltIn && (
                        <a
                          ref={(el) => { rowLinks.current[tool.id] = el; }}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden"
                        />
                      )}
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl border mt-0.5 transition-colors ${
                          tool.isBuiltIn 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100/50 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30" 
                            : tool.isCustom 
                            ? "bg-violet-50 text-violet-600 border-violet-100/50 dark:bg-violet-950/20 dark:text-violet-400 dark:border-violet-900/30" 
                            : "bg-slate-50 text-slate-500 border-slate-100/50 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-800 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100/40 dark:group-hover:bg-indigo-950/30 dark:group-hover:text-indigo-400 dark:group-hover:border-indigo-900/30"
                        }`}>
                          <ToolIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-extrabold text-[13.5px] text-slate-800 dark:text-slate-250 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {tool.name}
                            </span>
                            {tool.isBuiltIn && (
                              <span className="px-1.5 py-0.5 text-[8px] font-black bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 rounded">
                                {t.builtInBadge}
                              </span>
                            )}
                            {tool.isCustom && (
                              <span className="px-1.5 py-0.5 text-[8px] font-black bg-violet-100 dark:bg-violet-950 border border-violet-200 dark:border-violet-900 text-violet-800 dark:text-violet-400 rounded">
                                {t.customBadge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium leading-relaxed line-clamp-2 max-w-[240px]">
                            {tool.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mt-1">
                            {tool.tags.slice(0, 2).map((tag) => (
                              <button
                                key={tag}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onTagClick(tag);
                                }}
                                className="px-1.5 py-0.2 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-950 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-[9px] font-bold rounded-md border border-slate-100 dark:border-slate-800 transition-colors"
                              >
                                #{tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4 text-xs font-bold text-slate-500 vertical-align-middle">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] text-slate-600 dark:text-slate-300 select-none border border-slate-150 dark:border-slate-750">
                        {tool.category === "all" && t.categoryAll}
                        {tool.category === "ai" && t.categoryAi}
                        {tool.category === "dev" && t.categoryDev}
                        {tool.category === "design" && t.categoryDesign}
                        {tool.category === "productivity" && t.categoryProductivity}
                        {tool.category === "other" && t.categoryOther}
                        {tool.category === "utility" && t.categoryUtility}
                      </span>
                    </td>

                    {/* SEO Metrics */}
                    <td className="py-3 px-4 vertical-align-middle text-[11px]">
                      <div className="space-y-1 font-semibold">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 dark:text-slate-500">SEO:</span>
                          <span className={`px-1.5 py-0.2 font-black text-[9px] border rounded ${scoreColor}`}>
                            {score}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <span className="text-slate-400 dark:text-slate-500">Visits:</span>
                          <span className="font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-1 rounded">
                            {formatVisitsStr(tool.seoTraffic?.monthlyVisits)}
                          </span>
                        </div>
                        {tool.seoTraffic?.rank && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <span className="text-slate-400 dark:text-slate-500">Rank:</span>
                            <span className="font-mono text-slate-500 dark:text-slate-400">#{tool.seoTraffic.rank}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Alternatives Cell */}
                    <td className="py-3 px-4 vertical-align-middle text-xs">
                      {tool.alternatives && tool.alternatives.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold select-none">{t.colAlternatives}:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {tool.alternatives.map((alt, idx) => (
                              <a
                                key={idx}
                                href={alt.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-slate-200/50 dark:border-slate-750 rounded text-[10px] font-bold text-slate-600 dark:text-slate-350 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
                              >
                                <span>{alt.name}</span>
                                <LucideIcons.ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-300 dark:text-slate-600 font-medium italic">{t.noAlternatives}</span>
                      )}
                    </td>

                    {/* Popularity/clicks */}
                    <td className="py-3 px-4 text-center vertical-align-middle">
                      <span className="font-mono font-extrabold text-[11px] text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/20 px-2 py-0.5 rounded-lg select-none">
                        {tool.clicks || 0}
                      </span>
                    </td>

                    {/* Action buttons */}
                    <td className="py-3 px-6 text-right vertical-align-middle">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        {/* Favorite */}
                        <button
                          onClick={() => onToggleFavorite(tool.id)}
                          className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-300 dark:text-slate-600 hover:text-amber-500 dark:hover:text-amber-400 rounded-xl transition-colors cursor-pointer"
                          title="Favorite"
                        >
                          <LucideIcons.Star
                            className={`w-4 h-4 ${
                              isFavorited ? "fill-amber-400 text-amber-500 scale-110" : "text-slate-300"
                            }`}
                          />
                        </button>

                        {/* Copy Link */}
                        {!tool.isBuiltIn && (
                          <button
                            onClick={(e) => handleCopyLink(e, tool.id, tool.url)}
                            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-750"
                            title="Copy Link"
                          >
                            {isCopied ? (
                              <LucideIcons.Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <LucideIcons.Copy className="w-4 h-4" />
                            )}
                          </button>
                        )}

                        {/* Direct Button */}
                        {tool.isBuiltIn ? (
                          <button
                            onClick={() => handleRowClick(tool)}
                            className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-600 rounded-xl transition-all cursor-pointer"
                            title="Run"
                          >
                            <LucideIcons.Play className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              incrementClicks(tool.id);
                            }}
                            className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-600 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center"
                            title="Visit"
                          >
                            <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Fallback Grid Row layout on small screens (mobile view) */}
          <div className="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
            {tools.map((tool) => {
              const isFavorited = favorites.includes(tool.id);
              const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;
              const isCopied = copiedId === tool.id;

              return (
                <div
                  key={tool.id}
                  onClick={() => handleRowClick(tool)}
                  className="p-3.5 hover:bg-indigo-50/10 dark:hover:bg-slate-800/20 transition-colors cursor-pointer space-y-2.5"
                >
                  {/* Hidden anchor tag for programmatic native click on mobile */}
                  {!tool.isBuiltIn && (
                    <a
                      ref={(el) => { rowLinks.current[`mobile-${tool.id}`] = el; }}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden"
                    />
                  )}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${
                        tool.isBuiltIn ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400" : "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
                      }`}>
                        <ToolIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-200">{tool.name}</h4>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-850 px-1.5 py-0.5 rounded border dark:border-slate-800">
                          {tool.seoTraffic?.monthlyVisits === "本地免流" || tool.seoTraffic?.monthlyVisits === "免流" ? "Local" : `Visits: ~${formatVisitsStr(tool.seoTraffic?.monthlyVisits)}`}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(tool.id);
                      }}
                      className="p-1 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-300 dark:text-slate-600 hover:text-amber-500 dark:hover:text-amber-450 rounded-lg transition-colors cursor-pointer"
                    >
                      <LucideIcons.Star
                        className={`w-4 h-4 ${isFavorited ? "fill-amber-400 text-amber-500" : ""}`}
                      />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{tool.description}</p>

                  {/* Alternatives */}
                  {tool.alternatives && tool.alternatives.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold">{t.colAlternatives}:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.alternatives.map((alt, idx) => (
                          <a
                            key={idx}
                            href={alt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-slate-200/50 dark:border-slate-700 rounded text-[9px] font-bold text-slate-600 dark:text-slate-300"
                          >
                            <span>{alt.name}</span>
                            <LucideIcons.ExternalLink className="w-2 h-2" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-850 pt-3">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-150 dark:bg-slate-800 px-2 py-0.5 rounded">
                      SEO Score: {tool.seoTraffic?.seoScore || 100} / 100
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {!tool.isBuiltIn && (
                        <button
                          onClick={(e) => handleCopyLink(e, tool.id, tool.url)}
                          className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg"
                        >
                          {isCopied ? <LucideIcons.Check className="w-3.5 h-3.5 text-emerald-600" /> : <LucideIcons.Copy className="w-3.5 h-3.5" />}
                        </button>
                      )}
                      {tool.isBuiltIn ? (
                        <button
                          onClick={() => handleRowClick(tool)}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-sm"
                        >
                          <span>Run</span>
                          <LucideIcons.ArrowUpRight className="w-3 h-3" />
                        </button>
                      ) : (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            incrementClicks(tool.id);
                          }}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-sm inline-flex justify-center"
                        >
                          <span>Run ↗</span>
                          <LucideIcons.ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
