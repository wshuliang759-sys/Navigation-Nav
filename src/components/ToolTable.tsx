import { useState, useId, MouseEvent } from "react";
import * as LucideIcons from "lucide-react";
import { Tool } from "../types";
import { TranslationDict } from "../lib/translations";

interface ToolTableProps {
  tools: Tool[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onTagClick: (tag: string) => void;
  onSelectBuiltIn: (key: string) => void;
  incrementClicks: (id: string) => void;
  t: TranslationDict;
}

export default function ToolTable({
  tools,
  favorites,
  onToggleFavorite,
  onTagClick,
  onSelectBuiltIn,
  incrementClicks,
  t,
}: ToolTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const tableId = useId();

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
      window.open(tool.url, "_blank", "noopener,noreferrer");
    }
  };

  // Calculate SEO Traffic Analytics for the currently filtered tools
  const validSeoTools = tools.filter(t => t.seoTraffic && t.seoTraffic.seoScore);
  const avgSeoScore = validSeoTools.length > 0 
    ? Math.round(validSeoTools.reduce((acc, t) => acc + (t.seoTraffic?.seoScore || 0), 0) / validSeoTools.length)
    : 0;

  // Total Traffic
  const totalVisitsNum = tools.reduce((acc, t) => acc + parseVisitsToNumber(t.seoTraffic?.monthlyVisits), 0);

  const totalVisitsStr = totalVisitsNum >= 1000000000 
    ? `${(totalVisitsNum / 1000000000).toFixed(1)}B` 
    : totalVisitsNum >= 1000000 
    ? `${(totalVisitsNum / 1000000).toFixed(1)}M` 
    : totalVisitsNum > 0 
    ? `${Math.round(totalVisitsNum / 1000)}K` 
    : "Local";

  // Find tool with maximum visits
  const maxTrafficTool = [...tools].sort((a, b) => {
    return parseVisitsToNumber(b.seoTraffic?.monthlyVisits) - parseVisitsToNumber(a.seoTraffic?.monthlyVisits);
  })[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 🚀 SEO & Traffic Intelligence Widget Dashboard */}
      {tools.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-gradient-to-br from-indigo-900/10 via-slate-50 to-indigo-900/5 border border-indigo-150/40 rounded-3xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-2xl">
              <LucideIcons.TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                {t.estMonthlyTraffic}
              </p>
              <h4 className="text-xl font-black text-slate-800 tracking-tight mt-0.5">
                {totalVisitsStr === "Local" ? "100% Offline Local" : `~ ${totalVisitsStr}`}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
              <LucideIcons.ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                {t.avgSeoScore}
              </p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl font-black text-slate-800 tracking-tight">
                  {avgSeoScore || "100"}
                </span>
                <span className="text-xs font-bold text-emerald-600">/ 100 XP</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl">
              <LucideIcons.Crown className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                {t.categoryLeader}
              </p>
              <p className="text-sm font-extrabold text-slate-800 mt-0.5 truncate">
                {maxTrafficTool ? maxTrafficTool.name : "N/A"}
              </p>
              {maxTrafficTool && maxTrafficTool.seoTraffic && (
                <p className="text-[10px] text-amber-600 font-bold font-mono">
                  Visits: ~ {maxTrafficTool.seoTraffic.monthlyVisits} (SEO {maxTrafficTool.seoTraffic.seoScore})
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 📊 Data Grid Layout container (Slick high density list) */}
      <div className="bg-white border border-slate-200/50 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
        <div className="overflow-x-auto">
          {/* Table view for MD and UP */}
          <table className="w-full text-left border-collapse min-w-[800px] hidden md:table">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-black uppercase tracking-wider text-slate-400 select-none">
                <th className="py-4 px-6 w-[280px]">{t.colName}</th>
                <th className="py-4 px-4 w-[120px]">{t.colCategory}</th>
                <th className="py-4 px-4 w-[160px]">{t.colSeo}</th>
                <th className="py-4 px-4 w-[240px]">{t.colAlternatives}</th>
                <th className="py-4 px-4 w-[80px] text-center">{t.colPopularity}</th>
                <th className="py-4 px-6 w-[140px] text-right">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/60">
              {tools.map((tool) => {
                const isFavorited = favorites.includes(tool.id);
                const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;
                const isCopied = copiedId === tool.id;

                // Color score classes
                const score = tool.seoTraffic?.seoScore || 100;
                const scoreColor = score >= 95 
                  ? "text-emerald-600 bg-emerald-50 border-emerald-100" 
                  : score >= 90 
                  ? "text-blue-600 bg-blue-50 border-blue-100" 
                  : "text-amber-600 bg-amber-50 border-amber-100";

                return (
                  <tr
                    key={tool.id}
                    onClick={() => handleRowClick(tool)}
                    className="hover:bg-indigo-50/20 group transition-colors cursor-pointer text-slate-700"
                  >
                    {/* Name & description */}
                    <td className="py-3 px-6 vertical-align-middle">
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl border mt-0.5 transition-colors ${
                          tool.isBuiltIn 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100/50" 
                            : tool.isCustom 
                            ? "bg-violet-50 text-violet-600 border-violet-100/50" 
                            : "bg-slate-50 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 border-slate-100/50"
                        }`}>
                          <ToolIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-extrabold text-[13.5px] text-slate-800 group-hover:text-indigo-600 transition-colors">
                              {tool.name}
                            </span>
                            {tool.isBuiltIn && (
                              <span className="px-1.5 py-0.5 text-[8px] font-black bg-emerald-100 border border-emerald-200 text-emerald-800 rounded">
                                {t.builtInBadge}
                              </span>
                            )}
                            {tool.isCustom && (
                              <span className="px-1.5 py-0.5 text-[8px] font-black bg-violet-100 border border-violet-200 text-violet-800 rounded">
                                {t.customBadge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2 max-w-[240px]">
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
                                className="px-1.5 py-0.2 bg-slate-50 hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 text-[9px] font-bold rounded-md border border-slate-100 transition-colors"
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
                      <span className="px-2 py-1 bg-slate-100 rounded-lg text-[10px] text-slate-600 select-none border border-slate-150">
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
                          <span className="text-slate-400">SEO:</span>
                          <span className={`px-1.5 py-0.2 font-black text-[9px] border rounded ${scoreColor}`}>
                            {score}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <span className="text-slate-400">Visits:</span>
                          <span className="font-mono font-bold text-slate-700 bg-slate-50 px-1 rounded">
                            {tool.seoTraffic?.monthlyVisits || "Local"}
                          </span>
                        </div>
                        {tool.seoTraffic?.rank && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <span className="text-slate-400">Rank:</span>
                            <span className="font-mono text-slate-500">#{tool.seoTraffic.rank}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Alternatives Cell */}
                    <td className="py-3 px-4 vertical-align-middle text-xs">
                      {tool.alternatives && tool.alternatives.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-slate-400 font-bold select-none">{t.colAlternatives}:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {tool.alternatives.map((alt, idx) => (
                              <a
                                key={idx}
                                href={alt.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100/80 hover:bg-indigo-50 border border-slate-200/50 hover:border-indigo-100 rounded text-[10px] font-bold text-slate-600 hover:text-indigo-600 transition-all shadow-sm"
                              >
                                <span>{alt.name}</span>
                                <LucideIcons.ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-300 font-medium italic">{t.noAlternatives}</span>
                      )}
                    </td>

                    {/* Popularity/clicks */}
                    <td className="py-3 px-4 text-center vertical-align-middle">
                      <span className="font-mono font-extrabold text-[11px] text-indigo-600 bg-indigo-50/50 border border-indigo-100 px-2 py-0.5 rounded-lg select-none">
                        {tool.clicks || 0}
                      </span>
                    </td>

                    {/* Action buttons */}
                    <td className="py-3 px-6 text-right vertical-align-middle">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        {/* Favorite */}
                        <button
                          onClick={() => onToggleFavorite(tool.id)}
                          className="p-2 hover:bg-slate-50 text-slate-300 hover:text-amber-500 rounded-xl transition-colors cursor-pointer"
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
                            className="p-2 hover:bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200"
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
                        <button
                          onClick={() => handleRowClick(tool)}
                          className="p-2 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-xl transition-all cursor-pointer"
                          title={tool.isBuiltIn ? "Run" : "Visit"}
                        >
                          {tool.isBuiltIn ? (
                            <LucideIcons.Play className="w-3.5 h-3.5" />
                          ) : (
                            <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Fallback Grid Row layout on small screens (mobile view) */}
          <div className="md:hidden divide-y divide-slate-100">
            {tools.map((tool) => {
              const isFavorited = favorites.includes(tool.id);
              const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;
              const isCopied = copiedId === tool.id;

              return (
                <div
                  key={tool.id}
                  onClick={() => handleRowClick(tool)}
                  className="p-3.5 hover:bg-indigo-50/10 transition-colors cursor-pointer space-y-2.5"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${
                        tool.isBuiltIn ? "bg-emerald-50 text-emerald-600" : "bg-indigo-50 text-indigo-600"
                      }`}>
                        <ToolIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-800">{tool.name}</h4>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border">
                          {tool.seoTraffic?.monthlyVisits === "本地免流" || tool.seoTraffic?.monthlyVisits === "免流" ? "Local" : `Visits: ${tool.seoTraffic?.monthlyVisits}`}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(tool.id);
                      }}
                      className="p-1 hover:bg-slate-50 text-slate-300 hover:text-amber-500 rounded-lg transition-colors cursor-pointer"
                    >
                      <LucideIcons.Star
                        className={`w-4 h-4 ${isFavorited ? "fill-amber-400 text-amber-500" : ""}`}
                      />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{tool.description}</p>

                  {/* Alternatives */}
                  {tool.alternatives && tool.alternatives.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-400 font-extrabold">{t.colAlternatives}:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.alternatives.map((alt, idx) => (
                          <a
                            key={idx}
                            href={alt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 hover:bg-indigo-50 border border-slate-200/50 rounded text-[9px] font-bold text-slate-600"
                          >
                            <span>{alt.name}</span>
                            <LucideIcons.ExternalLink className="w-2 h-2" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-150 px-2 py-0.5 rounded">
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
                      <button
                        onClick={() => handleRowClick(tool)}
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-sm"
                      >
                        <span>{tool.isBuiltIn ? "Run" : "Run ↗"}</span>
                        <LucideIcons.ArrowUpRight className="w-3 h-3" />
                      </button>
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
