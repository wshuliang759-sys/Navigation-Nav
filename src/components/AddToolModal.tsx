import { useState, useId, FormEvent } from "react";
import * as LucideIcons from "lucide-react";
import { Category, UserCustomTool } from "../types";

interface AddToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onAddTool: (tool: UserCustomTool) => void;
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
}: AddToolModalProps) {
  // Extract icons
  const X = LucideIcons.X;
  const Plus = LucideIcons.Plus;

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validations
    if (!formData.name.trim()) {
      setError("请输入工具名称");
      return;
    }
    if (!formData.url.trim()) {
      setError("请输入有效网址");
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
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
              <Plus className="w-4 h-4" />
            </div>
            <h2 className="text-base font-extrabold text-slate-900">收录新工具</h2>
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
          <div className="space-y-1">
            <label htmlFor={nameInputId} className="text-xs font-bold text-slate-700 block">
              工具名称 <span className="text-red-500">*</span>
            </label>
            <input
              id={nameInputId}
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="例如: Tailwind CSS Docs"
              className="w-full text-sm border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
            />
          </div>

          {/* Tool URL */}
          <div className="space-y-1">
            <label htmlFor={urlInputId} className="text-xs font-bold text-slate-700 block">
              工具网址 <span className="text-red-500">*</span>
            </label>
            <input
              id={urlInputId}
              type="text"
              required
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="例如: tailwindcss.com"
              className="w-full text-sm border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
            />
          </div>

          {/* Category Selector */}
          <div className="space-y-1">
            <label htmlFor={catSelectId} className="text-xs font-bold text-slate-700 block">
              所属分类
            </label>
            <select
              id={catSelectId}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full text-sm border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer text-slate-800"
            >
              {categories
                .filter((c) => c.id !== "all" && c.id !== "favorites" && c.id !== "utility")
                .map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label htmlFor={descInputId} className="text-xs font-bold text-slate-700 block">
              描述说明 (一句话概括)
            </label>
            <textarea
              id={descInputId}
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="简单描述这个工具的主要功能或用途..."
              className="w-full text-sm border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all resize-none text-slate-800"
            />
          </div>

          {/* Tags */}
          <div className="space-y-1">
            <label htmlFor={tagsInputId} className="text-xs font-bold text-slate-700 block">
              标签关键词 (逗号分隔)
            </label>
            <input
              id={tagsInputId}
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="例如: 框架, 样式, 文档"
              className="w-full text-sm border border-slate-200 bg-slate-50/60 focus:bg-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-slate-800"
            />
          </div>

          {/* Icon Selector */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">选择卡片图标</span>
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
                    <IconComponent className="w-5 h-5" />
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
              取消
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-md shadow-indigo-100 cursor-pointer"
            >
              保存收录
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
