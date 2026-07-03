import { useState, useId, MouseEvent } from "react";
import * as LucideIcons from "lucide-react";
import { Tool } from "../types";

interface ToolCardProps {
  tool: Tool;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onTagClick: (tag: string) => void;
  onSelectBuiltIn: (key: string) => void;
  incrementClicks: (id: string) => void;
}

export default function ToolCard({
  tool,
  isFavorited,
  onToggleFavorite,
  onTagClick,
  onSelectBuiltIn,
  incrementClicks,
}: ToolCardProps) {
  // Extract Lucide icons
  const Star = LucideIcons.Star;
  const ExternalLink = LucideIcons.ExternalLink;
  const Copy = LucideIcons.Copy;
  const Check = LucideIcons.Check;
  const ArrowRight = LucideIcons.ArrowRight;

  const [copied, setCopied] = useState(false);

  // Generate unique ID for tool card interactions
  const buttonId = useId();

  // Dynamic Lucide icon lookup
  const ToolIcon = (LucideIcons as any)[tool.icon] || LucideIcons.Globe;

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
      className="group relative bg-white border border-slate-200/50 hover:border-slate-300/80 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.035)] transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:scale-[1.01] hover:-translate-y-0.5 select-none"
    >
      <div className="space-y-4">
        {/* Top bar with Icon and favorite star */}
        <div className="flex justify-between items-start gap-4">
          <div
            className={`p-3 rounded-2xl border transition-colors ${
              tool.isBuiltIn
                ? "bg-emerald-50 text-emerald-600 border-emerald-100/50"
                : tool.isCustom
                ? "bg-violet-50 text-violet-600 border-violet-100/50"
                : "bg-slate-50 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 border-slate-100/50"
            }`}
          >
            <ToolIcon className="w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Badge */}
            {tool.isBuiltIn ? (
              <span className="px-2.5 py-1 text-[10px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-lg">
                内置微应用
              </span>
            ) : tool.isCustom ? (
              <span className="px-2.5 py-1 text-[10px] font-bold bg-violet-50 border border-violet-100 text-violet-700 rounded-lg">
                自定义
              </span>
            ) : null}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(tool.id);
              }}
              className="p-1.5 hover:bg-slate-50 text-slate-300 hover:text-amber-500 rounded-xl transition-all cursor-pointer"
              title={isFavorited ? "取消收藏" : "加入收藏"}
            >
              <Star
                className={`w-4 h-4 transition-transform ${
                  isFavorited ? "fill-amber-400 text-amber-500 scale-110" : "text-slate-300"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Name and description */}
        <div className="space-y-2">
          <h3 className="font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-[15px]">
            <span className="line-clamp-1">{tool.name}</span>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 min-h-[3.375rem] font-medium">
            {tool.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick(tag);
              }}
              className="px-2.5 py-0.5 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 text-[10px] font-semibold rounded-lg border border-slate-100/60 transition-colors cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Footer statistics & action buttons */}
      <div className="border-t border-slate-100 mt-5 pt-3.5 flex justify-between items-center text-[11px] text-slate-400">
        <span className="font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
          {tool.clicks ? `${tool.clicks} 访问` : "全新收录"}
        </span>

        <div className="flex gap-1.5">
          {!tool.isBuiltIn && (
            <button
              id={`${buttonId}-copy`}
              onClick={handleCopyLink}
              className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              title="复制网址链接"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          <button
            id={`${buttonId}-action`}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 text-slate-700 rounded-xl font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-xs"
          >
            {tool.isBuiltIn ? (
              <>
                <span>立即运行</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>访问官网</span>
                <ExternalLink className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
