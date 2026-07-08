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
  },
  {
    id: "oss-vscode",
    name: "Visual Studio Code (VS Code)",
    description: "The world's most popular open-source-based code editor, built on Electron with rich ecosystem plugins.",
    url: "https://code.visualstudio.com/",
    category: "dev",
    tags: ["Open Source", "Code Editor", "Microsoft", "Extensions"],
    icon: "Code",
    alternatives: [
      { name: "Cursor AI", url: "https://cursor.com/" },
      { name: "Sublime Text", url: "https://www.sublimetext.com/" }
    ],
    seoTraffic: { rank: 35, monthlyVisits: "45M", seoScore: 98 }
  },
  {
    id: "oss-firefox",
    name: "Mozilla Firefox",
    description: "Privacy-first, independent open-source web browser backed by the non-profit Mozilla Foundation.",
    url: "https://www.mozilla.org/firefox/",
    category: "other",
    tags: ["Browser", "Open Source", "Privacy", "Web Standards"],
    icon: "Globe",
    alternatives: [
      { name: "Google Chrome", url: "https://www.google.com/chrome/" },
      { name: "Brave Browser", url: "https://brave.com/" }
    ],
    seoTraffic: { rank: 80, monthlyVisits: "115M", seoScore: 99 }
  },
  {
    id: "oss-blender",
    name: "Blender 3D",
    description: "Free and open-source 3D creation suite supporting modeling, rigging, animation, rendering, and compositing.",
    url: "https://www.blender.org/",
    category: "design",
    tags: ["3D Modelling", "Animation", "Open Source", "Rendering"],
    icon: "Palette",
    alternatives: [
      { name: "Autodesk Maya", url: "https://www.autodesk.com/products/maya/" },
      { name: "Cinema 4D", url: "https://www.maxon.net/cinema-4d/" }
    ],
    seoTraffic: { rank: 1200, monthlyVisits: "18M", seoScore: 95 }
  },
  {
    id: "oss-obs",
    name: "OBS Studio",
    description: "Free and open-source software for video recording and live streaming on Windows, Mac, and Linux.",
    url: "https://obsproject.com/",
    category: "design",
    tags: ["Live Streaming", "Screen Recorder", "Video", "Open Source"],
    icon: "Tv",
    alternatives: [
      { name: "Streamlabs", url: "https://streamlabs.com/" },
      { name: "Camtasia Studio", url: "https://www.techsmith.com/camtasia.html" }
    ],
    seoTraffic: { rank: 1400, monthlyVisits: "16M", seoScore: 96 }
  },
  {
    id: "oss-handbrake",
    name: "HandBrake Video Transcoder",
    description: "Open-source tool for converting video from nearly any format to a selection of modern, widely supported codecs.",
    url: "https://handbrake.fr/",
    category: "design",
    tags: ["Video Encoder", "Transcoder", "Open Source", "Converter"],
    icon: "MonitorPlay",
    alternatives: [
      { name: "Adobe Media Encoder", url: "https://www.adobe.com/products/media-encoder.html" },
      { name: "FFmpeg", url: "https://ffmpeg.org/" }
    ],
    seoTraffic: { rank: 3200, monthlyVisits: "4.8M", seoScore: 92 }
  },
  {
    id: "oss-vlc",
    name: "VLC Media Player",
    description: "Free and open-source cross-platform multimedia player that plays most multimedia files as well as discs and streams.",
    url: "https://www.videolan.org/vlc/",
    category: "other",
    tags: ["Media Player", "Video Player", "Codec pack", "Open Source"],
    icon: "Play",
    alternatives: [
      { name: "IINA Mac Player", url: "https://iina.io/" },
      { name: "PotPlayer", url: "https://potplayer.daum.net/" }
    ],
    seoTraffic: { rank: 310, monthlyVisits: "38M", seoScore: 97 }
  },
  {
    id: "oss-gimp",
    name: "GIMP Image Editor",
    description: "GNU Image Manipulation Program, a cross-platform open-source image editor for photo retouching and composition.",
    url: "https://www.gimp.org/",
    category: "design",
    tags: ["Image Editor", "Photoshop Alternative", "Open Source", "Design"],
    icon: "Image",
    alternatives: [
      { name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
      { name: "Photopea", url: "https://www.photopea.com/" }
    ],
    seoTraffic: { rank: 1900, monthlyVisits: "7.2M", seoScore: 93 }
  },
  {
    id: "oss-audacity",
    name: "Audacity Audio Editor",
    description: "Easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems.",
    url: "https://www.audacityteam.org/",
    category: "design",
    tags: ["Audio Recorder", "Music Editor", "Open Source", "Sound Design"],
    icon: "Volume2",
    alternatives: [
      { name: "Adobe Audition", url: "https://www.adobe.com/products/audition.html" },
      { name: "Reaper DAW", url: "https://www.reaper.fm/" }
    ],
    seoTraffic: { rank: 1600, monthlyVisits: "9.1M", seoScore: 94 }
  },
  {
    id: "oss-inkscape",
    name: "Inkscape Vector Graphics",
    description: "Professional vector graphics editor for Windows, Mac OS X and Linux. It is free and open source.",
    url: "https://inkscape.org/",
    category: "design",
    tags: ["Vector Drawing", "SVG Editor", "Open Source", "Creative"],
    icon: "Compass",
    alternatives: [
      { name: "Adobe Illustrator", url: "https://www.adobe.com/products/illustrator.html" },
      { name: "Figma Designer", url: "https://www.figma.com/" }
    ],
    seoTraffic: { rank: 2800, monthlyVisits: "4.5M", seoScore: 91 }
  },
  {
    id: "oss-bitwarden",
    name: "Bitwarden Password Manager",
    description: "Secure open-source password manager for individuals, teams, and business organizations to secure credentials.",
    url: "https://bitwarden.com/",
    category: "productivity",
    tags: ["Password Locker", "Security", "Open Source", "Cloud Sync"],
    icon: "KeyRound",
    alternatives: [
      { name: "1Password", url: "https://1password.com/" },
      { name: "LastPass", url: "https://www.lastpass.com/" }
    ],
    seoTraffic: { rank: 820, monthlyVisits: "15M", seoScore: 96 }
  },
  {
    id: "oss-joplin",
    name: "Joplin Notebook",
    description: "An open-source note-taking and to-do application with markdown and end-to-end encryption support.",
    url: "https://joplinapp.org/",
    category: "productivity",
    tags: ["Notebook", "Markdown", "Encryption", "Open Source"],
    icon: "BookOpen",
    alternatives: [
      { name: "Obsidian Notes", url: "https://obsidian.md/" },
      { name: "Notion Wiki", url: "https://www.notion.so/" }
    ],
    seoTraffic: { rank: 12000, monthlyVisits: "0.8M", seoScore: 89 }
  },
  {
    id: "oss-logseq",
    name: "Logseq Outliner",
    description: "A privacy-first, open-source knowledge database and outliner tool that stores data locally on plain text files.",
    url: "https://logseq.com/",
    category: "productivity",
    tags: ["Knowledge Graph", "Outliner", "Local First", "Open Source"],
    icon: "Network",
    alternatives: [
      { name: "Roam Research", url: "https://roamresearch.com/" },
      { name: "Obsidian Notes", url: "https://obsidian.md/" }
    ],
    seoTraffic: { rank: 18000, monthlyVisits: "0.6M", seoScore: 87 }
  },
  {
    id: "oss-homeassistant",
    name: "Home Assistant",
    description: "Open-source home automation that puts local control and privacy first. Perfect to run on a Raspberry Pi.",
    url: "https://www.home-assistant.io/",
    category: "other",
    tags: ["Smart Home", "IoT", "Automation", "Open Source"],
    icon: "Home",
    alternatives: [
      { name: "Apple HomeKit", url: "https://www.apple.com/home-app/" },
      { name: "Google Home", url: "https://home.google.com/" }
    ],
    seoTraffic: { rank: 3500, monthlyVisits: "5.5M", seoScore: 94 }
  },
  {
    id: "oss-jellyfin",
    name: "Jellyfin Media System",
    description: "The volunteer-built, media server software that puts you in control of managing and streaming your media.",
    url: "https://jellyfin.org/",
    category: "other",
    tags: ["Media Server", "Self Hosted", "Streaming", "Open Source"],
    icon: "Monitor",
    alternatives: [
      { name: "Plex Media Server", url: "https://www.plex.tv/" },
      { name: "Emby Server", url: "https://emby.media/" }
    ],
    seoTraffic: { rank: 7500, monthlyVisits: "2.1M", seoScore: 91 }
  },
  {
    id: "oss-libreoffice",
    name: "LibreOffice",
    description: "A powerful, free and open-source office suite, a successor project to OpenOffice.org with writer, calc, and impress.",
    url: "https://www.libreoffice.org/",
    category: "productivity",
    tags: ["Office Suite", "Excel Alternative", "Open Source", "Docs"],
    icon: "FileText",
    alternatives: [
      { name: "Microsoft 365", url: "https://www.microsoft.com/microsoft-365" },
      { name: "Google Workspace", url: "https://workspace.google.com/" }
    ],
    seoTraffic: { rank: 2100, monthlyVisits: "6.0M", seoScore: 94 }
  },
  {
    id: "oss-sharex",
    name: "ShareX Capture",
    description: "Free and open-source program that lets you capture or record any area of your screen and share it with a press of a key.",
    url: "https://getsharex.com/",
    category: "productivity",
    tags: ["Screen Capture", "GIF Recorder", "Windows Tool", "Open Source"],
    icon: "Camera",
    alternatives: [
      { name: "Snagit Recorder", url: "https://www.techsmith.com/screen-capture.html" },
      { name: "CleanShot X Mac", url: "https://cleanshot.com/" }
    ],
    seoTraffic: { rank: 9800, monthlyVisits: "1.4M", seoScore: 89 }
  },
  {
    id: "oss-nextcloud",
    name: "Nextcloud",
    description: "A suite of client-server software for creating and using file hosting services. It is highly enterprise-ready.",
    url: "https://nextcloud.com/",
    category: "productivity",
    tags: ["Cloud Storage", "Self Hosted Drive", "Open Source", "Collab"],
    icon: "HardDrive",
    alternatives: [
      { name: "Google Drive", url: "https://www.google.com/drive/" },
      { name: "Dropbox", url: "https://www.dropbox.com/" }
    ],
    seoTraffic: { rank: 4100, monthlyVisits: "3.2M", seoScore: 93 }
  },
  {
    id: "oss-syncthing",
    name: "Syncthing",
    description: "A continuous file synchronization program. It synchronizes files between two or more computers in real time.",
    url: "https://syncthing.net/",
    category: "other",
    tags: ["File Sync", "P2P Transfer", "Open Source", "Decentralized"],
    icon: "RefreshCw",
    alternatives: [
      { name: "Resilio Sync", url: "https://www.resilio.com/" },
      { name: "Microsoft OneDrive", url: "https://www.microsoft.com/onedrive" }
    ],
    seoTraffic: { rank: 11000, monthlyVisits: "1.1M", seoScore: 88 }
  },
  {
    id: "oss-mastodon",
    name: "Mastodon Social",
    description: "The largest decentralized open-source microblogging network in the world, built on ActivityPub protocol.",
    url: "https://joinmastodon.org/",
    category: "other",
    tags: ["Decentralized", "Federated", "ActivityPub", "Open Source"],
    icon: "MessageSquare",
    alternatives: [
      { name: "Twitter / X", url: "https://x.com/" },
      { name: "Threads by Meta", url: "https://www.threads.net/" }
    ],
    seoTraffic: { rank: 5400, monthlyVisits: "2.8M", seoScore: 93 }
  },
  {
    id: "oss-docker",
    name: "Docker Container Platform",
    description: "The industry standard platform for developers to build, share, and run modern applications with containers.",
    url: "https://www.docker.com/",
    category: "dev",
    tags: ["Containerization", "DevOps", "Open Source Engine", "Microservices"],
    icon: "Boxes",
    alternatives: [
      { name: "Podman Desktop", url: "https://podman-desktop.io/" },
      { name: "LXD Containers", url: "https://images.linuxcontainers.org/" }
    ],
    seoTraffic: { rank: 210, monthlyVisits: "24M", seoScore: 97 }
  },
  {
    id: "oss-kubernetes",
    name: "Kubernetes (K8s)",
    description: "An open-source container-orchestration system for automating computer application deployment, scaling, and management.",
    url: "https://kubernetes.io/",
    category: "dev",
    tags: ["Orchestration", "Cloud Native", "DevOps", "Open Source Core"],
    icon: "Cpu",
    alternatives: [
      { name: "Docker Swarm", url: "https://docs.docker.com/engine/swarm/" },
      { name: "HashiCorp Nomad", url: "https://www.nomadproject.io/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "4.2M", seoScore: 95 }
  },
  {
    id: "oss-git",
    name: "Git Version Control",
    description: "Free and open source distributed version control system designed to handle everything from small to very large projects.",
    url: "https://git-scm.com/",
    category: "dev",
    tags: ["Version Control", "CLI", "Developer Tool", "Open Source"],
    icon: "GitBranch",
    alternatives: [
      { name: "Apache Subversion SVN", url: "https://subversion.apache.org/" },
      { name: "Mercurial VCS", url: "https://www.mercurial-scm.org/" }
    ],
    seoTraffic: { rank: 180, monthlyVisits: "21M", seoScore: 98 }
  },
  {
    id: "oss-prometheus",
    name: "Prometheus Monitoring",
    description: "An open-source systems monitoring and alerting toolkit originally built at SoundCloud, storing TSDB data.",
    url: "https://prometheus.io/",
    category: "dev",
    tags: ["Monitoring", "Alerting", "TSDB Metrics", "Open Source"],
    icon: "Activity",
    alternatives: [
      { name: "Datadog Cloud", url: "https://www.datadoghq.com/" },
      { name: "Dynatrace Suite", url: "https://www.dynatrace.com/" }
    ],
    seoTraffic: { rank: 4500, monthlyVisits: "2.5M", seoScore: 92 }
  },
  {
    id: "oss-grafana",
    name: "Grafana Analytics & Dashboards",
    description: "The open-source platform for query, visualization, alerting, and understanding metrics no matter where they are.",
    url: "https://grafana.com/",
    category: "dev",
    tags: ["Dashboard", "Analytics", "Data Visualization", "Open Source"],
    icon: "BarChart3",
    alternatives: [
      { name: "Kibana Elastic", url: "https://www.elastic.co/kibana" },
      { name: "Tableau Visuals", url: "https://www.tableau.com/" }
    ],
    seoTraffic: { rank: 1400, monthlyVisits: "7.8M", seoScore: 96 }
  },
  {
    id: "oss-outline",
    name: "Outline Wiki",
    description: "A fast, modern, and beautiful collaborative open-source wiki and knowledge base for your growing team.",
    url: "https://www.getoutline.com/",
    category: "productivity",
    tags: ["Team Wiki", "Markdown Doc", "Knowledge base", "Open Source"],
    icon: "FolderGit",
    alternatives: [
      { name: "Confluence Cloud", url: "https://www.atlassian.com/software/confluence" },
      { name: "Notion Enterprise", url: "https://www.notion.so/" }
    ],
    seoTraffic: { rank: 24000, monthlyVisits: "0.4M", seoScore: 88 }
  },
  // ==================== 50 Extra Curated Tools ====================
  // AI Tools (10)
  {
    id: "extra-ai-genspark",
    name: "Genspark AI 搜索",
    description: "生成式 AI 搜索引擎，自动为您想要搜索的任意主题实时编写一个定制的、汇总全面的综合页面。",
    url: "https://www.genspark.ai/",
    category: "ai",
    tags: ["AI搜索", "学术汇总", "深度整理", "提效"],
    icon: "Search",
    alternatives: [
      { name: "Perplexity AI", url: "https://www.perplexity.ai/" },
      { name: "Phind AI", url: "https://www.phind.com/" }
    ],
    seoTraffic: { rank: 3500, monthlyVisits: "5.1M", seoScore: 92 }
  },
  {
    id: "extra-ai-poe",
    name: "Poe 聚合大模型",
    description: "Quora 推出的多模型 AI 聊天客户端，汇聚了 GPT-4o, Claude 3.5, Gemini 1.5, Llama 3 并支持创建自己的机器人。",
    url: "https://poe.com/",
    category: "ai",
    tags: ["多模型", "聚合客户端", "AI聊天", "Bot创建"],
    icon: "MessageSquare",
    alternatives: [
      { name: "ChatGPT", url: "https://chatgpt.com/" },
      { name: "Claude AI", url: "https://claude.ai/" }
    ],
    seoTraffic: { rank: 450, monthlyVisits: "42M", seoScore: 95 }
  },
  {
    id: "extra-ai-groq",
    name: "Groq 极致推理 API",
    description: "拥有世界上最高效极速的推理专用 LPU 芯片，让 Llama 3, Mixtral 等模型实现每秒上百词的闪电响应时间。",
    url: "https://groq.com/",
    category: "ai",
    tags: ["极速推理", "LPU芯片", "开源大模型", "API接入"],
    icon: "Zap",
    alternatives: [
      { name: "Together AI", url: "https://www.together.ai/" },
      { name: "Replicate", url: "https://replicate.com/" }
    ],
    seoTraffic: { rank: 1800, monthlyVisits: "8.5M", seoScore: 91 }
  },
  {
    id: "extra-ai-chatpdf",
    name: "ChatPDF 文档追问",
    description: "支持一键上传超大 PDF 论文或合同，AI 会自动对其进行分段解析和核心内容提炼，支持极高精度的跨页追问与溯源。",
    url: "https://www.chatpdf.com/",
    category: "ai",
    tags: ["PDF解析", "文档AI", "阅读助手", "学术神器"],
    icon: "FileText",
    alternatives: [
      { name: "Kimi Chat", url: "https://kimi.moonshot.cn/" },
      { name: "Humata AI", url: "https://www.humata.ai/" }
    ],
    seoTraffic: { rank: 2200, monthlyVisits: "7.2M", seoScore: 89 }
  },
  {
    id: "extra-ai-did",
    name: "D-ID 数字人视频",
    description: "领先的 AI 虚拟主播与照片开口说话视频生成平台，支持自然配音与多国语言，广泛应用于宣传与在线教学。",
    url: "https://www.d-id.com/",
    category: "ai",
    tags: ["数字人", "照片开口", "AI视频", "虚拟主播"],
    icon: "Video",
    alternatives: [
      { name: "HeyGen", url: "https://www.heygen.com/" },
      { name: "Synthesia", url: "https://www.synthesia.io/" }
    ],
    seoTraffic: { rank: 2900, monthlyVisits: "5.4M", seoScore: 90 }
  },
  {
    id: "extra-ai-runway",
    name: "Runway Gen-3 视频生成",
    description: "好莱坞级别的高画质 AI 视频生成大模型，在光影连贯性、动作逼真度以及艺术创造力上堪称行业风向标。",
    url: "https://runwayml.com/",
    category: "ai",
    tags: ["AI视频", "Runway", "Gen-3", "好莱坞质感"],
    icon: "Film",
    alternatives: [
      { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine" },
      { name: "Sora", url: "https://openai.com/sora" }
    ],
    seoTraffic: { rank: 1400, monthlyVisits: "11.2M", seoScore: 93 }
  },
  {
    id: "extra-ai-kling",
    name: "快手可灵 Kling AI",
    description: "国内顶级 AI 视频生成模型，在模拟真实物理规律、光影关系和极其复杂的肢体动态方面达到国际一流水准。",
    url: "https://klingai.com/",
    category: "ai",
    tags: ["国产顶级", "AI视频", "快手可灵", "物理规律模拟"],
    icon: "Tv",
    alternatives: [
      { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine" },
      { name: "Runway Gen-3", url: "https://runwayml.com/" }
    ],
    seoTraffic: { rank: 3800, monthlyVisits: "4.5M", seoScore: 89 }
  },
  {
    id: "extra-ai-gamma",
    name: "Gamma App 一键生成 PPT",
    description: "颠覆性的幻灯片演示文稿与精美长文排版生成器，只需写下一句话描述，即可在 1 分钟内完成全套视觉排版与图片搭配。",
    url: "https://gamma.app/",
    category: "ai",
    tags: ["AI生成PPT", "演示文稿", "排版利器", "创意图表"],
    icon: "Layout",
    alternatives: [
      { name: "Tome", url: "https://tome.app/" },
      { name: "Beautiful.ai", url: "https://www.beautiful.ai/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "14.8M", seoScore: 94 }
  },
  {
    id: "extra-ai-copilot-workspace",
    name: "GitHub Copilot Workspace",
    description: "GitHub 官方推出的以自然语言为驱动的项目全局开发套件，支持在云端环境直接理解 Issue、设计架构和自动重构代码。",
    url: "https://github.com/features/copilot-workspace",
    category: "ai",
    tags: ["GitHub", "AI编程", "Issue驱动", "全局编写"],
    icon: "Cpu",
    alternatives: [
      { name: "Cursor AI", url: "https://www.cursor.com/" },
      { name: "Replit", url: "https://replit.com/" }
    ],
    seoTraffic: { rank: 40, monthlyVisits: "2.1M", seoScore: 95 }
  },
  {
    id: "extra-ai-deepseek-api",
    name: "DeepSeek API 开放平台",
    description: "深度求索官方的大模型 API 接入端，提供与国际一流水平比肩的极低报价，是国内开发者降本增效的核心首选。",
    url: "https://platform.deepseek.com/",
    category: "ai",
    tags: ["DeepSeek", "API接入", "高性价比", "国产开源"],
    icon: "Terminal",
    alternatives: [
      { name: "OpenAI Platform", url: "https://platform.openai.com/" },
      { name: "SiliconFlow", url: "https://siliconflow.cn/" }
    ],
    seoTraffic: { rank: 2500, monthlyVisits: "6.2M", seoScore: 91 }
  },

  // Dev Tools (10)
  {
    id: "extra-dev-shadcn",
    name: "Shadcn UI 组件库",
    description: "当前在 React 领域最为火爆的组件设计范式，无需作为 npm 依赖安装，而是直接将无样式的 Accessible 组件代码复制或 CLI 注入到项目中。",
    url: "https://ui.shadcn.com/",
    category: "dev",
    tags: ["Shadcn", "UI框架", "Tailwind", "Radix", "前端精品"],
    icon: "LayoutGrid",
    alternatives: [
      { name: "MUI", url: "https://mui.com/" },
      { name: "Ant Design", url: "https://ant.design/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "15M", seoScore: 96 }
  },
  {
    id: "extra-dev-drizzle",
    name: "Drizzle ORM",
    description: "下一代轻量极速、类型安全的 TypeScript 关系型数据库 ORM 框架，完美兼容 Serverless、边缘计算以及传统 SQL 环境。",
    url: "https://orm.drizzle.team/",
    category: "dev",
    tags: ["ORM", "TypeScript", "SQL", "Database", "Type-Safe"],
    icon: "Database",
    alternatives: [
      { name: "Prisma", url: "https://www.prisma.io/" },
      { name: "TypeORM", url: "https://typeorm.io/" }
    ],
    seoTraffic: { rank: 4100, monthlyVisits: "3.2M", seoScore: 93 }
  },
  {
    id: "extra-dev-jsonhero",
    name: "JSON Hero 华丽可视化",
    description: "令人惊艳的在线 JSON 可视化调试器，支持搜索、多重列视图显示、色彩编码标记以及超大嵌套结构分析。",
    url: "https://jsonhero.io/",
    category: "dev",
    tags: ["JSON调试", "可视化", "前端开发", "高颜值"],
    icon: "Eye",
    alternatives: [
      { name: "JSON Crack", url: "https://jsoncrack.com/" },
      { name: "内置JSON工具", url: "#builtin-json" }
    ],
    seoTraffic: { rank: 18000, monthlyVisits: "0.5M", seoScore: 88 }
  },
  {
    id: "extra-dev-cf-workers",
    name: "Cloudflare Workers 边缘计算",
    description: "部署在 Cloudflare 全球数百个数据中心边缘节点的 Serverless JavaScript/WASM 极速计算托管环境。",
    url: "https://workers.cloudflare.com/",
    category: "dev",
    tags: ["Cloudflare", "Workers", "Serverless", "边缘计算", "免费托管"],
    icon: "Cloud",
    alternatives: [
      { name: "Vercel Functions", url: "https://vercel.com/features/serverless-functions" },
      { name: "Netlify Functions", url: "https://www.netlify.com/platform/services/functions/" }
    ],
    seoTraffic: { rank: 180, monthlyVisits: "8.1M", seoScore: 97 }
  },
  {
    id: "extra-dev-nginx-config",
    name: "NGINX Config 在线配置生成",
    description: "DigitalOcean 提供的在线配置工具，直观、可视、免错生成 NGINX 虚拟主机、反向代理、SSL 证书及安全强化参数代码。",
    url: "https://www.digitalocean.com/community/tools/nginx",
    category: "dev",
    tags: ["NGINX", "服务器运维", "配置生成", "SSL配置", "反向代理"],
    icon: "Cpu",
    alternatives: [
      { name: "Mozilla SSL Generator", url: "https://ssl-config.mozilla.org/" },
      { name: "Nginx Helper", url: "https://nginx.org/" }
    ],
    seoTraffic: { rank: 350, monthlyVisits: "2.5M", seoScore: 95 }
  },
  {
    id: "extra-dev-github-actions",
    name: "GitHub Actions 速查表",
    description: "直观便捷地检索 GitHub Actions 自动化工作流 CI/CD 中常用的配置文件格式、全局环境变量、调度时区语法及优秀开源模板。",
    url: "https://github.com/features/actions",
    category: "dev",
    tags: ["CI/CD", "自动化工作流", "GitHub", "配置文件速查"],
    icon: "GitBranch",
    alternatives: [
      { name: "GitLab CI docs", url: "https://docs.gitlab.com/ee/ci/" },
      { name: "Travis CI", url: "https://www.travis-ci.com/" }
    ],
    seoTraffic: { rank: 40, monthlyVisits: "4.8M", seoScore: 96 }
  },
  {
    id: "extra-dev-localtunnel",
    name: "Localtunnel 本地内网穿透",
    description: "无需繁杂配置，仅需一行 NPM 命令即可极速将本地 localhost 开发端口一键暴露到公网，极速用于微信、Webhooks 开发联调。",
    url: "https://theboroer.github.io/localtunnel-www/",
    category: "dev",
    tags: ["内网穿透", "微信开发", "本地调试", "公网映射"],
    icon: "Radio",
    alternatives: [
      { name: "Ngrok", url: "https://ngrok.com/" },
      { name: "cpolar", url: "https://www.cpolar.com/" }
    ],
    seoTraffic: { rank: 25000, monthlyVisits: "0.3M", seoScore: 84 }
  },
  {
    id: "extra-dev-postgres-sandbox",
    name: "Postgres Playground 沙盒",
    description: "无需安装庞大的 Postgres SQL 实例，网页端沙盒提供开箱即用的关系型数据库终端，用于执行复杂的 SQL、表关联实验与逻辑演算。",
    url: "https://www.postgresql.org/",
    category: "dev",
    tags: ["PostgreSQL", "数据库沙盒", "SQL练习", "网页运行"],
    icon: "Database",
    alternatives: [
      { name: "SQLite Viewer", url: "https://sqliteviewer.app/" },
      { name: "SQL Fiddle", url: "http://sqlfiddle.com/" }
    ],
    seoTraffic: { rank: 950, monthlyVisits: "1.2M", seoScore: 92 }
  },
  {
    id: "extra-dev-so-search",
    name: "StackOverflow 精准检索",
    description: "通过剔除网页杂乱推广、提供特定标签加乘、结合 AI 语法分析的大脑型 StackOverflow 技术排雷辅助站。",
    url: "https://stackoverflow.com/",
    category: "dev",
    tags: ["报错查找", "精准检索", "开发提效", "排错辅助"],
    icon: "HelpCircle",
    alternatives: [
      { name: "Phind AI", url: "https://www.phind.com/" },
      { name: "Devv.ai", url: "https://devv.ai/" }
    ],
    seoTraffic: { rank: 150, monthlyVisits: "15M", seoScore: 97 }
  },
  {
    id: "extra-dev-deno",
    name: "Deno 下一代运行时",
    description: "由 Node.js 创始人开发的现代化、极其安全、原生完美支持 TypeScript 与 ESM 模块规范的高性能后端 JavaScript 运行时平台。",
    url: "https://deno.com/",
    category: "dev",
    tags: ["Deno", "TypeScript", "JavaScript运行时", "ESM", "安全"],
    icon: "Terminal",
    alternatives: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Bun.sh", url: "https://bun.sh/" }
    ],
    seoTraffic: { rank: 8200, monthlyVisits: "1.8M", seoScore: 91 }
  },

  // Design Tools (10)
  {
    id: "extra-design-framer",
    name: "Framer 视觉建站神器",
    description: "业界无代码设计导向建站平台的扛鼎之作，支持直接拖拽设计，一键发布附带顶尖流畅 React 三维/二维动效的完美自适应网站。",
    url: "https://www.framer.com/",
    category: "design",
    tags: ["视觉无代码", "React动效", "极速建站", "网页设计"],
    icon: "Layers",
    alternatives: [
      { name: "Webflow", url: "https://webflow.com/" },
      { name: "WordPress", url: "https://wordpress.org/" }
    ],
    seoTraffic: { rank: 2100, monthlyVisits: "8.2M", seoScore: 95 }
  },
  {
    id: "extra-design-spline",
    name: "Spline 3D 交互设计",
    description: "彻底颠覆三维建站门槛的网页端 3D 在线设计协同平台，支持轻松制作、物理模拟并导出直接嵌入 React 或网页的精美 3D 图形动效。",
    url: "https://spline.design/",
    category: "design",
    tags: ["3D设计", "交互动效", "WebGL", "网页特效"],
    icon: "Rotate3d",
    alternatives: [
      { name: "Blender (Desktop)", url: "https://www.blender.org/" },
      { name: "Three.js Editor", url: "https://threejs.org/editor/" }
    ],
    seoTraffic: { rank: 6400, monthlyVisits: "2.5M", seoScore: 91 }
  },
  {
    id: "extra-design-vecteezy",
    name: "Vecteezy 免费矢量库",
    description: "全球最顶尖的优质商业矢量底图、创意设计插画、无版权平面素材与精美背景免费下载站。",
    url: "https://www.vecteezy.com/",
    category: "design",
    tags: ["矢量底图", "平面素材", "插画下载", "设计资源"],
    icon: "Brush",
    alternatives: [
      { name: "Freepik", url: "https://www.freepik.com/" },
      { name: "Flaticon", url: "https://www.flaticon.com/" }
    ],
    seoTraffic: { rank: 820, monthlyVisits: "24M", seoScore: 96 }
  },
  {
    id: "extra-design-colorhunt",
    name: "Color Hunt 精选配色",
    description: "倍受独立设计师喜爱的、采用极简主义手工卡片精选和每日更新流行趋势的配色色彩灵感获取站。",
    url: "https://colorhunt.co/",
    category: "design",
    tags: ["精美配色", "色卡碰撞", "设计配色", "极简卡片"],
    icon: "Palette",
    alternatives: [
      { name: "Coolors", url: "https://coolors.co/" },
      { name: "Adobe Color", url: "https://color.adobe.com/" }
    ],
    seoTraffic: { rank: 11000, monthlyVisits: "1.4M", seoScore: 89 }
  },
  {
    id: "extra-design-squoosh",
    name: "Squoosh 谷歌极致压缩",
    description: "谷歌 Chrome 团队出品的纯本地极速编码与图像无损级高阶压缩工具，支持多种尖端 Web 格式对比与精细设置。",
    url: "https://squoosh.app/",
    category: "design",
    tags: ["谷歌出品", "纯本地压缩", "图像格式转换", "WebP编码", "极速"],
    icon: "Scissors",
    alternatives: [
      { name: "TinyPNG", url: "https://tinypng.com/" },
      { name: "Compressor.io", url: "https://compressor.io/" }
    ],
    seoTraffic: { rank: 12000, monthlyVisits: "1.2M", seoScore: 91 }
  },
  {
    id: "extra-design-lordicon",
    name: "Lordicon 动感图标库",
    description: "包含数千个高清晰度、支持通过 CSS 自定义渲染、带有极其精细点击/悬停交互触发效果的 Lottie 动感图标数据库。",
    url: "https://lordicon.com/",
    category: "design",
    tags: ["动感图标", "Lottie交互", "GIF图标", "网页交互"],
    icon: "Smile",
    alternatives: [
      { name: "LottieFiles", url: "https://lottiefiles.com/" },
      { name: "Flaticon", url: "https://www.flaticon.com/" }
    ],
    seoTraffic: { rank: 18000, monthlyVisits: "0.6M", seoScore: 88 }
  },
  {
    id: "extra-design-dafont",
    name: "DaFont 海量艺术字体",
    description: "英文字体免费下载领域当之无愧的常青树，拥有长达二十年沉淀的各种赛博朋克、像素风、手写体、哥特体下载与即时预览。",
    url: "https://www.dafont.com/",
    category: "design",
    tags: ["英文字体", "艺术字形", "免费字体", "排版预览"],
    icon: "Award",
    alternatives: [
      { name: "FontSpace", url: "https://www.fontspace.com/" },
      { name: "Google Fonts", url: "https://fonts.google.com/" }
    ],
    seoTraffic: { rank: 620, monthlyVisits: "28M", seoScore: 97 }
  },
  {
    id: "extra-design-css-gradient",
    name: "CSS Gradient 渐变神器",
    description: "直观度拉满的 CSS 线性渐变、径向渐变、噪点磨砂背景效果的在线编辑、对比及一键代码复制生成利器。",
    url: "https://cssgradient.io/",
    category: "design",
    tags: ["CSS渐变", "背景特效", "前端美化", "色彩渐变"],
    icon: "Paintbrush",
    alternatives: [
      { name: "Coolors Gradients", url: "https://coolors.co/gradients" },
      { name: "UI Gradients", url: "https://uigradients.com/" }
    ],
    seoTraffic: { rank: 15000, monthlyVisits: "0.9M", seoScore: 90 }
  },
  {
    id: "extra-design-shape-divider",
    name: "Shape Divider 网页波浪线",
    description: "专为网页 UI 界面设计的 SVG 极速边缘分割形状生成器，让您的网页模块过度充满流线波浪、崇山峻岭或不对称斜角设计感。",
    url: "https://www.shapedivider.app/",
    category: "design",
    tags: ["网页过度", "SVG图形", "波浪线", "边缘分割", "高颜值"],
    icon: "RotateCw",
    alternatives: [
      { name: "Get Waves", url: "https://getwaves.io/" },
      { name: "Blobmaker", url: "https://www.blobmaker.app/" }
    ],
    seoTraffic: { rank: 32000, monthlyVisits: "0.3M", seoScore: 85 }
  },
  {
    id: "extra-design-blobmaker",
    name: "Blobmaker 矢量流动水滴",
    description: "一键随机生成具有高级极简视觉设计感的、不规则流动感 SVG 矢量气泡、水滴与色块素材，完美融入现代 Web 潮流背景。",
    url: "https://www.blobmaker.app/",
    category: "design",
    tags: ["流动气泡", "SVG背景", "网页插图", "矢量图形"],
    icon: "CircleDot",
    alternatives: [
      { name: "Shape Divider", url: "https://www.shapedivider.app/" },
      { name: "Squircley", url: "https://squircley.app/" }
    ],
    seoTraffic: { rank: 42000, monthlyVisits: "0.2M", seoScore: 83 }
  },

  // Productivity Tools (10)
  {
    id: "extra-prod-miro",
    name: "Miro 跨国协同白板",
    description: "全球统治级别的企业云端协作白板，支持超大规模团队在无限画布中进行头脑风暴、敏捷看板迭代与逻辑框图研讨。",
    url: "https://miro.com/",
    category: "productivity",
    tags: ["云协同", "无限画布", "头脑风暴", "敏捷看板", "企业首选"],
    icon: "Clipboard",
    alternatives: [
      { name: "Mural", url: "https://www.mural.co/" },
      { name: "Excalidraw", url: "https://excalidraw.com/" }
    ],
    seoTraffic: { rank: 540, monthlyVisits: "38M", seoScore: 96 }
  },
  {
    id: "extra-prod-airtable",
    name: "Airtable 多维表数据库",
    description: "无代码低代码届的里程碑级平台，将传统的协作电子表格与底层关系型数据库及丰富可视化看板和高度自动化深度融合。",
    url: "https://www.airtable.com/",
    category: "productivity",
    tags: ["多维表格", "数据库", "无代码", "自动化流程"],
    icon: "Grid",
    alternatives: [
      { name: "飞书多维表格", url: "https://www.feishu.cn/" },
      { name: "Baserow", url: "https://baserow.io/" }
    ],
    seoTraffic: { rank: 620, monthlyVisits: "22M", seoScore: 95 }
  },
  {
    id: "extra-prod-readwise",
    name: "Readwise Reader 精读器",
    description: "数字阅读时代终极的高亮、稍后阅读、RSS 订阅与学术 PDF 精细审读工作台，完美同步双向链接知识库生态。",
    url: "https://readwise.io/read",
    category: "productivity",
    tags: ["稍后阅读", "高亮同步", "RSS精选", "深度阅读"],
    icon: "BookOpen",
    alternatives: [
      { name: "Pocket", url: "https://getpocket.com/" },
      { name: "Instapaper", url: "https://www.instapaper.com/" }
    ],
    seoTraffic: { rank: 9800, monthlyVisits: "1.5M", seoScore: 91 }
  },
  {
    id: "extra-prod-heptabase",
    name: "Heptabase 视觉卡片知识库",
    description: "创新学术研究笔记系统，以“卡片盒”与“思维白板”融汇为基础，帮助学者、独立创作者梳理超复杂学术关系与文献架构。",
    url: "https://heptabase.com/",
    category: "productivity",
    tags: ["视觉笔记", "卡片盒法", "双链知识库", "学术首选", "深度思考"],
    icon: "Map",
    alternatives: [
      { name: "Obsidian", url: "https://obsidian.md/" },
      { name: "Logseq", url: "https://logseq.com/" }
    ],
    seoTraffic: { rank: 24000, monthlyVisits: "0.5M", seoScore: 89 }
  },
  {
    id: "extra-prod-clickup",
    name: "ClickUp 多合一项目管理",
    description: "多合一的企业级高速协同、任务委派、甘特图展示、团队文档归纳以及全面 KPI/OKR 跟踪展示工作台。",
    url: "https://clickup.com/",
    category: "productivity",
    tags: ["项目协作", "多合一看板", "团队文档", "OKR跟踪"],
    icon: "CheckCircle",
    alternatives: [
      { name: "Trello", url: "https://trello.com/" },
      { name: "Asana", url: "https://asana.com/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "16M", seoScore: 94 }
  },
  {
    id: "extra-prod-flowith",
    name: "FloWith 智能思维画布",
    description: "国产自然语言驱动的多分枝 AI 思思维画布，彻底超越单薄的对话框形式，在网格状画布中展现深度发散、生成与合并的高维逻辑体验。",
    url: "https://flowith.io/",
    category: "productivity",
    tags: ["智能画布", "AI思维导图", "多分枝追问", "创新交互"],
    icon: "Workflow",
    alternatives: [
      { name: "Perplexity AI", url: "https://www.perplexity.ai/" },
      { name: "Coze", url: "https://coze.com/" }
    ],
    seoTraffic: { rank: 45000, monthlyVisits: "0.2M", seoScore: 82 }
  },
  {
    id: "extra-prod-toby",
    name: "Toby 标签页管理器",
    description: "极速整理浏览器数十个杂乱标签页的革命性扩展程序，允许一键聚合、按主题分组命名、并极速分享给团队常用网址。",
    url: "https://www.gettoby.com/",
    category: "productivity",
    tags: ["标签页管理", "网址聚合", "浏览器提效", "一键保存"],
    icon: "Folder",
    alternatives: [
      { name: "Session Buddy", url: "https://sessionbuddy.com/" },
      { name: "OneTab", url: "https://www.one-tab.com/" }
    ],
    seoTraffic: { rank: 32000, monthlyVisits: "0.3M", seoScore: 86 }
  },
  {
    id: "extra-prod-whimsical",
    name: "Whimsical 闪电设计画布",
    description: "极为丝滑、响应速度极快的轻量级协作画布，主打一键高效生成思维导图、线框草图、流程图和黏贴便签。",
    url: "https://whimsical.com/",
    category: "productivity",
    tags: ["极速流程图", "思维导图", "线框图草纸", "便签协作"],
    icon: "Columns",
    alternatives: [
      { name: "Miro", url: "https://miro.com/" },
      { name: "Draw.io", url: "https://draw.io/" }
    ],
    seoTraffic: { rank: 8200, monthlyVisits: "1.9M", seoScore: 92 }
  },
  {
    id: "extra-prod-excalidraw-live",
    name: "Excalidraw 实时连线手绘",
    description: "经典开源极简手绘白板，支持多人跨地域零注册实时连线协作、流程草图一键绘制、支持完全本地化的离线文件保存。",
    url: "https://excalidraw.com/",
    category: "productivity",
    tags: ["手绘风", "协作白板", "开源架构图", "零加密离线"],
    icon: "PenTool",
    alternatives: [
      { name: "Miro", url: "https://miro.com/" },
      { name: "内置Base64工具", url: "#builtin-base64" }
    ],
    seoTraffic: { rank: 7500, monthlyVisits: "2.5M", seoScore: 93 }
  },
  {
    id: "extra-prod-ticktick",
    name: "滴答清单 TickTick",
    description: "国产全能日程规划与时间管家，完美集成多平台日历、精美番茄计时器、自律习惯打卡以及多级子任务管理列表。",
    url: "https://dida365.com/",
    category: "productivity",
    tags: ["清单日历", "番茄工作法", "习惯打卡", "GTD自律", "全平台同步"],
    icon: "CheckSquare",
    alternatives: [
      { name: "Todoist", url: "https://todoist.com/" },
      { name: "Microsoft To Do", url: "https://todo.microsoft.com/" }
    ],
    seoTraffic: { rank: 2800, monthlyVisits: "5.1M", seoScore: 94 }
  },

  // Other Tools (10)
  {
    id: "extra-other-alternativeto",
    name: "AlternativeTo 平替检索",
    description: "极具威望的全球软件寻找平替网站，输入任何闭源收费大厂软件（如 Photoshop/Office），自动呈现由千万极客投票选出的最完美开源、免费替代选择。",
    url: "https://alternativeto.net/",
    category: "other",
    tags: ["寻找平替", "开源搜索", "软件推荐", "极客百科"],
    icon: "Compass",
    alternatives: [
      { name: "Slant.co", url: "https://slant.co/" },
      { name: "Softpedia", url: "https://www.softpedia.com/" }
    ],
    seoTraffic: { rank: 1100, monthlyVisits: "14M", seoScore: 95 }
  },
  {
    id: "extra-other-explainshell",
    name: "ExplainShell 终端命令拆解",
    description: "直观易用度极佳的 Linux Shell 复杂单行长指令（如 awk, rsync, tar）各部分参数与操作符号的语法图解、释义展示。",
    url: "https://explainshell.com/",
    category: "other",
    tags: ["Linux命令", "参数拆解", "Shell速查", "可视化解释"],
    icon: "CommandLine",
    alternatives: [
      { name: "DevHints", url: "https://devhints.io/" },
      { name: "Linux命令在线手册", url: "https://wangchujiang.com/reference/" }
    ],
    seoTraffic: { rank: 45000, monthlyVisits: "0.2M", seoScore: 84 }
  },
  {
    id: "extra-other-devhints",
    name: "DevHints 极简单页速查",
    description: "全球程序员最爱高频查阅的各类编程语言（JS, TS, Python）、数据库语法、Docker 与 Git 常见长指令的一页纸 cheatsheets 备忘大本营。",
    url: "https://devhints.io/",
    category: "other",
    tags: ["速查备忘单", "cheatsheet", "一页纸文档", "命令行速查"],
    icon: "Code",
    alternatives: [
      { name: "OverAPI", url: "https://overapi.com/" },
      { name: "Quickref.me", url: "https://quickref.me/" }
    ],
    seoTraffic: { rank: 15000, monthlyVisits: "0.8M", seoScore: 89 }
  },
  {
    id: "extra-other-producthunt-top",
    name: "Product Hunt 每日新品榜",
    description: "全球创新应用、初创软硬件及奇妙数码硬件的首发大本营，每日实时刷新由全球科技大咖打榜投票出的最酷创意排行。",
    url: "https://www.producthunt.com/",
    category: "other",
    tags: ["每日新品", "初创黑客", "科技首发", "创投风向标"],
    icon: "TrendingUp",
    alternatives: [
      { name: "Hacker News", url: "https://news.ycombinator.com/" },
      { name: "BetaList", url: "https://betalist.com/" }
    ],
    seoTraffic: { rank: 950, monthlyVisits: "5.8M", seoScore: 95 }
  },
  {
    id: "extra-other-hackernews-top",
    name: "Hacker News 极客大本营",
    description: "由顶尖创投 Y Combinator 托管、全球极客最为关注的硬核技术、极速科技突破新闻及拒绝营销噪音的高智商社区头条榜单。",
    url: "https://news.ycombinator.com/",
    category: "other",
    tags: ["硬核新闻", "YC大本营", "极客社区", "深度讨论"],
    icon: "Activity",
    alternatives: [
      { name: "Reddit Tech", url: "https://www.reddit.com/r/technology/" },
      { name: "Slashdot", url: "https://slashdot.org/" }
    ],
    seoTraffic: { rank: 1200, monthlyVisits: "18M", seoScore: 96 }
  },
  {
    id: "extra-other-github-trending-top",
    name: "GitHub Trending 开源风向标",
    description: "实时监控和展示今日、本周全球开发者关注度最高、高星霸榜、极速爆发的开源宝藏 repository 与热门项目趋势榜。",
    url: "https://github.com/trending",
    category: "other",
    tags: ["GitHub热门", "高星霸榜", "爆火项目", "技术风向"],
    icon: "GitBranch",
    alternatives: [
      { name: "Product Hunt", url: "https://www.producthunt.com/" },
      { name: "Reddit Programming", url: "https://www.reddit.com/r/programming/" }
    ],
    seoTraffic: { rank: 40, monthlyVisits: "220M", seoScore: 98 }
  },
  {
    id: "extra-other-ip138",
    name: "IP138 精确归属地查询",
    description: "国内最为经典和权威的公网 IP 物理归属地、网络运营商属性、域名 DNS 查询与站长高频网络排错综合诊断工具站。",
    url: "https://www.ip138.com/",
    category: "other",
    tags: ["IP查询", "国内归属地", "网络诊断", "经典站长工具"],
    icon: "Network",
    alternatives: [
      { name: "WhatIsMyIP", url: "https://www.whatismyip.com/" },
      { name: "IP.cn", url: "https://ip.cn/" }
    ],
    seoTraffic: { rank: 2500, monthlyVisits: "12M", seoScore: 89 }
  },
  {
    id: "extra-other-speedtest",
    name: "Speedtest 宽带在线测速",
    description: "Ookla 旗下的全球网络测速金牌标准，一键极速、精确诊断您当前连接线路的宽带上下行速度、数据抖动与延迟。",
    url: "https://www.speedtest.net/",
    category: "other",
    tags: ["宽带测速", "延迟检测", "网络诊断", "Ookla"],
    icon: "Activity",
    alternatives: [
      { name: "Fast.com (Netflix)", url: "https://fast.com/" },
      { name: "测速网", url: "https://www.cesu.net/" }
    ],
    seoTraffic: { rank: 110, monthlyVisits: "150M", seoScore: 97 }
  },
  {
    id: "extra-other-saasdb",
    name: "SaaS 软件数据库 (SaaSDB)",
    description: "搜集和深度对比国内外主流云端 SaaS 软件服务、收费标准、API 支持以及核心功能对比的综合型独立数据库平台。",
    url: "https://www.saasdb.com/",
    category: "other",
    tags: ["SaaS百科", "软件比价", "功能评测", "创投名录"],
    icon: "Columns",
    alternatives: [
      { name: "G2 Crowd", url: "https://www.g2.com/" },
      { name: "Capterra", url: "https://www.capterra.com/" }
    ],
    seoTraffic: { rank: 68000, monthlyVisits: "0.1M", seoScore: 80 }
  },
  {
    id: "extra-other-canva-video",
    name: "Canva 在线视频模板",
    description: "Canva 推出的在线零基础短视频和媒体片头动画拖拽编辑器，内置数万款自媒体、小红书和营销宣传片精美模版，一键高清下载。",
    url: "https://www.canva.cn/video/",
    category: "other",
    tags: ["零基础剪辑", "短视频模板", "营销动效", "片头制作"],
    icon: "Tv",
    alternatives: [
      { name: "剪映网页版", url: "https://www.capcut.cn/" },
      { name: "FlexClip", url: "https://www.flexclip.com/" }
    ],
    seoTraffic: { rank: 220, monthlyVisits: "8.5M", seoScore: 94 }
  }
];
