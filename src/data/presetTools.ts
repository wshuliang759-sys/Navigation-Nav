import { Category, Tool } from "../types";

export const categories: Category[] = [
  {
    id: "all",
    name: "全部工具",
    icon: "Grid",
    description: "浏览所有收录的工具与服务",
    color: "bg-slate-500 text-slate-500",
  },
  {
    id: "favorites",
    name: "我的收藏",
    icon: "Star",
    description: "快速访问您星标收藏的常用工具",
    color: "bg-amber-500 text-amber-500",
  },
  {
    id: "utility",
    name: "内置箱",
    icon: "Pocket",
    description: "内置无需网络、即开即用的本地实用微工具",
    color: "bg-emerald-500 text-emerald-500",
  },
  {
    id: "ai",
    name: "AI 智能",
    icon: "Sparkles",
    description: "大语言模型、AI 绘画、创意辅助与提效工具",
    color: "bg-violet-500 text-violet-500",
  },
  {
    id: "dev",
    name: "开发运维",
    icon: "Code",
    description: "代码托管、正则调试、云部署、API 工具等",
    color: "bg-blue-500 text-blue-500",
  },
  {
    id: "design",
    name: "设计视觉",
    icon: "Palette",
    description: "UI 设计、图标库、调色板、无损压缩、素材网站",
    color: "bg-pink-500 text-pink-500",
  },
  {
    id: "productivity",
    name: "效率办公",
    icon: "Briefcase",
    description: "云协作文档、学术翻译、思维导图、PDF 处理",
    color: "bg-orange-500 text-orange-500",
  },
  {
    id: "other",
    name: "其他资源",
    icon: "Compass",
    description: "网络测速、站长查询及日常趣味实用工具",
    color: "bg-teal-500 text-teal-500",
  },
];

