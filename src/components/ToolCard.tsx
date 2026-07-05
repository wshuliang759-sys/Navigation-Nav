import { useState, useId, MouseEvent } from "react";
import * as LucideIcons from "lucide-react";
import { Tool } from "../types";
import { TranslationDict, Language } from "../lib/translations";

interface ToolCardProps {
  tool: Tool;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onTagClick: (tag: string) => void;
  onSelectBuiltIn: (key: string) => void;
  incrementClicks: (id: string) => void;
  t: TranslationDict;
  language?: Language;
}

export default function ToolCard({
  tool,
  isFavorited,
  onToggleFavorite,
  onTagClick,
  onSelectBuiltIn,
  incrementClicks,
  t,
  language = "zh_cn",
}: ToolCardProps) {
  const Star = LucideIcons.Star;
  const ExternalLink = LucideIcons.ExternalLink;
  const Copy = LucideIcons.Copy;
  const Check = LucideIcons.Check;
  const ArrowRight = LucideIcons.ArrowRight;

  const [copied, setCopied] = useState(false);
  const buttonId = useId();

  const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;
  const isZh = language === "zh_cn" || language === "zh_tw";

  // Parsing traffic count
  const parseVisitsToNumber = (visits?: string): number => {
    if (!visits) return 0;
    if (visits === "本地免流" || visits === "免流" || visits === "Local") return 0;
    const val = parseFloat(visits);
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

  const handleCopyLink = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(tool.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCardClick = () => {
    incrementClicks(tool.id);
    if (tool.isBuiltIn && tool.builtInKey) {
      onSelectBuiltIn(tool.builtInKey);
    } else {
      window.open(tool.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/80 hover:border-slate-300/80 dark:hover:border-slate-700/80 rounded-2xl p-2.5 sm:p-3 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.025)] dark:shadow-none transition-all duration-300 flex items-center gap-3 w-full cursor-pointer hover:scale-[1.01] hover:-translate-y-0.5 select-none h-full"
    >
      {/* Flat Layout Left Side: Mini-Icon container with hover animation */}
      <div
        className={`p-2 rounded-xl border shrink-0 transition-all duration-300 ${
          tool.isBuiltIn
            ? "bg-emerald-50 text-emerald-600 border-emerald-100/40 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30 group-hover:bg-emerald-100/50 dark:group-hover:bg-emerald-900/30"
            : tool.isCustom
            ? "bg-violet-50 text-violet-600 border-violet-100/40 dark:bg-violet-950/20 dark:text-violet-400 dark:border-violet-900/30 group-hover:bg-violet-100/50 dark:group-hover:bg-violet-900/30"
            : "bg-slate-50 text-slate-500 border-slate-100/40 dark:bg-slate-850 dark:text-slate-400 dark:border-slate-800 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100/40 dark:group-hover:bg-indigo-950/30 dark:group-hover:text-indigo-400 dark:group-hover:border-indigo-900/30"
        }`}
      >
        <ToolIcon className="w-4.5 h-4.5 sm:w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Flat Layout Right Side: Dense multi-column metadata */}
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
        
        {/* Top Segment: Title & Badges on the left, quick Actions on the right */}
        <div className="flex items-center justify-between gap-1.5 mb-0.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-[13px] sm:text-[13.5px] truncate">
              {tool.name}
            </h3>
            {/* Extremely compact badges */}
            {tool.isBuiltIn ? (
              <span className="px-1 py-0.25 text-[8px] font-bold bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/50 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded shrink-0">
                {t.builtInBadge}
              </span>
            ) : tool.isCustom ? (
              <span className="px-1 py-0.25 text-[8px] font-bold bg-violet-50 dark:bg-violet-950/30 border border-violet-100/50 dark:border-violet-900/30 text-violet-700 dark:text-violet-400 rounded shrink-0">
                {t.customBadge}
              </span>
            ) : null}
          </div>

          {/* Quick inline controls: Fav and Copy */}
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(tool.id);
              }}
              className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-300 dark:text-slate-600 hover:text-amber-500 dark:hover:text-amber-400 rounded-lg transition-all cursor-pointer"
              title="Favorite"
            >
              <Star
                className={`w-3.5 h-3.5 transition-transform ${
                  isFavorited ? "fill-amber-400 text-amber-500 scale-110" : "text-slate-300 dark:text-slate-650 hover:scale-105"
                }`}
              />
            </button>
            {!tool.isBuiltIn && (
              <button
                id={`${buttonId}-copy`}
                onClick={handleCopyLink}
                className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors cursor-pointer"
                title="Copy link"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-bounce" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Middle Segment: Tiny description, single line for maximum vertical savings */}
        <p className="text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 leading-tight line-clamp-1 mb-1 font-medium select-none">
          {tool.description}
        </p>

        {/* Bottom Segment: Tags & Metrics aligned on the same horizontal plane */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          
          {/* Tags on the left side */}
          <div className="flex items-center gap-1.5 overflow-hidden">
            {tool.tags.slice(0, 2).map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  onTagClick(tag);
                }}
                className="px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 text-slate-500 dark:text-slate-400 text-[9px] font-bold rounded-md border border-slate-100/50 dark:border-slate-800/80 transition-colors cursor-pointer truncate"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Visits and Action buttons tightly grouped on the right side */}
          <div className="flex items-center gap-1.5 shrink-0 text-[10px]">
            {tool.seoTraffic?.monthlyVisits && (
              <span className="font-mono text-indigo-600 dark:text-indigo-450 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/40 dark:border-indigo-900/20 px-1.5 py-0.5 rounded-md font-bold">
                {isZh ? "访问:" : ""}{formatVisitsStr(tool.seoTraffic.monthlyVisits)}
              </span>
            )}
            <span className="font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 px-1.5 py-0.5 rounded-md font-bold">
              {tool.clicks ? `${tool.clicks} C` : "New"}
            </span>

            {/* Run Button indicator */}
            <div className="p-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-lg group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white group-hover:border-indigo-600 dark:group-hover:border-indigo-600 transition-all duration-300">
              {tool.isBuiltIn ? (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              ) : (
                <ExternalLink className="w-3.5 h-3.5" />
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
