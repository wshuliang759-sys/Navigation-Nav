export interface ToolTranslation {
  name: string;
  description: string;
  tags: string[];
}

export const presetToolsTranslations: Record<string, ToolTranslation> = {
  "builtin-json": {
    name: "JSON Formatter & Validator",
    description: "Format, compress, and validate JSON data locally with syntax highlighting and fold outlines.",
    tags: ["local-tool", "JSON", "formatter", "developer", "offline"]
  },
  "builtin-base64": {
    name: "Base64 Encoder & Decoder",
    description: "Encode text to Base64 or decode Base64 strings back to text locally in your browser.",
    tags: ["local-tool", "Base64", "encoder", "decoder", "security"]
  },
  "builtin-password": {
    name: "Strong Password Generator",
    description: "Generate highly secure random passwords locally with customizable length and character sets.",
    tags: ["local-tool", "password", "security", "randomizer", "offline"]
  },
  "builtin-timestamp": {
    name: "UNIX Timestamp Converter",
    description: "Convert UNIX timestamps to local human-readable time and vice-versa in real-time.",
    tags: ["local-tool", "timestamp", "timezone", "epoch", "Date"]
  },
  "builtin-text": {
    name: "Text Analyzer & Case Converter",
    description: "Count words, lines, characters, and convert variable names to camelCase, snake_case, etc.",
    tags: ["local-tool", "wordcount", "camelCase", "snake_case", "Text"]
  },
  "ai-studio": {
    name: "Google AI Studio",
    description: "Google's official web-based prototyping environment to develop and retrieve API keys for Gemini models.",
    tags: ["Google", "Gemini", "API", "Free-Quota", "AI-Development"]
  },
  "ai-gemini": {
    name: "Gemini AI",
    description: "Google's next-generation native multimodal conversational model for audio, video, code, and reasoning.",
    tags: ["Google", "Gemini", "LLM", "Multimodal"]
  },
  "ai-chatgpt": {
    name: "ChatGPT",
    description: "OpenAI's groundbreaking conversational AI interface for smart writing, coding, and general inquiries.",
    tags: ["OpenAI", "GPT-4o", "chat", "writing"]
  },
  "ai-claude": {
    name: "Claude AI",
    description: "Anthropic's high-intelligence LLM, leading in complex code generation, logical reasoning, and long texts.",
    tags: ["Anthropic", "Claude-3.5", "coding", "academic"]
  },
  "ai-deepseek": {
    name: "DeepSeek AI",
    description: "An incredibly cost-effective open-source mixture-of-experts model sweepingly powerful in math and coding.",
    tags: ["Open-Source", "DeepSeek", "Reasoning", "Coding"]
  },
  "ai-kimi": {
    name: "Kimi Chat",
    description: "An AI assistant specialized in analyzing extremely long text files, complex papers, and real-time search.",
    tags: ["Long-Text", "Moonshot", "document-parser", "web-search"]
  },
  "ai-v0": {
    name: "v0.dev",
    description: "Vercel's generative front-end engine that outputs production-grade React, Tailwind, and Shadcn UI components.",
    tags: ["UI-Generation", "Vercel", "front-end", "React", "Tailwind"]
  },
  "ai-midjourney": {
    name: "Midjourney",
    description: "Top-tier AI generative model for realistic photography and highly aesthetic digital art in Discord.",
    tags: ["AI-Art", "design", "creative"]
  },
  "ai-huggingface": {
    name: "Hugging Face",
    description: "The largest global open-source community hosting machine learning models, datasets, and demonstrative Spaces.",
    tags: ["ML-Community", "datasets", "transformers", "open-source"]
  },
  "ai-replicate": {
    name: "Replicate",
    description: "Run, fine-tune, and host open-source AI models in the cloud via lightweight serverless APIs.",
    tags: ["AI-API", "cloud-inference", "open-source-models", "Llama"]
  },
  "ai-phind": {
    name: "Phind AI",
    description: "An AI-powered search engine built for developers, giving precise answers with up-to-date code references.",
    tags: ["AI-Search", "developer-assistant", "programming"]
  },
  "ai-perplexity": {
    name: "Perplexity AI",
    description: "Industry-leading conversational search engine that synthesizes web pages into cited structured reports.",
    tags: ["AI-Search", "knowledge-graph", "academic", "citations"]
  },
  "ai-leonardo": {
    name: "Leonardo.ai",
    description: "An artistic generative platform utilizing fine-tuned SDXL models for 3D textures, game assets, and characters.",
    tags: ["AI-Art", "game-assets", "creative", "models"]
  },
  "ai-coze": {
    name: "Coze",
    description: "An advanced conversational agent development platform by ByteDance supporting easy multi-channel publishing.",
    tags: ["AI-Agent", "Bot", "ByteDance", "Low-Code"]
  },
  "ai-dify": {
    name: "Dify.ai",
    description: "An open-source LLMOps platform for creating agents, visual workflows, and secure RAG search pipelines.",
    tags: ["LLMOps", "AI-Agent", "open-source-RAG", "developer-portal"]
  },
  "ai-cursor": {
    name: "Cursor AI",
    description: "A highly acclaimed AI-first code editor natively embedding GPT-4 and Claude for automated coding workflows.",
    tags: ["AI-Editor", "VSCode-Fork", "auto-coding", "developer-tool"]
  },
  "ai-suno": {
    name: "Suno AI",
    description: "Generate broadcast-quality songs with full instrumentation, vocals, and lyrics from single text prompts.",
    tags: ["AI-Music", "audio-generator", "song-maker", "creative"]
  },
  "ai-udio": {
    name: "Udio Music",
    description: "An elite AI music generator with pristine vocals, stem splitting, and detailed lyric alignment.",
    tags: ["AI-Music", "vocals", "creative-audio", "HD-sound"]
  },
  "ai-luma": {
    name: "Luma Dream Machine",
    description: "A physically accurate cinematic video generator producing realistic, highly continuous video clips.",
    tags: ["AI-Video", "cinematic", "multimodal", "physics-engine"]
  },
  "dev-github": {
    name: "GitHub",
    description: "The world's largest version control hosting service with unified CI/CD, Issues, and GitHub Actions.",
    tags: ["code-hosting", "Git", "open-source", "collaboration"]
  },
  "dev-stackoverflow": {
    name: "Stack Overflow",
    description: "The definitive programmer community to search, discuss, and resolve real-world software engineering errors.",
    tags: ["tech-community", "Q&A", "debugging"]
  },
  "dev-vercel": {
    name: "Vercel",
    description: "The premier cloud platform for front-end frameworks, offering zero-config deployments optimized for Next.js.",
    tags: ["frontend-deployment", "Serverless", "Next.js", "CI-CD"]
  },
  "dev-regex101": {
    name: "Regex101",
    description: "A robust online regular expression tester with live step-by-step debugger, explanation, and code generation.",
    tags: ["regex", "debugger", "matching", "explanation"]
  },
  "dev-caniuse": {
    name: "Can I Use",
    description: "Up-to-date web standard browser compatibility tables with detailed share percentages across multiple browsers.",
    tags: ["compatibility", "CSS", "HTML5", "browser-support"]
  },
  "dev-carbon": {
    name: "Carbon Code Snippets",
    description: "Easily transform your raw code snippets into beautiful, highly customizable screenshots with shadows.",
    tags: ["beautifier", "code-image", "sharing", "presentation"]
  },
  "dev-tinypng": {
    name: "TinyPNG",
    description: "Smart lossy compression to dramatically reduce image files size of WEBP, JPEG, and PNG without quality loss.",
    tags: ["compression", "web-optimization", "PNG", "JPEG"]
  },
  "dev-devdocs": {
    name: "DevDocs API",
    description: "Combines multiple API documentations in a single, lightning-fast offline-ready web interface.",
    tags: ["official-docs", "offline-search", "API-reference", "speed"]
  },
  "dev-dnschecker": {
    name: "DNS Checker",
    description: "Perform global DNS propagation lookup and validation against multiple servers worldwide.",
    tags: ["DNS", "DevOps", "propagation", "network"]
  },
  "dev-bootcdn": {
    name: "BootCDN",
    description: "A stable, high-speed open-source frontend asset CDN network mirroring cdnjs for users in China.",
    tags: ["Chinese-speedup", "static-assets", "CDN"]
  },
  "dev-gitlab": {
    name: "GitLab",
    description: "The unified platform for DevOps, source code management, and robust self-hosted Git repositories.",
    tags: ["code-hosting", "CI-CD", "DevOps", "self-hosted"]
  },
  "dev-postman": {
    name: "Postman API Platform",
    description: "Comprehensive platform for API design, mock servers, documentation, and high-performance automated testing.",
    tags: ["API-testing", "API-docs", "Mocking", "collaboration"]
  },
  "dev-hoppscotch": {
    name: "Hoppscotch",
    description: "A lightweight, beautiful, completely free and open-source web-based API development and testing tool.",
    tags: ["lightweight-API", "open-source", "web-testing", "Hoppscotch"]
  },
  "dev-render": {
    name: "Render Platform",
    description: "A modern, zero-maintenance cloud host to run databases, static pages, and Node/Python background web services.",
    tags: ["cloud-host", "Docker-deploy", "auto-build", "free-database"]
  },
  "dev-stackblitz": {
    name: "StackBlitz",
    description: "Boot full-stack Node.js environments and Next.js applications directly inside browser tabs in seconds.",
    tags: ["WebContainers", "online-IDE", "fast-boot", "online-Node"]
  },
  "dev-codesandbox": {
    name: "CodeSandbox",
    description: "An instant cloud development platform with pre-configured container sandboxes for rapid collaborative prototyping.",
    tags: ["online-coding", "sandbox", "prototyping", "collaboration"]
  },
  "dev-jwt": {
    name: "JWT.io",
    description: "Easily decode, verify, and validate JSON Web Token (JWT) payloads and sign-key validity locally.",
    tags: ["JWT", "authentication", "token-decoder", "security"]
  },
  "dev-dbdiagram": {
    name: "dbdiagram.io",
    description: "A fast declarative tool to draw highly styled database entity-relationship (ER) diagrams using text DSL.",
    tags: ["ER-diagram", "database-design", "SQL-exporter", "visualization"]
  },
  "dev-jsoncrack": {
    name: "JSON Crack",
    description: "Visualize large complex JSON structures into incredibly interactive 2D/3D trees and nested nodes.",
    tags: ["JSON-viewer", "data-structures", "debugging", "cool-visual"]
  },
  "dev-raycast": {
    name: "Raycast Launcher",
    description: "An ultra-fast, extensible alternative to macOS Spotlight, empowering developers with full command shortcuts.",
    tags: ["macOS-tool", "launcher", "productivity", "developer-favorite"]
  },
  "dev-cloudflare": {
    name: "Cloudflare",
    description: "The global web infrastructure suite providing top-tier CDN, authoritative DNS, and DDoS firewalls for free.",
    tags: ["DNS", "CDN", "DDoS-protection", "free-SSL"]
  },
  "dev-sqlite": {
    name: "SQLite Viewer",
    description: "Query and inspect SQLite database files directly in your web browser without downloading any software.",
    tags: ["SQLite", "browser-viewer", "database", "offline-parse"]
  },
  "design-figma": {
    name: "Figma",
    description: "The absolute standard for collaborative, web-based UI/UX vector design with excellent hand-off tools.",
    tags: ["UI-design", "prototyping", "collaboration", "vector"]
  },
  "design-dribbble": {
    name: "Dribbble",
    description: "A premier creative network and platform to discover modern design, illustration, and brand trends.",
    tags: ["inspiration", "UI-visuals", "illustration", "portfolio"]
  },
  "design-behance": {
    name: "Behance",
    description: "Adobe's massive social showcase for creative professionals spanning branding, industrial design, and photography.",
    tags: ["portfolio", "Adobe", "all-design"]
  },
  "design-lucide": {
    name: "Lucide Icons",
    description: "A clean, beautiful, open-source geometric icon library fully optimized for React, Vue, and Tailwind.",
    tags: ["open-source-icons", "SVG", "minimalist", "React"]
  },
  "design-unsplash": {
    name: "Unsplash",
    description: "The internet's source of high-resolution, completely royalty-free, commercial-use stock photography.",
    tags: ["free-photos", "high-res", "commercial-use"]
  },
  "design-coolors": {
    name: "Coolors Palette Generator",
    description: "The super-fast color scheme generator to create, adjust, and share beautiful color harmonies in one click.",
    tags: ["color-palette", "color-match", "gradients", "one-click"]
  },
  "design-tailwindcss": {
    name: "Tailwind Play",
    description: "The official online playground for Tailwind CSS, featuring live compilation, configuration editing, and share links.",
    tags: ["Tailwind", "CSS-sandbox", "frontend-testing"]
  },
  "design-removebg": {
    name: "Remove.bg",
    description: "Fully automated image background removal in seconds, retaining fine hair details with professional AI.",
    tags: ["bg-removal", "portrait-crop", "AI-crop"]
  },
  "design-canva": {
    name: "Canva",
    description: "A user-friendly web-based graphic design tool with thousands of templates for flyers, posters, and slides.",
    tags: ["fast-design", "templates", "creative-art", "easy-editor"]
  },
  "design-iconify": {
    name: "Iconify",
    description: "Unified open-source icon framework index with over 100,000 SVG, Vue, JSX, and CSS icons under one portal.",
    tags: ["universal-icons", "CSS-icons", "design-resource", "cross-platform"]
  },
  "design-fontspace": {
    name: "FontSpace",
    description: "Massive directory of over 100,000 free, commercial-use fonts with elegant custom text previews.",
    tags: ["commercial-fonts", "english-typography", "free-download"]
  },
  "design-googlefonts": {
    name: "Google Fonts",
    description: "Google's free interactive directory of open-source web fonts, perfect for clean screen rendering.",
    tags: ["open-source-fonts", "web-fonts", "Google-product", "multilingual"]
  },
  "design-flaticon": {
    name: "Flaticon",
    description: "A massive, widely praised database of high-quality vector icons, flat graphics, and UI stickers.",
    tags: ["flat-icons", "PNG-graphics", "UI-details", "illustrations"]
  },
  "design-lottiefiles": {
    name: "LottieFiles Animations",
    description: "Lightweight, interactive vector animations using Lottie JSON format to make mobile and web interfaces alive.",
    tags: ["vector-animation", "JSON-effects", "GIFs", "loading-spinner"]
  },
  "design-freepik": {
    name: "Freepik Creative Assets",
    description: "Comprehensive creative ecosystem hosting stock photos, vector files, and layered PSD files for commercial projects.",
    tags: ["vectors", "PSD-templates", "graphic-art", "illustrations"]
  },
  "design-pixabay": {
    name: "Pixabay Free Media",
    description: "A robust repository of high-quality, completely copyright-free stock photos, video loops, and music tracks.",
    tags: ["free-photos", "4K-video", "free-music", "media"]
  },
  "design-photopea": {
    name: "Photopea",
    description: "An incredibly accurate web-based alternative to Adobe Photoshop, supporting raw PSD, Sketch, and XD formats.",
    tags: ["online-PS", "photo-editor", "PSD-reader", "completely-free"]
  },
  "design-sketch": {
    name: "Sketch",
    description: "The classic vector design tool built exclusively for macOS, dedicated to modern mobile and web UI/UX design.",
    tags: ["UI-design", "macOS-exclusive", "vector-art", "prototyping"]
  },
  "prod-notion": {
    name: "Notion",
    description: "A beautiful, highly versatile workspace unifying documents, databases, notes, and collaborative projects.",
    tags: ["docs", "database", "knowledge-base", "wiki"]
  },
  "prod-deepl": {
    name: "DeepL Translate",
    description: "Widely regarded as the world's most precise, natural, and context-aware multilingual translation tool.",
    tags: ["translator", "academic", "writing-assistant"]
  },
  "prod-feishu": {
    name: "Lark / Feishu",
    description: "A leading modern collaboration platform combining messaging, online sheets, calendar, and workflows.",
    tags: ["collab-docs", "chats", "sheets", "video-calls"]
  },
  "prod-pdf24": {
    name: "PDF24 Tools",
    description: "Completely free, watermark-free online tools to edit, split, merge, compress, and convert PDF documents.",
    tags: ["PDF-editor", "PDF-compress", "free-PDF", "format-converter"]
  },
  "prod-processon": {
    name: "ProcessOn",
    description: "An intuitive collaborative web drawing tool for mind maps, system flowcharts, and corporate architectures.",
    tags: ["mindmaps", "flowcharts", "online-drawing", "diagram"]
  },
  "prod-mdnice": {
    name: "Markdown Nice",
    description: "Easily write standard Markdown text and copy beautifully rendered, formatted CSS themes for newsletters.",
    tags: ["Markdown-style", "blog-beautifier", "newsletter"]
  },
  "prod-wolai": {
    name: "Wolai Notes",
    description: "A block-based knowledge directory optimized for local speeds, note relations, and multi-user wikis.",
    tags: ["structured-notes", "double-link", "wiki", "cloud-sync"]
  },
  "prod-obsidian": {
    name: "Obsidian",
    description: "A fan-favorite, local-first personal knowledge base saving files in secure local Markdown databases.",
    tags: ["local-first", "mind-graph", "E2E-encryption", "customizable"]
  },
  "prod-flomo": {
    name: "flomo notes",
    description: "A minimalist, card-based note taking tool designed to let you capture fleeting thoughts without pressure.",
    tags: ["micro-notes", "card-notes", "inspiration-capture"]
  },
  "prod-xmind": {
    name: "XMind",
    description: "A world-class mind mapping and brainstorming software with high-quality visual structures and templates.",
    tags: ["mindmapping", "brainstorming", "presentation", "cross-platform"]
  },
  "prod-mubu": {
    name: "Mubu",
    description: "An interactive outliner tool that lets you organize ideas hierarchically and convert them to mind maps in one click.",
    tags: ["outliner", "structured-thinking", "mindmap-converter"]
  },
  "prod-drawio": {
    name: "Draw.io (Diagrams.net)",
    description: "The ultimate free, open-source professional flowchart and system diagramming tool.",
    tags: ["completely-free", "open-source-flowcharts", "architecture-draw"]
  },
  "prod-cubox": {
    name: "Cubox",
    description: "A beautiful, smart bookmarking database to clip articles, highlight paragraphs, and read without ads.",
    tags: ["web-clipper", "smart-read", "highlight-notes"]
  },
  "prod-docsmall": {
    name: "Docsmall",
    description: "A sleek online batch compressor for images, PDFs, and animated GIFs without quality degradation.",
    tags: ["compressor", "PDF-compress", "batch-process"]
  },
  "prod-smallpdf": {
    name: "Smallpdf",
    description: "The classic all-in-one PDF platform supporting unlock, split, conversion, and digital signatures easily.",
    tags: ["PDF-suite", "online-converter", "electronic-signature"]
  },
  "prod-grammarly": {
    name: "Grammarly",
    description: "A globally leading AI editor to audit spelling, tone, and grammar in documents, emails, and papers.",
    tags: ["spell-check", "grammar-corrector", "writing-assistant"]
  },
  "other-speedtest": {
    name: "Speedtest",
    description: "The gold standard online utility to test bandwidth download speed, upload speed, and packet latency.",
    tags: ["speedtest", "ping", "broadband-utility"]
  },
  "other-whatismyip": {
    name: "What Is My IP",
    description: "Find your public IPv4/IPv6 IP address, geographic coordinates, ISP, and network gateway parameters.",
    tags: ["public-IP", "geo-location", "DNS-leak", "network-lookup"]
  },
  "other-excalidraw": {
    name: "Excalidraw",
    description: "An incredibly fluid, virtual hand-drawn style collaborative whiteboard ideal for concept drafting.",
    tags: ["hand-drawn", "whiteboard", "wireframe", "collab"]
  },
  "other-cnki": {
    name: "CNKI",
    description: "The largest national academic database of Chinese journals, PhD theses, and scientific literature.",
    tags: ["academic-journals", "papers", "literature"]
  },
  "other-scholar": {
    name: "Google Scholar",
    description: "Google's free search portal indexing millions of cross-discipline academic publications, books, and theses.",
    tags: ["papers-search", "academic-citations", "journal-tracking"]
  },
  "other-github-trending": {
    name: "GitHub Trending",
    description: "The daily scoreboard tracking the most popular open-source repositories and trending tech globally.",
    tags: ["open-source-trends", "tech-hubs", "hottest-projects"]
  },
  "other-producthunt": {
    name: "Product Hunt",
    description: "The definitive daily ranking board for global independent developers to launch, upvote, and discover apps.",
    tags: ["app-launch", "startup", "geek-community"]
  },
  "other-similarweb": {
    name: "Similarweb",
    description: "An outstanding web analytics platform mapping traffic volume, organic SEO, and audience demographics.",
    tags: ["web-analytics", "SEO-metrics", "demographics", "traffic"]
  },
  "other-chinaz": {
    name: "Chinaz",
    description: "A legacy Chinese webmaster hub providing detailed domain ICP checks, search rankings, and web tools.",
    tags: ["ICP-lookup", "SEO-rank", "Chinese-webmasters"]
  },
  "other-duckduckgo": {
    name: "DuckDuckGo",
    description: "A highly respected independent search engine built on preserving privacy and refusing trackers.",
    tags: ["privacy-search", "geek-tool", "no-track"]
  },
  "other-notionnext": {
    name: "NotionNext",
    description: "A fantastic Next.js-based framework to convert Notion pages into beautiful, SEO-optimized, free blog sites.",
    tags: ["Notion-blog", "deployment", "SEO-ready", "free-static"]
  },
  "other-codepen": {
    name: "CodePen",
    description: "A collaborative social platform for frontend developers to write, share, and showcase HTML/CSS/JS snippets.",
    tags: ["HTML-sandbox", "CSS-animations", "frontend-social"]
  },
  "other-v2ex": {
    name: "V2EX",
    description: "An elite technical community for independent developers, system admins, geeks, and digital nomads.",
    tags: ["tech-forum", "developer-chat", "job-listings"]
  }
};
