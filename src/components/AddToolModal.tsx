import { useState, useId, FormEvent } from "react";
import * as LucideIcons from "lucide-react";
import { Category, UserCustomTool } from "../types";
import { TranslationDict } from "../lib/translations";

interface AddToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onAddTool: (tool: UserCustomTool) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
  t: TranslationDict;
}

const PRESET_ICONS = [
  "Globe",
  "Code",
  "Sparkles",
  "Palette",
  "Briefcase",
  "BookOpen",
  "Terminal",
  "Cpu",
  "Smile",
  "Heart",
  "Compass",
  "Layers",
];

export default function AddToolModal({
  isOpen,
  onClose,
  categories,
  onAddTool,
  isAdmin,
  setIsAdmin,
  t,
}: AddToolModalProps) {
  // Extract icons
  const X = LucideIcons.X;
  const Plus = LucideIcons.Plus;
  const ShieldAlert = LucideIcons.ShieldAlert;
  const Key = LucideIcons.Key;

  const [passwordInput, setPasswordInput] = useState("");
  const [adminErrorMsg, setAdminErrorMsg] = useState("");

  const [formData, setFormData] = useState<UserCustomTool>({
    name: "",
    url: "",
    category: "ai",
    description: "",
    tags: "",
    icon: "Globe",
  });

  const [error, setError] = useState("");

  const nameInputId = useId();
  const urlInputId = useId();
  const catSelectId = useId();
  const descInputId = useId();
  const tagsInputId = useId();

  if (!isOpen) return null;

  // Verify Admin Access code
  const handleAdminVerify = (e: FormEvent) => {
    e.preventDefault();
    setAdminErrorMsg("");

    const normalizedCode = passwordInput.trim().toLowerCase();
    if (normalizedCode === "admin" || normalizedCode === "admin123") {
      setIsAdmin(true);
      try {
        localStorage.setItem("admin_session", "active");
      } catch (err) {}
      setPasswordInput("");
    } else {
      setAdminErrorMsg(t.adminError || "Invalid authentication code!");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Double check admin privilege on submit
    if (!isAdmin) {
      setError("Unauthorized access");
      return;
    }

    // Simple validations
    if (!formData.name.trim()) {
      setError("请输入工具名称 / Invalid Name");
      return;
    }
    if (!formData.url.trim()) {
      setError("请输入有效网址 / Invalid URL");
      return;
    }

    let formattedUrl = formData.url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    onAddTool({
      ...formData,
      url: formattedUrl,
    });

    // Reset Form
    setFormData({
      name: "",
      url: "",
      category: "ai",
      description: "",
      tags: "",
      icon: "Globe",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md border border-slate-200/50 shadow-xl overflow-hidden animate-scale-up">
        
        {/* Scenario 1: Admin is NOT logged in - show lock screen */}
        {!isAdmin ? (
          <div className="p-6 text-center space-y-6">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
                <h2 className="text-sm font-black text-slate-800">{t.modalAddTitle} (Admin Only)</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl flex items-center justify-center mb-3.5 shadow-sm">
                <Key className="w-6 h-6 animate-pulse" />
              </div>
              <p className="text-xs font-bold text-slate-500 max-w-xs leading-relaxed">
                {t.adminLock}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-semibold italic">
                (Demo password: <code className="text-indigo-600 bg-slate-50 px-1 py-0.5 rounded font-bold font-mono">admin</code>)
              </p>
            </div>

            <form onSubmit={handleAdminVerify} className="space-y-4 text-left">
              {adminErrorMsg && (
                <div className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-150 p-2.5 rounded-xl flex items-center gap-1.5">
                  <span>⚠️</span>
                  <span>{adminErrorMsg}</span>
                </div>
              )}

              <div className="space-y-1">
                <input
                  type="password"
                  required
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder={t.adminKeyPlaceholder}
                  className="w-full text-xs text-center font-mono tracking-widest border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 text-xs font-bold border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-all cursor-pointer"
                >
                  {t.modalAddClose}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-md shadow-indigo-100 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LucideIcons.LockOpen className="w-3.5 h-3.5" />
                  {t.adminVerifyBtn}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Scenario 2: Admin is verified - show full collection form */
          <>
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
                  <LucideIcons.ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-extrabold text-slate-900">{t.modalAddTitle} <span className="text-[9px] font-black tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-1 py-0.5 rounded ml-1 uppercase">ADMIN</span></h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <p className="text-xs font-semibold text-red-500 bg-red-50 p-2.5 rounded-xl border border-red-100">
                  ⚠️ {error}
                </p>
              )}

              {/* Tool Name */}
              <div className="space-y-1 text-left">
                <label htmlFor={nameInputId} className="text-xs font-bold text-slate-700 block">
                  {t.modalAddName} <span className="text-red-500">*</span>
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tailwind CSS Docs"
                  className="w-full text-xs border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
                />
              </div>

              {/* Tool URL */}
              <div className="space-y-1 text-left">
                <label htmlFor={urlInputId} className="text-xs font-bold text-slate-700 block">
                  {t.modalAddUrl} <span className="text-red-500">*</span>
                </label>
                <input
                  id={urlInputId}
                  type="text"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="tailwindcss.com"
                  className="w-full text-xs border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
                />
              </div>

              {/* Category Selector */}
              <div className="space-y-1 text-left">
                <label htmlFor={catSelectId} className="text-xs font-bold text-slate-700 block">
                  {t.modalAddCategory}
                </label>
                <select
                  id={catSelectId}
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full text-xs border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer text-slate-800 font-bold"
                >
                  {categories
                    .filter((c) => c.id !== "all" && c.id !== "favorites" && c.id !== "utility")
                    .map((cat) => {
                      const localizedCategoryName = (() => {
                        switch (cat.id) {
                          case "all": return t.categoryAll;
                          case "favorites": return t.categoryFav;
                          case "utility": return t.categoryUtility;
                          case "ai": return t.categoryAi;
                          case "dev": return t.categoryDev;
                          case "design": return t.categoryDesign;
                          case "productivity": return t.categoryProductivity;
                          case "other": return t.categoryOther;
                          default: return cat.name;
                        }
                      })();
                      return (
                        <option key={cat.id} value={cat.id}>
                          {localizedCategoryName}
                        </option>
                      );
                    })}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1 text-left">
                <label htmlFor={descInputId} className="text-xs font-bold text-slate-700 block">
                  {t.modalAddDesc}
                </label>
                <textarea
                  id={descInputId}
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your utility..."
                  className="w-full text-xs border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all resize-none text-slate-800"
                />
              </div>

              {/* Tags */}
              <div className="space-y-1 text-left">
                <label htmlFor={tagsInputId} className="text-xs font-bold text-slate-700 block">
                  {t.modalAddTags} ({t.modalAddTagsHint})
                </label>
                <input
                  id={tagsInputId}
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="css, web, docs"
                  className="w-full text-xs border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
                />
              </div>

              {/* Icon Selector */}
              <div className="space-y-2 text-left">
                <span className="text-xs font-bold text-slate-700 block">{t.modalAddIcon}</span>
                <div className="grid grid-cols-6 gap-2">
                  {PRESET_ICONS.map((iconName) => {
                    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Globe;
                    const isSelected = formData.icon === iconName;

                    return (
                      <button
                        key={iconName}
                        type="button"
                        onClick={() => setFormData({ ...formData, icon: iconName })}
                        className={`p-2 border rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                          isSelected
                            ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                            : "border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-500"
                        }`}
                        title={iconName}
                      >
                        <IconComponent className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 text-xs font-bold border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl transition-colors cursor-pointer"
                >
                  {t.modalAddClose}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-md shadow-indigo-100 cursor-pointer"
                >
                  {t.modalAddSubmit}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
