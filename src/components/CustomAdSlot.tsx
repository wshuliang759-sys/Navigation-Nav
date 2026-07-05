import * as LucideIcons from "lucide-react";

export default function CustomAdSlot() {
  const Megaphone = LucideIcons.Megaphone;
  
  return (
    <div className="w-full h-28 border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/40 hover:bg-slate-100/40 dark:hover:bg-slate-800/40 hover:border-indigo-300/60 dark:hover:border-indigo-900/60 rounded-2xl flex flex-col items-center justify-center gap-1.5 p-4 transition-all duration-300 relative overflow-hidden group select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/10 to-violet-50/10 dark:from-indigo-950/10 dark:to-violet-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <Megaphone className="w-4.5 h-4.5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300" />
      
      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-350 transition-colors duration-300">
        此处为广告位
      </span>
      
      <span className="text-[9px] text-slate-300 dark:text-slate-600 group-hover:text-slate-400 dark:group-hover:text-slate-500 font-bold font-mono transition-colors duration-300">
        Custom Ad Slot
      </span>
      
      {/* 
        DEVELOPER NOTICE:
        You can replace this placeholder container or the content inside it
        with your own ad agency scripts, Google AdSense, or custom affiliate banners.
      */}
    </div>
  );
}