export const presetTools: Tool[] = [
  // ==================== Built-in Offline Tools (Utility) ====================
  {
    id: "builtin-json",
    name: "JSON 格式化 & 验证",
    description: "在本地快速格式化、压缩、验证和校验 JSON 数据，支持语法高亮与折叠。",
    url: "#builtin-json",
    category: "utility",
    tags: ["本地工具", "JSON", "格式化", "开发者", "免网"],
    icon: "FileJson",
    isBuiltIn: true,
    builtInKey: "json",
    alternatives: [
      { name: "JSON Crack", url: "https://jsoncrack.com/" },
      { name: "JSON.cn", url: "https://www.json.cn/" }
    ],
    seoTraffic: { rank: 1, monthlyVisits: "本地免流", seoScore: 100 }
  },
  {
    id: "builtin-base64",
    name: "Base64 编码 & 解码",
    description: "纯本地文本转 Base64 字符串，或将 Base64 字符串解码还原为普通文本。",
    url: "#builtin-base64",
    category: "utility",
    tags: ["本地工具", "Base64", "编码", "解码", "安全"],
    icon: "Binary",
    isBuiltIn: true,
    builtInKey: "base64",
    alternatives: [
      { name: "Base64.guru", url: "https://base64.guru/" },
      { name: "站长工具Base64", url: "https://tool.chinaz.com/tools/base64.aspx" }
    ],
    seoTraffic: { rank: 2, monthlyVisits: "本地免流", seoScore: 100 }
  },
  {
    id: "builtin-password",
    name: "强密码生成器",
    description: "本地生成高强度随机密码，支持自定义长度、数字、大小写字母与特殊字符。",
    url: "#builtin-password",
    category: "utility",
    tags: ["本地工具", "密码", "安全", "随机数", "免网"],
    icon: "KeyRound",
    isBuiltIn: true,
    builtInKey: "password",
    alternatives: [
      { name: "1Password Generator", url: "https://1password.com/password-generator/" },
      { name: "Bitwarden Generator", url: "https://bitwarden.com/password-generator/" }
    ],
    seoTraffic: { rank: 3, monthlyVisits: "本地免流", seoScore: 100 }
  },
  {
    id: "builtin-timestamp",
    name: "时间戳转换器",
    description: "本地进行 UNIX 时间戳与标准北京时间 (UTC+8) 的互转，支持毫秒与秒。",
    url: "#builtin-timestamp",
    category: "utility",
    tags: ["本地工具", "时间戳", "时区", "北京时间", "Date"],
    icon: "Clock",
    isBuiltIn: true,
    builtInKey: "timestamp",
    alternatives: [
      { name: "EpochConverter", url: "https://www.epochconverter.com/" },
      { name: "时间戳在线工具", url: "https://tool.lu/timestamp/" }
    ],
    seoTraffic: { rank: 4, monthlyVisits: "本地免流", seoScore: 100 }
  },
  {
    id: "builtin-text",
    name: "文本分析 & 大小写转换",
    description: "统计字数、行数、空白字符，并支持一键转换大小写、蛇形、驼峰命名法。",
    url: "#builtin-text",
    category: "utility",
    tags: ["本地工具", "字数统计", "驼峰命名", "蛇形命名", "Text"],
    icon: "FileText",
    isBuiltIn: true,
    builtInKey: "text",
    alternatives: [
      { name: "WordCounter", url: "https://wordcounter.net/" },
      { name: "ConvertCase", url: "https://convertcase.net/" }
    ],
    seoTraffic: { rank: 5, monthlyVisits: "本地免流", seoScore: 100 }
  },

  // ==================== AI 智能 (AI) ====================
  {
    id: "ai-studio",
    name: "Google AI Studio",
    description: "谷歌官方提供的零成本、高并发 Gemini API 原型开发与密钥申请工作台。",
    url: "https://aistudio.google.com/",
    category: "ai",
    tags: ["Google", "Gemini", "API", "免费额度", "AI 开发"],
    icon: "Cpu",
    alternatives: [
      { name: "OpenAI Platform", url: "https://platform.openai.com/" },
      { name: "DeepSeek API", url: "https://platform.deepseek.com/" }
    ],
    seoTraffic: { rank: 1250, monthlyVisits: "12.4M", seoScore: 94 }
  },
  {
    id: "ai-gemini",
    name: "Gemini AI",
    description: "谷歌新一代原生多模态大模型对话服务，具备优秀的音视频、代码与长文本处理能力。",
    url: "https://gemini.google.com/",
    category: "ai",
    tags: ["谷歌", "Gemini", "大模型", "多模态"],
    icon: "Sparkles",
    alternatives: [
      { name: "ChatGPT", url: "https://chatgpt.com/" },
      { name: "Claude", url: "https://claude.ai/" }
    ],
    seoTraffic: { rank: 110, monthlyVisits: "210M", seoScore: 96 }
  },
  {
    id: "ai-chatgpt",
    name: "ChatGPT",
    description: "OpenAI 旗下的划时代大语言模型对话，提供智能写作、编程和日常答疑支持。",
    url: "https://chatgpt.com/",
    category: "ai",
    tags: ["OpenAI", "GPT-4o", "对话", "写作"],
    icon: "MessageSquare",
    alternatives: [
      { name: "Claude", url: "https://claude.ai/" },
      { name: "Gemini AI", url: "https://gemini.google.com/" }
    ],
    seoTraffic: { rank: 12, monthlyVisits: "2.4B", seoScore: 98 }
  },
  {
    id: "ai-claude",
    name: "Claude AI",
    description: "Anthropic 开发的高智商大语言模型，在代码生成、逻辑推理与长文分析中居于顶尖水平。",
    url: "https://claude.ai/",
    category: "ai",
    tags: ["Anthropic", "Claude-3.5", "代码", "学术"],
    icon: "Brain",
    alternatives: [
      { name: "ChatGPT", url: "https://chatgpt.com/" },
      { name: "DeepSeek", url: "https://www.deepseek.com/" }
    ],
    seoTraffic: { rank: 230, monthlyVisits: "85M", seoScore: 95 }
  },
  {
    id: "ai-deepseek",
    name: "DeepSeek 深度求索",
    description: "国内顶级开源大模型，以极高的性价比和强大推理、数学、编程水平席卷全球。",
    url: "https://www.deepseek.com/",
    category: "ai",
    tags: ["国产黑马", "深度求索", "开源", "推理模型"],
    icon: "Compass",
    alternatives: [
      { name: "Kimi Chat", url: "https://kimi.moonshot.cn/" },
      { name: "Claude AI", url: "https://claude.ai/" }
    ],
    seoTraffic: { rank: 310, monthlyVisits: "62M", seoScore: 92 }
  },
  {
    id: "ai-kimi",
    name: "Kimi Chat",
    description: "月之暗面推出的超长文本 AI 助手，擅长分析数十万字论文、文档、财报与复杂长链接。",
    url: "https://kimi.moonshot.cn/",
    category: "ai",
    tags: ["长文本", "月之暗面", "文档阅读", "联网搜索"],
    icon: "FileText",
    alternatives: [
      { name: "DeepSeek", url: "https://www.deepseek.com/" },
      { name: "Kling AI", url: "https://klingai.com/" }
    ],
    seoTraffic: { rank: 890, monthlyVisits: "18.5M", seoScore: 89 }
  },
  {
    id: "ai-v0",
    name: "v0.dev",
    description: "Vercel 推出的自然语言 UI 生成器，根据描述直接输出生产级 React/Tailwind/Shadcn 代码。",
    url: "https://v0.dev/",
    category: "ai",
    tags: ["UI生成", "Vercel", "前端", "React", "Tailwind"],
    icon: "Monitor",
    alternatives: [
      { name: "Lovable.dev", url: "https://lovable.dev/" },
      { name: "Bolt.new", url: "https://bolt.new/" }
    ],
    seoTraffic: { rank: 1800, monthlyVisits: "9.2M", seoScore: 91 }
  },
  {
    id: "ai-midjourney",
    name: "Midjourney",
    description: "当前行业最顶尖的写实风格与艺术创意 AI 图像生成工具，支持 Discord 社区生态。",
    url: "https://www.midjourney.com/",
    category: "ai",
    tags: ["AI绘图", "艺术", "设计"],
    icon: "Image",
    alternatives: [
      { name: "Leonardo.ai", url: "https://leonardo.ai/" },
      { name: "Stable Diffusion", url: "https://stability.ai/" }
    ],
    seoTraffic: { rank: 450, monthlyVisits: "42M", seoScore: 93 }
  },
  {
    id: "ai-huggingface",
    name: "Hugging Face",
    description: "全球最大的开源 AI/机器学习模型、数据集以及 Space 展示应用的集聚托管平台。",
    url: "https://huggingface.co/",
    category: "ai",
    tags: ["开源社区", "机器学习", "数据集", "Transformer"],
    icon: "Globe",
    alternatives: [
      { name: "Replicate", url: "https://replicate.com/" },
      { name: "ModelScope", url: "https://modelscope.cn/" }
    ],
    seoTraffic: { rank: 520, monthlyVisits: "38M", seoScore: 94 }
  },
  {
    id: "ai-replicate",
    name: "Replicate",
    description: "通过云端 API 一键运行、微调及托管各种开源 AI 大模型，极速构建 AI 驱动的应用。",
    url: "https://replicate.com/",
    category: "ai",
    tags: ["AI API", "云端推理", "开源模型", "Llama"],
    icon: "Terminal",
    alternatives: [
      { name: "Hugging Face", url: "https://huggingface.co/" },
      { name: "Together AI", url: "https://www.together.ai/" }
    ],
    seoTraffic: { rank: 2400, monthlyVisits: "6.8M", seoScore: 90 }
  },
  {
    id: "ai-phind",
    name: "Phind AI",
    description: "专为程序员量身定制的智能搜索引擎，直接回答技术方案并附带最新代码示例与出处。",
    url: "https://www.phind.com/",
    category: "ai",
    tags: ["AI搜索", "编程助手", "开发者必备"],
    icon: "SearchCode",
    alternatives: [
      { name: "Perplexity", url: "https://www.perplexity.ai/" },
      { name: "Devv.ai", url: "https://devv.ai/" }
    ],
    seoTraffic: { rank: 4800, monthlyVisits: "3.4M", seoScore: 88 }
  },
  {
    id: "ai-perplexity",
    name: "Perplexity AI",
    description: "业内顶尖的对话式多引擎 AI 搜索，秒级整合全球网页并提炼给出结构化的精准学术报告。",
    url: "https://www.perplexity.ai/",
    category: "ai",
    tags: ["AI搜索", "知识库", "学术必备", "答案库"],
    icon: "Search",
    alternatives: [
      { name: "Phind", url: "https://www.phind.com/" },
      { name: "Genspark", url: "https://www.genspark.ai/" }
    ],
    seoTraffic: { rank: 410, monthlyVisits: "46M", seoScore: 94 }
  },
  {
    id: "ai-leonardo",
    name: "Leonardo.ai",
    description: "高品质 3D 与角色创意绘图辅助平台，内置精调 SDXL 模型与实时高像素画布生成器。",
    url: "https://leonardo.ai/",
    category: "ai",
    tags: ["AI绘图", "游戏资产", "模型训练", "创意设计"],
    icon: "Palette",
    alternatives: [
      { name: "Midjourney", url: "https://www.midjourney.com/" },
      { name: "SeaArt", url: "https://www.seaart.ai/" }
    ],
    seoTraffic: { rank: 1150, monthlyVisits: "14.2M", seoScore: 91 }
  },
  {
    id: "ai-coze",
    name: "Coze 扣子",
    description: "字节跳动出品的下一代 AI 智能体 (Bot) 快速开发平台，支持跨微信、飞书等多渠道发布。",
    url: "https://www.coze.cn/",
    category: "ai",
    tags: ["智能体", "Bot开发", "字节跳动", "低代码"],
    icon: "Workflow",
    alternatives: [
      { name: "Dify.ai", url: "https://dify.ai/" },
      { name: "Flowise", url: "https://flowiseai.com/" }
    ],
    seoTraffic: { rank: 1650, monthlyVisits: "10.5M", seoScore: 90 }
  },
  {
    id: "ai-dify",
    name: "Dify.ai",
    description: "开源好用的 LLMOps 平台，支持可视化工作流编排、RAG 向量检索与极速 Agent 搭建。",
    url: "https://dify.ai/",
    category: "ai",
    tags: ["LLMOps", "智能体", "开源RAG", "开发者工作台"],
    icon: "GitFork",
    alternatives: [
      { name: "Coze", url: "https://www.coze.cn/" },
      { name: "FastGPT", url: "https://fastgpt.in/" }
    ],
    seoTraffic: { rank: 2900, monthlyVisits: "5.4M", seoScore: 89 }
  },
  {
    id: "ai-cursor",
    name: "Cursor AI",
    description: "当前最受欢迎的 AI 辅助代码编辑器，原生深度继承 GPT-4o 与 Claude，支持自动全局编程。",
    url: "https://www.cursor.com/",
    category: "ai",
    tags: ["AI编辑器", "VSCode分支", "自动编码", "高频提效"],
    icon: "Code",
    alternatives: [
      { name: "VS Code", url: "https://code.visualstudio.com/" },
      { name: "Windsurf", url: "https://codeium.com/windsurf" }
    ],
    seoTraffic: { rank: 1400, monthlyVisits: "11.2M", seoScore: 92 }
  },
  {
    id: "ai-suno",
    name: "Suno AI",
    description: "全球领先的 AI 音乐词曲编奏一体化生成服务，仅需一行文字即可自动生成广播级动听歌曲。",
    url: "https://suno.com/",
    category: "ai",
    tags: ["AI音乐", "声音生成", "作词作曲", "创意工具"],
    icon: "Music",
    alternatives: [
      { name: "Udio AI", url: "https://www.udio.com/" },
      { name: "Mubert", url: "https://mubert.com/" }
    ],
    seoTraffic: { rank: 980, monthlyVisits: "17.1M", seoScore: 93 }
  },
  {
    id: "ai-udio",
    name: "Udio Music",
    description: "另一款殿堂级高品质 AI 音频与原创歌谣生成系统，支持精细化音轨人声分轨与歌词编辑。",
    url: "https://www.udio.com/",
    category: "ai",
    tags: ["AI音乐", "原声大碟", "创意音乐", "高解析音频"],
    icon: "Headphones",
    alternatives: [
      { name: "Suno AI", url: "https://suno.com/" },
      { name: "Spleeter", url: "https://github.com/deezer/spleeter" }
    ],
    seoTraffic: { rank: 2500, monthlyVisits: "6.5M", seoScore: 88 }
  },
  {
    id: "ai-luma",
    name: "Luma Dream Machine",
    description: "新一代超逼真 3D 物理交互与 AI 电影级视频生成模型，提供惊艳的光影表现力与动作连贯性。",
    url: "https://lumalabs.ai/dream-machine",
    category: "ai",
    tags: ["AI视频", "电影质感", "多模态", "物理交互"],
    icon: "Film",
    alternatives: [
      { name: "Runway Gen-3", url: "https://runwayml.com/" },
      { name: "Sora", url: "https://openai.com/sora" }
    ],
    seoTraffic: { rank: 1900, monthlyVisits: "8.9M", seoScore: 91 }
  },

  // ==================== 开发运维 (Dev) ====================
  {
    id: "dev-github",
    name: "GitHub",
    description: "全球最大的开源代码托管与协作平台，提供完善的 CI/CD、Issues 与 GitHub Actions。",
    url: "https://github.com/",
    category: "dev",
    tags: ["代码托管", "Git", "开源", "协作"],
    icon: "Github",
    alternatives: [
      { name: "GitLab", url: "https://gitlab.com/" },
      { name: "Gitee", url: "https://gitee.com/" }
    ],
    seoTraffic: { rank: 40, monthlyVisits: "450M", seoScore: 99 }
  },
  {
    id: "dev-stackoverflow",
    name: "Stack Overflow",
    description: "程序员必备的技术问答社区，拥有海量现实业务开发错误与架构设计的经典解答。",
    url: "https://stackoverflow.com/",
    category: "dev",
    tags: ["技术社区", "问答", "报错排错"],
    icon: "HelpCircle",
    alternatives: [
      { name: "Reddit Programming", url: "https://www.reddit.com/r/programming/" },
      { name: "SegmentFault", url: "https://segmentfault.com/" }
    ],
    seoTraffic: { rank: 150, monthlyVisits: "180M", seoScore: 97 }
  },
  {
    id: "dev-vercel",
    name: "Vercel",
    description: "针对前端框架极佳的云部署与托管平台，完美适配 Next.js 并支持零配置持续部署。",
    url: "https://vercel.com/",
    category: "dev",
    tags: ["前端部署", "Serverless", "Next.js", "零配置"],
    icon: "Cloud",
    alternatives: [
      { name: "Netlify", url: "https://www.netlify.com/" },
      { name: "Render", url: "https://render.com/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "15M", seoScore: 95 }
  },
  {
    id: "dev-regex101",
    name: "Regex101",
    description: "超级强大的正则表达式在线测试工具，支持解释步骤、调试、匹配和自动生成各语言代码。",
    url: "https://regex101.com/",
    category: "dev",
    tags: ["正则", "调试", "匹配", "正则解释"],
    icon: "CodeXml",
    alternatives: [
      { name: "Regexr", url: "https://regexr.com/" },
      { name: "Regexper", url: "https://regexper.com/" }
    ],
    seoTraffic: { rank: 2800, monthlyVisits: "6.2M", seoScore: 93 }
  },
  {
    id: "dev-caniuse",
    name: "Can I Use",
    description: "最权威的 Web 前端标准在各种浏览器和版本上的兼容性对照表，提供详尽的百分比统计。",
    url: "https://caniuse.com/",
    category: "dev",
    tags: ["兼容性", "CSS", "HTML5", "浏览器支持"],
    icon: "Eye",
    alternatives: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { name: "HTML5 Please", url: "https://html5please.com/" }
    ],
    seoTraffic: { rank: 3500, monthlyVisits: "4.8M", seoScore: 94 }
  },
  {
    id: "dev-carbon",
    name: "Carbon Code Snippets",
    description: "将代码片段转换为具有极高颜值、带各种主题毛玻璃阴影的精美代码图片分享器。",
    url: "https://carbon.now.sh/",
    category: "dev",
    tags: ["美化", "代码图片", "分享", "高颜值"],
    icon: "FileCode",
    alternatives: [
      { name: "Ray.so", url: "https://ray.so/" },
      { name: "CodeKeep", url: "https://codekeep.io/screenshot" }
    ],
    seoTraffic: { rank: 9800, monthlyVisits: "1.2M", seoScore: 89 }
  },
  {
    id: "dev-tinypng",
    name: "TinyPNG",
    description: "行业顶尖的智能有损压缩，可在几乎不降低视觉品质的前提下极大减小 Web 图像文件体积。",
    url: "https://tinypng.com/",
    category: "dev",
    tags: ["图像压缩", "Web优化", "PNG", "JPEG"],
    icon: "Zap",
    alternatives: [
      { name: "Docsmall", url: "https://docsmall.com/" },
      { name: "Squoosh", url: "https://squoosh.app/" }
    ],
    seoTraffic: { rank: 2100, monthlyVisits: "8.1M", seoScore: 92 }
  },
  {
    id: "dev-devdocs",
    name: "DevDocs API",
    description: "将所有主流开发语言、框架与库的官方文档集成在一个支持离线和闪电搜索的极简界面中。",
    url: "https://devdocs.io/",
    category: "dev",
    tags: ["官方文档", "离线检索", "API参考", "极速"],
    icon: "BookOpen",
    alternatives: [
      { name: "Dash (macOS)", url: "https://kapeli.com/dash" },
      { name: "Zeal (Windows)", url: "https://zealdocs.org/" }
    ],
    seoTraffic: { rank: 4100, monthlyVisits: "4.1M", seoScore: 95 }
  },
  {
    id: "dev-dnschecker",
    name: "DNS Checker",
    description: "在线检查全球各个国家/地区的 DNS 节点对指定域名的解析状态与 IP 传播状态。",
    url: "https://dnschecker.org/",
    category: "dev",
    tags: ["域名解析", "运维", "全球节点", "网络"],
    icon: "Network",
    alternatives: [
      { name: "IntoDNS", url: "https://intodns.com/" },
      { name: "站长Ping", url: "https://ping.chinaz.com/" }
    ],
    seoTraffic: { rank: 3200, monthlyVisits: "5.2M", seoScore: 91 }
  },
  {
    id: "dev-bootcdn",
    name: "BootCDN",
    description: "国内稳定且高可用、同步源自 cdnjs 的免费开源前端公共库 CDN 加速服务。",
    url: "https://www.bootcdn.cn/",
    category: "dev",
    tags: ["国内加速", "开源静态库", "CDN"],
    icon: "FolderGit",
    alternatives: [
      { name: "Staticfile CDN", url: "https://www.staticfile.org/" },
      { name: "jsDelivr", url: "https://www.jsdelivr.com/" }
    ],
    seoTraffic: { rank: 4500, monthlyVisits: "3.9M", seoScore: 87 }
  },
  {
    id: "dev-gitlab",
    name: "GitLab",
    description: "一站式 DevOps 软件生命周期管理平台，自托管企业私有 Git 仓库与代码库的最佳选择。",
    url: "https://gitlab.com/",
    category: "dev",
    tags: ["代码托管", "CI/CD", "项目管理", "自托管"],
    icon: "GitBranch",
    alternatives: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "Bitbucket", url: "https://bitbucket.org/" }
    ],
    seoTraffic: { rank: 350, monthlyVisits: "55M", seoScore: 96 }
  },
  {
    id: "dev-postman",
    name: "Postman API Platform",
    description: "功能全面的 Web 接口测试及自动化 Mock 系统，赋能全球前后端团队完成高性能 API 协同开发。",
    url: "https://www.postman.com/",
    category: "dev",
    tags: ["接口测试", "API文档", "Mock数据", "协同开发"],
    icon: "Radio",
    alternatives: [
      { name: "Hoppscotch", url: "https://hoppscotch.io/" },
      { name: "Apifox", url: "https://apifox.com/" }
    ],
    seoTraffic: { rank: 820, monthlyVisits: "21M", seoScore: 94 }
  },
  {
    id: "dev-hoppscotch",
    name: "Hoppscotch",
    description: "轻量、美观、开源、完全基于浏览器的免费 API 调试利器，省去客户端繁重下载。",
    url: "https://hoppscotch.io/",
    category: "dev",
    tags: ["轻量API", "开源调试", "Web端测试", "Hoppscotch"],
    icon: "CheckSquare",
    alternatives: [
      { name: "Postman", url: "https://www.postman.com/" },
      { name: "Insomnia", url: "https://insomnia.rest/" }
    ],
    seoTraffic: { rank: 6400, monthlyVisits: "2.1M", seoScore: 91 }
  },
  {
    id: "dev-render",
    name: "Render Platform",
    description: "极其现代化且稳定的零维护 Web 服务与静态页面云端发布托管服务，备受 Node/Python 欢迎。",
    url: "https://render.com/",
    category: "dev",
    tags: ["云托管", "Docker部署", "自动构建", "免费数据库"],
    icon: "Cpu",
    alternatives: [
      { name: "Vercel", url: "https://vercel.com/" },
      { name: "Railway", url: "https://railway.app/" }
    ],
    seoTraffic: { rank: 4200, monthlyVisits: "4.2M", seoScore: 90 }
  },
  {
    id: "dev-stackblitz",
    name: "StackBlitz",
    description: "利用 WebContainers 革命性技术在浏览器中直接启动运行 Node.js 完整后台与前后端代码。",
    url: "https://stackblitz.com/",
    category: "dev",
    tags: ["WebContainer", "在线IDE", "一键闪电启动", "Node在线运行"],
    icon: "SquareTerminal",
    alternatives: [
      { name: "CodeSandbox", url: "https://codesandbox.io/" },
      { name: "StackBlitz Web", url: "https://stackblitz.com/" }
    ],
    seoTraffic: { rank: 3100, monthlyVisits: "5.8M", seoScore: 93 }
  },
  {
    id: "dev-codesandbox",
    name: "CodeSandbox",
    description: "全功能的实时网页开发沙盒，提供丰富的模板快速尝试 React、Vue、Svelte 与 Docker 应用。",
    url: "https://codesandbox.io/",
    category: "dev",
    tags: ["在线编程", "沙盒调试", "前端组件分享", "团队远程看代码"],
    icon: "Box",
    alternatives: [
      { name: "StackBlitz", url: "https://stackblitz.com/" },
      { name: "CodePen", url: "https://codepen.io/" }
    ],
    seoTraffic: { rank: 2600, monthlyVisits: "6.9M", seoScore: 92 }
  },
  {
    id: "dev-jwt",
    name: "JWT.io",
    description: "安全解析、解密、校对并验证您的 JSON Web Token 令牌属性和签名正确性。",
    url: "https://jwt.io/",
    category: "dev",
    tags: ["JWT", "网络鉴权", "Token解析", "解密校验"],
    icon: "ShieldAlert",
    alternatives: [
      { name: "TokenDev", url: "https://tokendev.com/" },
      { name: "内置Base64工具", url: "#builtin-base64" }
    ],
    seoTraffic: { rank: 4900, monthlyVisits: "3.2M", seoScore: 94 }
  },
  {
    id: "dev-dbdiagram",
    name: "dbdiagram.io",
    description: "使用纯文本声明式 DSL 语法快速生成、绘制、导出精美的数据库 ER 模型结构实体图。",
    url: "https://dbdiagram.io/",
    category: "dev",
    tags: ["ER模型", "数据库设计", "SQL导出", "可视化"],
    icon: "Database",
    alternatives: [
      { name: "Draw.io", url: "https://draw.io/" },
      { name: "ERD Lab", url: "https://erdlab.com/" }
    ],
    seoTraffic: { rank: 6900, monthlyVisits: "1.9M", seoScore: 89 }
  },
  {
    id: "dev-jsoncrack",
    name: "JSON Crack",
    description: "以极其宏观震撼的互动三维/二维节点关系树形图的形式，全景可视化超大 JSON 复杂结构。",
    url: "https://jsoncrack.com/",
    category: "dev",
    tags: ["JSON可视化", "数据结构", "调试工具", "炫酷"],
    icon: "Eye",
    alternatives: [
      { name: "内置JSON工具", url: "#builtin-json" },
      { name: "JSON Hero", url: "https://jsonhero.io/" }
    ],
    seoTraffic: { rank: 8500, monthlyVisits: "1.5M", seoScore: 91 }
  },
  {
    id: "dev-raycast",
    name: "Raycast Launcher",
    description: "新一代专为极致系统控和程序员打造的 macOS 全局指令面板与全功能插件生态中心。",
    url: "https://www.raycast.com/",
    category: "dev",
    tags: ["macOS推荐", "启动器", "全栈提效", "开发者精选"],
    icon: "Terminal",
    alternatives: [
      { name: "Alfred", url: "https://www.alfredapp.com/" },
      { name: "HapiOS", url: "https://hapios.com/" }
    ],
    seoTraffic: { rank: 3800, monthlyVisits: "4.5M", seoScore: 93 }
  },
  {
    id: "dev-cloudflare",
    name: "Cloudflare",
    description: "全球最大的边缘网络与网站守护盾牌，提供零付费的顶尖全球 CDN 加速与权威域名抗 DDOS 解析。",
    url: "https://www.cloudflare.com/",
    category: "dev",
    tags: ["域名DNS", "CDN", "防CC攻击", "免费SSL"],
    icon: "Shield",
    alternatives: [
      { name: "DNS Checker", url: "https://dnschecker.org/" },
      { name: "阿里云DNS", url: "https://www.aliyun.com/" }
    ],
    seoTraffic: { rank: 180, monthlyVisits: "115M", seoScore: 98 }
  },
  {
    id: "dev-sqlite",
    name: "SQLite Viewer",
    description: "无需本地数据库软件，拖拽即可在浏览器端对 SQLite 格式的数据文件进行离线检索与 SQL 执行。",
    url: "https://sqliteviewer.app/",
    category: "dev",
    tags: ["SQLite", "本地解析", "数据库查看", "免费离线"],
    icon: "Database",
    alternatives: [
      { name: "DB Browser for SQLite", url: "https://sqlitebrowser.org/" },
      { name: "SQLite Online", url: "https://sqliteonline.com/" }
    ],
    seoTraffic: { rank: 12000, monthlyVisits: "0.8M", seoScore: 86 }
  },

  // ==================== 设计视觉 (Design) ====================
  {
    id: "design-figma",
    name: "Figma",
    description: "基于浏览器的顶尖跨平台协同 UI/UX 设计工具，具备丰富的插件生态与开发者对接模式。",
    url: "https://www.figma.com/",
    category: "design",
    tags: ["UI设计", "原型图", "团队协作", "矢量图"],
    icon: "Layers",
    alternatives: [
      { name: "Sketch", url: "https://www.sketch.com/" },
      { name: "Pixso", url: "https://pixso.cn/" }
    ],
    seoTraffic: { rank: 140, monthlyVisits: "120M", seoScore: 98 }
  },
  {
    id: "design-dribbble",
    name: "Dribbble",
    description: "全球顶尖视觉设计师的灵感分享与社交平台，代表了最前沿、最高水平的 UI 潮流风向标。",
    url: "https://dribbble.com/",
    category: "design",
    tags: ["设计灵感", "UI视觉", "插画", "动效"],
    icon: "Heart",
    alternatives: [
      { name: "Behance", url: "https://www.behance.net/" },
      { name: "Pinterest", url: "https://www.pinterest.com/" }
    ],
    seoTraffic: { rank: 620, monthlyVisits: "31M", seoScore: 95 }
  },
  {
    id: "design-behance",
    name: "Behance",
    description: "Adobe 旗下大作汇集的全球创意设计师作品集平台，包含品牌、插画、工业设计、摄影等。",
    url: "https://www.behance.net/",
    category: "design",
    tags: ["作品集", "Adobe", "全类别设计"],
    icon: "Award",
    alternatives: [
      { name: "Dribbble", url: "https://dribbble.com/" },
      { name: "站酷 (Zcool)", url: "https://www.zcool.com.cn/" }
    ],
    seoTraffic: { rank: 540, monthlyVisits: "36M", seoScore: 96 }
  },
  {
    id: "design-lucide",
    name: "Lucide Icons",
    description: "极简精美的开源图标库，完全兼容 React / Vue 并且完美适应 Tailwind CSS 配置。",
    url: "https://lucide.dev/",
    category: "design",
    tags: ["开源图标", "SVG", "极简", "React图标"],
    icon: "Smile",
    alternatives: [
      { name: "FontAwesome", url: "https://fontawesome.com/" },
      { name: "Iconify", url: "https://iconify.design/" }
    ],
    seoTraffic: { rank: 5600, monthlyVisits: "2.8M", seoScore: 92 }
  },
  {
    id: "design-unsplash",
    name: "Unsplash",
    description: "全球最著名的免费、无版权、可商用高清摄影图片库，全站照片均可免费下载与任意修改。",
    url: "https://unsplash.com/",
    category: "design",
    tags: ["无版权图片", "高清壁纸", "商用摄影"],
    icon: "Camera",
    alternatives: [
      { name: "Pexels", url: "https://www.pexels.com/" },
      { name: "Pixabay", url: "https://pixabay.com/" }
    ],
    seoTraffic: { rank: 320, monthlyVisits: "54M", seoScore: 97 }
  },
  {
    id: "design-coolors",
    name: "Coolors配色 generator",
    description: "支持一键敲击空格自动生成高品质协调色板、色彩搭配与渐变色预览的实用调色工具。",
    url: "https://coolors.co/",
    category: "design",
    tags: ["配色方案", "色板", "渐变色", "一键生成"],
    icon: "Paintbrush",
    alternatives: [
      { name: "Adobe Color", url: "https://color.adobe.com/" },
      { name: "Color Hunt", url: "https://colorhunt.co/" }
    ],
    seoTraffic: { rank: 4300, monthlyVisits: "4.1M", seoScore: 91 }
  },
  {
    id: "design-tailwindcss",
    name: "Tailwind Play",
    description: "Tailwind CSS 官方在线演练沙盒，支持实时编译、配置修改、预览以及前沿特性分享。",
    url: "https://play.tailwindcss.com/",
    category: "design",
    tags: ["Tailwind", "CSS沙盒", "前端调试"],
    icon: "Code",
    alternatives: [
      { name: "CodePen", url: "https://codepen.io/" },
      { name: "JSFiddle", url: "https://jsfiddle.net/" }
    ],
    seoTraffic: { rank: 3800, monthlyVisits: "4.9M", seoScore: 93 }
  },
  {
    id: "design-removebg",
    name: "Remove.bg",
    description: "一键全自动抠图，能在短短几秒内精确剥离人物、商品、背景，保留发丝级细节。",
    url: "https://www.remove.bg/",
    category: "design",
    tags: ["一键抠图", "背景擦除", "人像扣图"],
    icon: "Scissors",
    alternatives: [
      { name: "Photoroom", url: "https://www.photoroom.com/" },
      { name: "稿定设计抠图", url: "https://www.gaoding.com/koutu" }
    ],
    seoTraffic: { rank: 710, monthlyVisits: "28M", seoScore: 94 }
  },
  {
    id: "design-canva",
    name: "Canva 可画",
    description: "全球知名的大众级拖拽式设计平台，内置数百万原创设计模板、海报宣传册、演示文稿极速出图。",
    url: "https://www.canva.cn/",
    category: "design",
    tags: ["极速设计", "海报模板", "国风商用", "小白作图"],
    icon: "Image",
    alternatives: [
      { name: "稿定设计", url: "https://www.gaoding.com/" },
      { name: "美图秀秀网页版", url: "https://pc.meitu.com/" }
    ],
    seoTraffic: { rank: 220, monthlyVisits: "95M", seoScore: 96 }
  },
  {
    id: "design-iconify",
    name: "Iconify",
    description: "提供一万多个开源图标集的超全大一统图标搜索引擎，支持任意导出 SVG / Vue / JSX 格式代码。",
    url: "https://iconify.design/",
    category: "design",
    tags: ["大一统图标", "CSS图标", "设计资源", "全格式兼容"],
    icon: "Smile",
    alternatives: [
      { name: "Lucide Icons", url: "https://lucide.dev/" },
      { name: "Iconfont 阿里巴巴", url: "https://www.iconfont.cn/" }
    ],
    seoTraffic: { rank: 6100, monthlyVisits: "2.3M", seoScore: 90 }
  },
  {
    id: "design-fontspace",
    name: "FontSpace",
    description: "海量免费可商用英文字体下载站，拥有高达 10 万种精美创意、古典、科幻风字体预览。",
    url: "https://www.fontspace.com/",
    category: "design",
    tags: ["商用字体", "英文字体", "排版字形", "免费下载"],
    icon: "Font",
    alternatives: [
      { name: "Google Fonts", url: "https://fonts.google.com/" },
      { name: "Dafont", url: "https://www.dafont.com/" }
    ],
    seoTraffic: { rank: 2900, monthlyVisits: "5.9M", seoScore: 92 }
  },
  {
    id: "design-googlefonts",
    name: "Google Fonts",
    description: "谷歌官方开放免费中英文开源字体集，包含大名鼎鼎的 Noto Sans、Inter、Roboto 完美渲染前端排版。",
    url: "https://fonts.google.com/",
    category: "design",
    tags: ["开源字形", "网络字体", "谷歌出品", "中英字型"],
    icon: "Font",
    alternatives: [
      { name: "FontSpace", url: "https://www.fontspace.com/" },
      { name: "Typekit Adobe", url: "https://fonts.adobe.com/" }
    ],
    seoTraffic: { rank: 320, monthlyVisits: "51M", seoScore: 98 }
  },
  {
    id: "design-flaticon",
    name: "Flaticon",
    description: "全网公认的高清扁平矢量小图标分享数据库，提供超千万的单色、渐变与拟物主题图标。",
    url: "https://www.flaticon.com/",
    category: "design",
    tags: ["扁平图标", "彩色PNG", "插画素材", "UI点缀"],
    icon: "Grid",
    alternatives: [
      { name: "Iconify", url: "https://iconify.design/" },
      { name: "Icons8", url: "https://icons8.com/" }
    ],
    seoTraffic: { rank: 410, monthlyVisits: "45M", seoScore: 94 }
  },
  {
    id: "design-lottiefiles",
    name: "LottieFiles Animations",
    description: "全球领先的 Lottie 轻量级矢量交互动画托管与优化社区，为 APP 和网页带来生动交互感。",
    url: "https://lottiefiles.com/",
    category: "design",
    tags: ["矢量动画", "JSON动效", "轻量GIF", "前端加载"],
    icon: "Video",
    alternatives: [
      { name: "Rive App", url: "https://rive.app/" },
      { name: "Lordicon", url: "https://lordicon.com/" }
    ],
    seoTraffic: { rank: 4200, monthlyVisits: "4.3M", seoScore: 90 }
  },
  {
    id: "design-freepik",
    name: "Freepik Creative Assets",
    description: "全球大型商业平面素材数据库，包含大量免版税照片、矢量底图、PSD 分层文件及幻灯片背景。",
    url: "https://www.freepik.com/",
    category: "design",
    tags: ["平面素材", "PSD模板", "商业设计", "无版税插画"],
    icon: "Layers",
    alternatives: [
      { name: "Vecteezy", url: "https://www.vecteezy.com/" },
      { name: "Pngtree", url: "https://pngtree.com/" }
    ],
    seoTraffic: { rank: 250, monthlyVisits: "82M", seoScore: 96 }
  },
  {
    id: "design-pixabay",
    name: "Pixabay Free Media",
    description: "提供近千万张可用于任何商业领域的免费照片、短视频、背景音轨与矢量剪贴画库。",
    url: "https://pixabay.com/",
    category: "design",
    tags: ["无版权大图", "4K短视频", "免费音乐", "商用素材"],
    icon: "Camera",
    alternatives: [
      { name: "Unsplash", url: "https://unsplash.com/" },
      { name: "Pexels", url: "https://www.pexels.com/" }
    ],
    seoTraffic: { rank: 480, monthlyVisits: "39M", seoScore: 95 }
  },
  {
    id: "design-photopea",
    name: "Photopea",
    description: "无需注册安装、网页直接打开运行的 Photoshop 极高保真度替代品，支持 PSD, Sketch 和 XD 格式。",
    url: "https://www.photopea.com/",
    category: "design",
    tags: ["在线PS", "网页P图", "无缝解析PSD", "完全免费"],
    icon: "Scissors",
    alternatives: [
      { name: "Pixlr", url: "https://pixlr.com/" },
      { name: "Canva", url: "https://www.canva.com/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "16.5M", seoScore: 93 }
  },
  {
    id: "design-sketch",
    name: "Sketch",
    description: "苹果生态经典的老牌矢量 UI 原型设计先驱，专注于数字产品设计流程的高效构建。",
    url: "https://www.sketch.com/",
    category: "design",
    tags: ["UI设计", "苹果生态", "矢量原型", "插件扩展"],
    icon: "Layers",
    alternatives: [
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Adobe XD", url: "https://www.adobe.com/products/xd.html" }
    ],
    seoTraffic: { rank: 5800, monthlyVisits: "2.5M", seoScore: 92 }
  },

  // ==================== 效率办公 (Productivity) ====================
  {
    id: "prod-notion",
    name: "Notion",
    description: "将笔记、Wiki、知识库、项目看板和多维表格融为一体的高自由度生产力工具箱。",
    url: "https://www.notion.so/",
    category: "productivity",
    tags: ["双向链接", "知识库", "看板", "个人管理"],
    icon: "FileText",
    alternatives: [
      { name: "Obsidian", url: "https://obsidian.md/" },
      { name: "Wolai 我来", url: "https://www.wolai.com/" }
    ],
    seoTraffic: { rank: 180, monthlyVisits: "160M", seoScore: 97 }
  },
  {
    id: "prod-deepl",
    name: "DeepL 翻译",
    description: "被公认为全球最准确、语境最通顺、译文最少机器腔调的顶级学术与外语翻译引擎。",
    url: "https://www.deepl.com/",
    category: "productivity",
    tags: ["论文翻译", "同声传译", "学术必备"],
    icon: "Languages",
    alternatives: [
      { name: "Google Translate", url: "https://translate.google.com/" },
      { name: "有道翻译", url: "https://fanyi.youdao.com/" }
    ],
    seoTraffic: { rank: 190, monthlyVisits: "140M", seoScore: 96 }
  },
  {
    id: "prod-feishu",
    name: "飞书",
    description: "先进团队都在用的下一代企业协作平台，集成在线文档、音视频、云盘和自动化工作流。",
    url: "https://www.feishu.cn/",
    category: "productivity",
    tags: ["协作文档", "多维表格", "即时通讯"],
    icon: "Calendar",
    alternatives: [
      { name: "钉钉", url: "https://www.dingtalk.com/" },
      { name: "Slack", url: "https://slack.com/" }
    ],
    seoTraffic: { rank: 1200, monthlyVisits: "14.5M", seoScore: 89 }
  },
  {
    id: "prod-pdf24",
    name: "PDF24 Tools",
    description: "完全免费、没有限制、无需安装、没有水印的顶级在线 PDF 转换、合并、压缩和编辑工具包。",
    url: "https://tools.pdf24.org/",
    category: "productivity",
    tags: ["PDF压缩", "PDF合并", "免费无水印", "文档格式"],
    icon: "FileSpreadsheet",
    alternatives: [
      { name: "Smallpdf", url: "https://smallpdf.com/" },
      { name: "Ilovepdf", url: "https://www.ilovepdf.com/" }
    ],
    seoTraffic: { rank: 310, monthlyVisits: "49M", seoScore: 95 }
  },
  {
    id: "prod-processon",
    name: "ProcessOn",
    description: "支持多人协作的在线思维导图、流程图、组织架构图、网络拓扑图绘制工具。",
    url: "https://www.processon.com/",
    category: "productivity",
    tags: ["思维导图", "流程图", "在线作图"],
    icon: "GitFork",
    alternatives: [
      { name: "Draw.io", url: "https://draw.io/" },
      { name: "GitMind", url: "https://gitmind.cn/" }
    ],
    seoTraffic: { rank: 2500, monthlyVisits: "6.1M", seoScore: 88 }
  },
  {
    id: "prod-mdnice",
    name: "Markdown Nice",
    description: "支持把普通 Markdown 内容一键排版，渲染并复制出适配微信公众号、知乎的超精美样式。",
    url: "https://mdnice.com/",
    category: "productivity",
    tags: ["Markdown排版", "公众号", "知乎", "美化"],
    icon: "FileEdit",
    alternatives: [
      { name: "Typora", url: "https://typora.io/" },
      { name: "墨滴 Markdown", url: "https://write.as/" }
    ],
    seoTraffic: { rank: 16000, monthlyVisits: "0.5M", seoScore: 84 }
  },
  {
    id: "prod-wolai",
    name: "Wolai 我来笔记",
    description: "国内高度优化的块级笔记协作平台，极佳的本地多端同步与完美契合国人排版的思维视图。",
    url: "https://www.wolai.com/",
    category: "productivity",
    tags: ["结构化笔记", "双链关联", "中文排版优化", "云备份"],
    icon: "FileText",
    alternatives: [
      { name: "Notion", url: "https://www.notion.so/" },
      { name: "FlowUs", url: "https://flowus.cn/" }
    ],
    seoTraffic: { rank: 8100, monthlyVisits: "1.4M", seoScore: 87 }
  },
  {
    id: "prod-obsidian",
    name: "Obsidian",
    description: "风靡程序员和学霸群体的离线本地 Markdown 个人超级大脑，依赖强大的海量插件与强加密。",
    url: "https://obsidian.md/",
    category: "productivity",
    tags: ["本地优先", "双链脑图", "零知识加密", "完全客制化"],
    icon: "Brain",
    alternatives: [
      { name: "Logseq", url: "https://logseq.com/" },
      { name: "Notion", url: "https://www.notion.so/" }
    ],
    seoTraffic: { rank: 1600, monthlyVisits: "10.8M", seoScore: 94 }
  },
  {
    id: "prod-flomo",
    name: "flomo 浮墨笔记",
    description: "极简卡片式碎片创意记录平台，像发微博一样无压力捕捉脑海中的一闪而过灵感火花。",
    url: "https://flomoapp.com/",
    category: "productivity",
    tags: ["无压力笔记", "卡片式", "灵感收集", "微信同步"],
    icon: "PenTool",
    alternatives: [
      { name: "Notion", url: "https://notion.so/" },
      { name: "Apple Notes", url: "https://icloud.com/" }
    ],
    seoTraffic: { rank: 9400, monthlyVisits: "1.1M", seoScore: 86 }
  },
  {
    id: "prod-xmind",
    name: "XMind 在线思维导图",
    description: "经典殿堂级思维导图工具，内置骨架、精美配色和时间轴图样，完美展现脑力风暴逻辑。",
    url: "https://xmind.app/",
    category: "productivity",
    tags: ["脑图大厂", "鱼骨图", "演示模式", "跨端办公"],
    icon: "GitFork",
    alternatives: [
      { name: "ProcessOn", url: "https://www.processon.com/" },
      { name: "MindMeister", url: "https://www.mindmeister.com/" }
    ],
    seoTraffic: { rank: 4100, monthlyVisits: "4.5M", seoScore: 92 }
  },
  {
    id: "prod-mubu",
    name: "幕布大纲笔记",
    description: "大纲条目式思维整理笔记，支持一键将极简的大纲缩进条目无缝转化为交互思维导图树。",
    url: "https://mubu.com/",
    category: "productivity",
    tags: ["大纲整理", "结构化思维", "思维树转化"],
    icon: "FileSpreadsheet",
    alternatives: [
      { name: "Dynalist", url: "https://dynalist.io/" },
      { name: "Workflowy", url: "https://workflowy.com/" }
    ],
    seoTraffic: { rank: 14000, monthlyVisits: "0.6M", seoScore: 85 }
  },
  {
    id: "prod-drawio",
    name: "Draw.io (Diagrams.net)",
    description: "全球最顶尖、完全开源、没有商业收费的流程图与系统工程绘图利器，支持无损存至本地和云盘。",
    url: "https://app.diagrams.net/",
    category: "productivity",
    tags: ["永久免费", "开源流程图", "系统架构图", "零隐私泄露"],
    icon: "PenTool",
    alternatives: [
      { name: "ProcessOn", url: "https://www.processon.com/" },
      { name: "Lucidchart", url: "https://www.lucidchart.com/" }
    ],
    seoTraffic: { rank: 820, monthlyVisits: "22M", seoScore: 96 }
  },
  {
    id: "prod-cubox",
    name: "Cubox 智能剪藏",
    description: "高颜值的全能网页与文章跨平台保存、标注与无杂质极致阅读器，秒级提炼文章知识点。",
    url: "https://cubox.pro/",
    category: "productivity",
    tags: ["网页剪藏", "全文搜索", "极致阅读", "知识存储"],
    icon: "Compass",
    alternatives: [
      { name: "Pocket", url: "https://getpocket.com/" },
      { name: "Raindrop.io", url: "https://raindrop.io/" }
    ],
    seoTraffic: { rank: 13000, monthlyVisits: "0.7M", seoScore: 86 }
  },
  {
    id: "prod-docsmall",
    name: "Docsmall 图小小",
    description: "国人开发的轻量网页端无损静态资源压缩，支持 PDF，PNG，JPEG 以及 GIF 全线闪电打包。",
    url: "https://docsmall.com/",
    category: "productivity",
    tags: ["极速压缩", "国人小而美", "免安装多图"],
    icon: "Zap",
    alternatives: [
      { name: "TinyPNG", url: "https://tinypng.com/" },
      { name: "ILoveIMG", url: "https://www.iloveimg.com/" }
    ],
    seoTraffic: { rank: 15000, monthlyVisits: "0.5M", seoScore: 84 }
  },
  {
    id: "prod-smallpdf",
    name: "Smallpdf 智能转换",
    description: "经典的万能 PDF 在线处理利器，支持无障碍解锁、转换、提取、翻译等高阶商务功能。",
    url: "https://smallpdf.com/",
    category: "productivity",
    tags: ["PDF全能", "一键翻译", "格式提取", "云转换"],
    icon: "FileText",
    alternatives: [
      { name: "PDF24", url: "https://tools.pdf24.org/" },
      { name: "ILovePDF", url: "https://www.ilovepdf.com/" }
    ],
    seoTraffic: { rank: 450, monthlyVisits: "43M", seoScore: 95 }
  },
  {
    id: "prod-grammarly",
    name: "Grammarly AI Check",
    description: "全球领先的智能英文语法校对纠错系统，瞬间扫除论文、英文商务信件中的基础拼写错误。",
    url: "https://www.grammarly.com/",
    category: "productivity",
    tags: ["英语纠错", "论文润色", "拼写助手", "AI润色"],
    icon: "ShieldAlert",
    alternatives: [
      { name: "DeepL Write", url: "https://www.deepl.com/write" },
      { name: "QuillBot", url: "https://quillbot.com/" }
    ],
    seoTraffic: { rank: 210, monthlyVisits: "92M", seoScore: 97 }
  },

  // ==================== 其他资源 (Other) ====================
  {
    id: "other-speedtest",
    name: "Speedtest",
    description: "最知名、最精准的全球宽带网络上传、下载速度及 Ping 延迟在线检测工具。",
    url: "https://www.speedtest.net/",
    category: "other",
    tags: ["网速检测", "Ping", "网络状况", "千兆测速"],
    icon: "Zap",
    alternatives: [
      { name: "Fast.com", url: "https://fast.com/" },
      { name: "网速测试网", url: "https://www.speedtest.cn/" }
    ],
    seoTraffic: { rank: 190, monthlyVisits: "110M", seoScore: 98 }
  },
  {
    id: "other-whatismyip",
    name: "What Is My IP",
    description: "快速获取您的外网公网 IPv4/IPv6 地址、所属运营商、物理地理位置及网关信息。",
    url: "https://www.whatismyip.com/",
    category: "other",
    tags: ["公网IP", "网络定位", "DNS泄露", "网络工具"],
    icon: "Globe",
    alternatives: [
      { name: "IPinfo", url: "https://ipinfo.io/" },
      { name: "IP.cn", url: "https://ip.cn/" }
    ],
    seoTraffic: { rank: 2500, monthlyVisits: "7.1M", seoScore: 91 }
  },
  {
    id: "other-excalidraw",
    name: "Excalidraw",
    description: "风靡全球的手绘涂鸦风格在线白板，极其轻量和直观，适合绘制概念架构和交互原型图。",
    url: "https://excalidraw.com/",
    category: "other",
    tags: ["手绘风", "白板", "原型绘制"],
    icon: "PenTool",
    alternatives: [
      { name: "tldraw", url: "https://tldraw.com/" },
      { name: "Miro", url: "https://miro.com/" }
    ],
    seoTraffic: { rank: 3200, monthlyVisits: "5.5M", seoScore: 94 }
  },
  {
    id: "other-cnki",
    name: "CNKI 中国知网",
    description: "国内最大最权威的中文学术论文、科技成果、博硕士学位论文及各学科文献检索数据总库。",
    url: "https://www.cnki.net/",
    category: "other",
    tags: ["学术期刊", "文献检索", "论文查重", "研究指南"],
    icon: "BookOpen",
    alternatives: [
      { name: "万方数据", url: "https://www.wanfangdata.com.cn/" },
      { name: "维普期刊", url: "http://www.cqvip.com/" }
    ],
    seoTraffic: { rank: 920, monthlyVisits: "18M", seoScore: 91 }
  },
  {
    id: "other-scholar",
    name: "Google Scholar 谷歌学术",
    description: "谷歌旗下的免费全球跨学科文献搜索引擎，索引覆盖了几乎所有格式的公开出版学术文献。",
    url: "https://scholar.google.com/",
    category: "other",
    tags: ["学术论文", "交叉引用", "文献追踪", "期刊影响因子"],
    icon: "Search",
    alternatives: [
      { name: "ResearchGate", url: "https://www.researchgate.net/" },
      { name: "Semantic Scholar", url: "https://www.semanticscholar.org/" }
    ],
    seoTraffic: { rank: 110, monthlyVisits: "135M", seoScore: 99 }
  },
  {
    id: "other-github-trending",
    name: "GitHub Trending",
    description: "每日全球最热门最新的开源仓库排行榜，时刻跟踪技术极客趋势和全球重磅开源项目。",
    url: "https://github.com/trending",
    category: "other",
    tags: ["开源趋势", "日更榜单", "全球极客热点", "热门技术"],
    icon: "TrendingUp",
    alternatives: [
      { name: "Product Hunt", url: "https://www.producthunt.com/" },
      { name: "Hacker News", url: "https://news.ycombinator.com/" }
    ],
    seoTraffic: { rank: 250, monthlyVisits: "12M", seoScore: 96 }
  },
  {
    id: "other-producthunt",
    name: "Product Hunt",
    description: "全球前沿新颖的新软硬件、独立开发 App 以及初创科技项目每日投票竞争排行榜。",
    url: "https://www.producthunt.com/",
    category: "other",
    tags: ["新应用打榜", "独立开发", "初创黑马", "极客社区"],
    icon: "Tv",
    alternatives: [
      { name: "BetaList", url: "https://betalist.com/" },
      { name: "GitHub Trending", url: "https://github.com/trending" }
    ],
    seoTraffic: { rank: 2100, monthlyVisits: "5.1M", seoScore: 93 }
  },
  {
    id: "other-similarweb",
    name: "Similarweb 流量分析",
    description: "全球数一数二的高准确度网站流量、受众群体属性、SEO 指标及多维度竞品全景扫描系统。",
    url: "https://www.similarweb.com/",
    category: "other",
    tags: ["SEO分析", "竞品流量", "受众地理", "月度访客统计"],
    icon: "Activity",
    alternatives: [
      { name: "Ahrefs", url: "https://ahrefs.com/" },
      { name: "Semrush", url: "https://www.semrush.com/" }
    ],
    seoTraffic: { rank: 840, monthlyVisits: "23M", seoScore: 95 }
  },
  {
    id: "other-chinaz",
    name: "Chinaz 站长之家",
    description: "国内最早的综合站长服务平台，提供极致详细的国内域名 ICP 备案、百度权重、收录分析查询。",
    url: "https://tool.chinaz.com/",
    category: "other",
    tags: ["备案查询", "权重等级", "国内SEO分析", "死链检查"],
    icon: "SearchCode",
    alternatives: [
      { name: "爱站网", url: "https://www.aizhan.com/" },
      { name: "5118数据", url: "https://www.5118.com/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "14.1M", seoScore: 89 }
  },
  {
    id: "other-duckduckgo",
    name: "DuckDuckGo",
    description: "在保护个人搜索隐私方面享有极高声誉的开源搜索引擎，拒绝任何网络追踪和算法茧房。",
    url: "https://duckduckgo.com/",
    category: "other",
    tags: ["极客搜索", "无追踪隐私", "良心搜索"],
    icon: "Shield",
    alternatives: [
      { name: "Google", url: "https://www.google.com/" },
      { name: "Startpage", url: "https://www.startpage.com/" }
    ],
    seoTraffic: { rank: 150, monthlyVisits: "190M", seoScore: 98 }
  },
  {
    id: "other-notionnext",
    name: "NotionNext",
    description: "基于 Next.js 开发，一键把普通 Notion 页面完美渲染转化为支持 SEO 极速自媒体博客的顶尖部署方案。",
    url: "https://preview.tangly1024.com/",
    category: "other",
    tags: ["Notion建站", "博客部署", "免费自媒体", "完美SEO"],
    icon: "Monitor",
    alternatives: [
      { name: "Hexo", url: "https://hexo.io/" },
      { name: "Astro Blog", url: "https://astro.build/" }
    ],
    seoTraffic: { rank: 25000, monthlyVisits: "0.2M", seoScore: 88 }
  },
  {
    id: "other-codepen",
    name: "CodePen 社交沙盒",
    description: "前端工程师在线分享高难度 CSS 动画、粒子效果以及 JS 交互的高颜值微端沙盒社交圈。",
    url: "https://codepen.io/",
    category: "other",
    tags: ["HTML沙盒", "动效展示", "前端极客圈", "社交编程"],
    icon: "Code",
    alternatives: [
      { name: "JSFiddle", url: "https://jsfiddle.net/" },
      { name: "JSBin", url: "https://jsbin.com/" }
    ],
    seoTraffic: { rank: 1500, monthlyVisits: "11M", seoScore: 94 }
  },
  {
    id: "other-v2ex",
    name: "V2EX 创意社区",
    description: "国内最早、也最为聚集的高水平独立开发者、Linux 运维、苹果极客和海外数字游民的高质量讨论社群。",
    url: "https://www.v2ex.com/",
    category: "other",
    tags: ["极客讨论", "独立开发氛围", "高薪内推", "程序人生"],
    icon: "MessageSquare",
    alternatives: [
      { name: "Hacker News", url: "https://news.ycombinator.com/" },
      { name: "掘金 (Juejin)", url: "https://juejin.cn/" }
    ],
    seoTraffic: { rank: 1800, monthlyVisits: "9.5M", seoScore: 90 }
  }
];
