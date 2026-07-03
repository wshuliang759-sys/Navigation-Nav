import { useState, useEffect, useId } from "react";
import * as LucideIcons from "lucide-react";

interface BuiltInToolsProps {
  toolKey: string;
  onClose: () => void;
}

export default function BuiltInTools({ toolKey, onClose }: BuiltInToolsProps) {
  // Common icons
  const ArrowLeftRight = LucideIcons.ArrowLeftRight;
  const Copy = LucideIcons.Copy;
  const Check = LucideIcons.Check;
  const Trash2 = LucideIcons.Trash2;
  const RefreshCw = LucideIcons.RefreshCw;
  const Play = LucideIcons.Play;
  const Pause = LucideIcons.Pause;

  // Feedback states
  const [copied, setCopied] = useState(false);
  const triggerCopyFeedback = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. JSON Formatter State
  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [jsonError, setJsonError] = useState("");

  // 2. Base64 State
  const [base64Input, setBase64Input] = useState("");
  const [base64Output, setBase64Output] = useState("");
  const [base64Error, setBase64Error] = useState("");

  // 3. Password Generator State
  const [passLength, setPassLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPass, setGeneratedPass] = useState("");

  // 4. Timestamp Converter State
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timePaused, setTimePaused] = useState(false);
  const [tsInput, setTsInput] = useState("");
  const [tsOutput, setTsOutput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [dateOutput, setDateOutput] = useState("");

  // 5. Text Stats State
  const [textInput, setTextInput] = useState("");

  // Unique IDs for accessibility and labels
  const jsonTextareaId = useId();
  const base64Textarea1Id = useId();
  const base64Textarea2Id = useId();
  const passLengthId = useId();
  const timestampInputId = useId();
  const dateInputId = useId();
  const textInputId = useId();

  // Timestamp ticker
  useEffect(() => {
    if (timePaused) return;
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [timePaused]);

  // Handle default initial states
  useEffect(() => {
    if (toolKey === "password" && !generatedPass) {
      generatePassword();
    }
    if (toolKey === "timestamp") {
      setTsInput(Math.floor(Date.now() / 1000).toString());
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      setDateInput(
        `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
          now.getHours()
        )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
      );
    }
  }, [toolKey]);

  // --- JSON Formatter Functions ---
  const handleJsonFormat = () => {
    setJsonError("");
    if (!jsonInput.trim()) {
      setJsonOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setJsonError(err.message || "无效的 JSON 格式");
    }
  };

  const handleJsonMinify = () => {
    setJsonError("");
    if (!jsonInput.trim()) {
      setJsonOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed));
    } catch (err: any) {
      setJsonError(err.message || "无效的 JSON 格式");
    }
  };

  const loadJsonSample = () => {
    const sample = {
      name: "工具导航",
      version: "1.0.0",
      description: "开发者口袋工具箱",
      features: ["分类导航", "我的收藏", "离线微工具", "自定义提交"],
      stats: {
        totalTools: 35,
        builtIn: 5,
        isActive: true,
      },
    };
    setJsonInput(JSON.stringify(sample, null, 2));
    setJsonError("");
  };

  // --- Base64 Functions ---
  const handleBase64Encode = () => {
    setBase64Error("");
    try {
      if (!base64Input) {
        setBase64Output("");
        return;
      }
      // Handle non-latin characters properly using encodeURIComponent / unescape
      const utf8Bytes = new TextEncoder().encode(base64Input);
      let binary = "";
      for (let i = 0; i < utf8Bytes.length; i++) {
        binary += String.fromCharCode(utf8Bytes[i]);
      }
      setBase64Output(window.btoa(binary));
    } catch (err: any) {
      setBase64Error("编码失败：" + err.message);
    }
  };

  const handleBase64Decode = () => {
    setBase64Error("");
    try {
      if (!base64Output) {
        setBase64Input("");
        return;
      }
      const binary = window.atob(base64Output.trim());
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      setBase64Input(new TextDecoder().decode(bytes));
    } catch (err: any) {
      setBase64Error("解码失败：输入的字符串不是合法的 Base64。");
    }
  };

  // --- Password Generator Functions ---
  const generatePassword = () => {
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let pool = "";
    if (includeUpper) pool += uppers;
    if (includeLower) pool += lowers;
    if (includeNumbers) pool += numbers;
    if (includeSymbols) pool += symbols;

    if (!pool) {
      setGeneratedPass("请至少勾选一种字符类型！");
      return;
    }

    let password = "";
    const cryptoObj = window.crypto;
    const randomValues = new Uint32Array(passLength);
    cryptoObj.getRandomValues(randomValues);

    for (let i = 0; i < passLength; i++) {
      password += pool[randomValues[i] % pool.length];
    }
    setGeneratedPass(password);
  };

  const getPasswordStrength = () => {
    if (!generatedPass || generatedPass === "请至少勾选一种字符类型！") return { score: 0, text: "无", color: "bg-gray-200" };
    let score = 0;
    if (generatedPass.length >= 8) score += 1;
    if (generatedPass.length >= 14) score += 1;
    if (/[A-Z]/.test(generatedPass)) score += 1;
    if (/[a-z]/.test(generatedPass)) score += 1;
    if (/[0-9]/.test(generatedPass)) score += 1;
    if (/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(generatedPass)) score += 1;

    if (score <= 2) return { score, text: "弱 (易破解)", color: "bg-red-500 w-1/4" };
    if (score <= 4) return { score, text: "中等 (安全性一般)", color: "bg-amber-500 w-2/4" };
    if (score <= 5) return { score, text: "强 (高安全度)", color: "bg-blue-500 w-3/4" };
    return { score, text: "完美 (极度安全)", color: "bg-emerald-500 w-full" };
  };

  // --- Timestamp Converter Functions ---
  const convertTimestampToDate = () => {
    try {
      const parsed = parseInt(tsInput.trim());
      if (isNaN(parsed)) {
        setTsOutput("请输入合法的数字时间戳");
        return;
      }
      // Check if milliseconds (usually 13 digits)
      const isMillis = tsInput.trim().length >= 13;
      const date = new Date(isMillis ? parsed : parsed * 1000);
      if (isNaN(date.getTime())) {
        setTsOutput("无效的时间戳值");
        return;
      }
      setTsOutput(formatDateString(date));
    } catch {
      setTsOutput("转换失败");
    }
  };

  const convertDateToTimestamp = () => {
    try {
      const cleanStr = dateInput.trim().replace(/\//g, "-");
      const parsed = Date.parse(cleanStr);
      if (isNaN(parsed)) {
        setDateOutput("请输入合法的时间格式 (YYYY-MM-DD HH:mm:ss)");
        return;
      }
      setDateOutput(`秒级时间戳: ${Math.floor(parsed / 1000)}\n毫秒级时间戳: ${parsed}`);
    } catch {
      setDateOutput("转换失败");
    }
  };

  const formatDateString = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
      date.getHours()
    )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  };

  // --- Text Stats Functions ---
  const charCountWithSpaces = textInput.length;
  const charCountWithoutSpaces = textInput.replace(/\s+/g, "").length;
  const lineCount = textInput ? textInput.split("\n").length : 0;
  const wordCount = textInput ? (textInput.match(/\b\w+\b/g) || []).length : 0;

  const handleCaseChange = (mode: string) => {
    if (!textInput) return;
    if (mode === "upper") {
      setTextInput(textInput.toUpperCase());
    } else if (mode === "lower") {
      setTextInput(textInput.toLowerCase());
    } else if (mode === "snake") {
      setTextInput(
        textInput
          .replace(/([A-Z])/g, "_$1")
          .toLowerCase()
          .replace(/^_/, "")
          .replace(/\s+/g, "_")
          .replace(/_+/g, "_")
      );
    } else if (mode === "camel") {
      setTextInput(
        textInput
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
          .replace(/^[A-Z]/, (chr) => chr.toLowerCase())
      );
    } else if (mode === "kebab") {
      setTextInput(
        textInput
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase()
          .replace(/^-/, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
      );
    }
  };

  // Copy helper
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    triggerCopyFeedback();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-6 md:p-8 max-w-4xl mx-auto mb-10 overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-6 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-slate-50 text-slate-500 hover:text-indigo-600 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-150"
            title="返回导航"
          >
            <LucideIcons.ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-bold bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg">
                本地内置微应用
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {toolKey === "json" && "JSON 格式化 & 验证器"}
                {toolKey === "base64" && "Base64 编码解码器"}
                {toolKey === "password" && "随机强密码生成器"}
                {toolKey === "timestamp" && "UNIX 时间戳转换器"}
                {toolKey === "text" && "文本分析与变量格式转换"}
              </h2>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">
              所有计算与数据转换完全在您的本地浏览器进行，绝不上传至任何服务器，保障您的数据安全。
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-3.5 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
        >
          返回导航列表
        </button>
      </div>

      {/* 1. JSON FORMATTER */}
      {toolKey === "json" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor={jsonTextareaId} className="text-xs font-semibold text-slate-700">输入原始 JSON 字符串</label>
                <div className="flex gap-2">
                  <button
                    onClick={loadJsonSample}
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
                  >
                    载入示例数据
                  </button>
                  <button
                    onClick={() => {
                      setJsonInput("");
                      setJsonOutput("");
                      setJsonError("");
                    }}
                    className="text-xs font-medium text-slate-400 hover:text-red-500 cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    清空
                  </button>
                </div>
              </div>
              <textarea
                id={jsonTextareaId}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='在这里粘贴未格式化的 JSON 数据... (例如 {"a":1,"b":"hello"})'
                className="w-full h-80 p-3 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white resize-y"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold text-slate-700">处理结果</span>
                {jsonOutput && (
                  <button
                    onClick={() => handleCopyText(jsonOutput)}
                    className="text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "已复制！" : "复制代码"}
                  </button>
                )}
              </div>
              <div className="relative w-full h-80 border border-slate-200 rounded-xl bg-slate-950 font-mono text-xs overflow-auto p-4 text-emerald-400">
                {jsonOutput ? (
                  <pre className="whitespace-pre-wrap">{jsonOutput}</pre>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500 italic">
                    点击下方 “格式化” 或 “压缩” 按钮生成输出
                  </div>
                )}
              </div>
            </div>
          </div>

          {jsonError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl font-mono text-xs flex items-start gap-2 animate-pulse">
              <LucideIcons.AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">JSON 语法错误:</span> {jsonError}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleJsonFormat}
              className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-2"
            >
              <LucideIcons.CheckSquare className="w-4 h-4" />
              美化 & 格式化
            </button>
            <button
              onClick={handleJsonMinify}
              className="px-4 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-800 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-2"
            >
              <LucideIcons.Minimize2 className="w-4 h-4" />
              压缩 JSON
            </button>
          </div>
        </div>
      )}

      {/* 2. BASE64 CODEC */}
      {toolKey === "base64" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor={base64Textarea1Id} className="text-xs font-semibold text-slate-700">原始文本 (UTF-8)</label>
                <div className="flex gap-2">
                  {base64Input && (
                    <button
                      onClick={() => handleCopyText(base64Input)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      复制
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setBase64Input("");
                      setBase64Error("");
                    }}
                    className="text-xs font-medium text-slate-400 hover:text-red-500 cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    清空
                  </button>
                </div>
              </div>
              <textarea
                id={base64Textarea1Id}
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder="在此输入普通文本..."
                className="w-full h-64 p-3 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white resize-y"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor={base64Textarea2Id} className="text-xs font-semibold text-slate-700">Base64 编码文本</label>
                <div className="flex gap-2">
                  {base64Output && (
                    <button
                      onClick={() => handleCopyText(base64Output)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      复制
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setBase64Output("");
                      setBase64Error("");
                    }}
                    className="text-xs font-medium text-slate-400 hover:text-red-500 cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    清空
                  </button>
                </div>
              </div>
              <textarea
                id={base64Textarea2Id}
                value={base64Output}
                onChange={(e) => setBase64Output(e.target.value)}
                placeholder="在此输入 Base64 字符串..."
                className="w-full h-64 p-3 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white resize-y text-emerald-700 font-semibold"
              />
            </div>
          </div>

          {base64Error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl font-mono text-xs flex items-start gap-2">
              <LucideIcons.AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>{base64Error}</div>
            </div>
          )}

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleBase64Encode}
              className="px-5 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-2"
            >
              原始文本 编码为 Base64
              <LucideIcons.ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleBase64Decode}
              className="px-5 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-800 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-2"
            >
              <LucideIcons.ArrowLeft className="w-4 h-4" />
              解码 Base64 为原始文本
            </button>
          </div>
        </div>
      )}

      {/* 3. PASSWORD GENERATOR */}
      {toolKey === "password" && (
        <div className="space-y-6">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <span className="text-xs text-slate-400 block mb-1">生成的强密码</span>
              <div className="relative flex items-center">
                <input
                  type="text"
                  readOnly
                  value={generatedPass}
                  className="w-full font-mono text-lg md:text-xl font-bold bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 pr-24 focus:outline-none focus:ring-2 focus:ring-emerald-500 select-all shadow-sm"
                />
                <div className="absolute right-2 flex gap-1">
                  <button
                    onClick={generatePassword}
                    className="p-2 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="重新生成"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleCopyText(generatedPass)}
                    className="px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer shadow-sm flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "已复制" : "复制"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Password Strength */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-semibold">
              <span className="text-slate-600">密码强度评估:</span>
              <span className="text-slate-800 font-bold">{getPasswordStrength().text}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
              <div className={`h-full rounded-full transition-all duration-300 ${getPasswordStrength().color}`} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-l-2 border-emerald-500 pl-2">密码长度</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor={passLengthId} className="text-xs text-slate-500">调整字符个数 (4 - 64)</label>
                  <span className="text-sm font-bold text-slate-800">{passLength} 位</span>
                </div>
                <input
                  id={passLengthId}
                  type="range"
                  min="4"
                  max="64"
                  value={passLength}
                  onChange={(e) => {
                    setPassLength(parseInt(e.target.value));
                  }}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-800 border-l-2 border-emerald-500 pl-2">字符集选项</h3>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeUpper}
                    onChange={(e) => {
                      setIncludeUpper(e.target.checked);
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                  />
                  大写字母 (A-Z)
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeLower}
                    onChange={(e) => {
                      setIncludeLower(e.target.checked);
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                  />
                  小写字母 (a-z)
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => {
                      setIncludeNumbers(e.target.checked);
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                  />
                  数字字符 (0-9)
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => {
                      setIncludeSymbols(e.target.checked);
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                  />
                  特殊符号 (!@#$)
                </label>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={generatePassword}
              className="px-5 py-2.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              重新生成密码
            </button>
          </div>
        </div>
      )}

      {/* 4. TIMESTAMP CONVERTER */}
      {toolKey === "timestamp" && (
        <div className="space-y-6 animate-fade-in">
          {/* Ticker Banner */}
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                当前系统北京时间 (UTC+8)
              </span>
              <p className="font-mono text-lg font-bold text-slate-800 mt-1">
                {formatDateString(currentTime)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-xs text-slate-400 block text-left sm:text-right font-semibold">
                  UNIX 时间戳 (秒级)
                </span>
                <p className="font-mono text-lg font-bold text-emerald-600">
                  {Math.floor(currentTime.getTime() / 1000)}
                </p>
              </div>
              <button
                onClick={() => setTimePaused(!timePaused)}
                className={`p-2 rounded-lg border border-slate-200 transition-colors cursor-pointer ${
                  timePaused
                    ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border-emerald-200"
                    : "bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800"
                }`}
                title={timePaused ? "继续运行" : "暂停刷新"}
              >
                {timePaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stamp to date */}
            <div className="p-5 border border-slate-100 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-l-2 border-emerald-500 pl-2">
                时间戳 ➔ 北京时间
              </h3>
              <div className="space-y-2">
                <label htmlFor={timestampInputId} className="text-xs text-slate-500 block">输入时间戳 (秒级 / 毫秒级均支持)</label>
                <div className="flex gap-2">
                  <input
                    id={timestampInputId}
                    type="text"
                    value={tsInput}
                    onChange={(e) => setTsInput(e.target.value)}
                    placeholder="输入 UNIX 时间戳"
                    className="flex-1 font-mono text-sm border border-slate-200 bg-slate-50 focus:bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => setTsInput(Math.floor(Date.now() / 1000).toString())}
                    className="px-3 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
                  >
                    设为当前
                  </button>
                </div>
              </div>

              <button
                onClick={convertTimestampToDate}
                className="w-full py-2.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <ArrowLeftRight className="w-4 h-4" />
                转换
              </button>

              {tsOutput && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-semibold">转换结果 (本地北京时间)</span>
                    <button
                      onClick={() => handleCopyText(tsOutput)}
                      className="text-xs font-medium text-emerald-600 hover:underline cursor-pointer"
                    >
                      复制
                    </button>
                  </div>
                  <p className="font-mono text-sm font-bold text-slate-800">{tsOutput}</p>
                </div>
              )}
            </div>

            {/* Date to stamp */}
            <div className="p-5 border border-slate-100 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-l-2 border-emerald-500 pl-2">
                标准时间 ➔ 时间戳
              </h3>
              <div className="space-y-2">
                <label htmlFor={dateInputId} className="text-xs text-slate-500 block">
                  输入标准时间 (YYYY-MM-DD HH:mm:ss)
                </label>
                <div className="flex gap-2">
                  <input
                    id={dateInputId}
                    type="text"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                    placeholder="2026-07-03 08:40:00"
                    className="flex-1 font-mono text-sm border border-slate-200 bg-slate-50 focus:bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => {
                      const pad = (n: number) => n.toString().padStart(2, "0");
                      const now = new Date();
                      setDateInput(
                        `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
                          now.getHours()
                        )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
                      );
                    }}
                    className="px-3 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
                  >
                    当前时刻
                  </button>
                </div>
              </div>

              <button
                onClick={convertDateToTimestamp}
                className="w-full py-2.5 text-sm font-semibold bg-slate-700 hover:bg-slate-800 text-white rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <ArrowLeftRight className="w-4 h-4" />
                转换
              </button>

              {dateOutput && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-semibold">转换结果</span>
                    <button
                      onClick={() => handleCopyText(dateOutput)}
                      className="text-xs font-medium text-emerald-600 hover:underline cursor-pointer"
                    >
                      复制全部
                    </button>
                  </div>
                  <pre className="font-mono text-sm font-bold text-slate-800 whitespace-pre-line">
                    {dateOutput}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. TEXT ANALYSIS */}
      {toolKey === "text" && (
        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={textInputId} className="text-xs font-semibold text-slate-700">输入需要转换或统计的文本</label>
              {textInput && (
                <button
                  onClick={() => setTextInput("")}
                  className="text-xs font-medium text-slate-400 hover:text-red-500 cursor-pointer flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  清空
                </button>
              )}
            </div>
            <textarea
              id={textInputId}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="在此粘贴或输入任何英文、汉字、代码命名。例如：hello_world 或是 hello world 等..."
              className="w-full h-48 p-3 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white resize-y"
            />
          </div>

          {/* Quick Real-Time Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-slate-400 text-[11px] font-bold block uppercase">总字符数 (含空格)</span>
              <span className="font-mono text-lg font-bold text-slate-800">{charCountWithSpaces}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-slate-400 text-[11px] font-bold block uppercase">纯字数 (不含空格)</span>
              <span className="font-mono text-lg font-bold text-emerald-600">{charCountWithoutSpaces}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-slate-400 text-[11px] font-bold block uppercase">英文单词数 (Words)</span>
              <span className="font-mono text-lg font-bold text-slate-800">{wordCount}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-slate-400 text-[11px] font-bold block uppercase">文本总行数 (Lines)</span>
              <span className="font-mono text-lg font-bold text-slate-800">{lineCount}</span>
            </div>
          </div>

          {/* Formatting Actions */}
          <div className="pt-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              英文变量格式 & 大小写转换
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCaseChange("upper")}
                disabled={!textInput}
                className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                大写 (UPPERCASE)
              </button>
              <button
                onClick={() => handleCaseChange("lower")}
                disabled={!textInput}
                className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                小写 (lowercase)
              </button>
              <button
                onClick={() => handleCaseChange("camel")}
                disabled={!textInput}
                className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                小驼峰 (camelCase)
              </button>
              <button
                onClick={() => handleCaseChange("snake")}
                disabled={!textInput}
                className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                蛇形 (snake_case)
              </button>
              <button
                onClick={() => handleCaseChange("kebab")}
                disabled={!textInput}
                className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                短横线 (kebab-case)
              </button>
            </div>
          </div>

          {textInput && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleCopyText(textInput)}
                className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "已复制！" : "复制当前文本"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
