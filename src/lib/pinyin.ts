// Custom lightweight, high-performance Pinyin mapping for Chinese search matching.
const charToPinyin: Record<string, string> = {
  // Core Tool Names Characters
  '格': 'ge', '式': 'shi', '化': 'hua', '验': 'yan', '证': 'zheng',
  '编': 'bian', '码': 'ma', '解': 'jie',
  '强': 'qiang', '密': 'mi', '生': 'sheng', '成': 'cheng', '器': 'qi',
  '时': 'shi', '间': 'jian', '戳': 'chuo', '转': 'zhuan', '换': 'huan',
  '文': 'wen', '本': 'ben', '分': 'fen', '析': 'xi', '大': 'da', '小': 'xiao', '写': 'xie',
  '扣': 'kou', '子': 'zi',
  '云': 'yun',
  '飞': 'fei', '书': 'shu',
  '有': 'you', '道': 'dao', '翻': 'fan', '译': 'yi',
  '我': 'wo', '来': 'lai', '笔': 'bi', '记': 'ji',
  '浮': 'fu', '墨': 'mo',
  '在': 'zai', '线': 'xian', '思': 'si', '维': 'wei', '导': 'dao', '图': 'tu',
  '幕': 'mu', '布': 'bu', '纲': 'gang',
  '智': 'zhi', '能': 'neng', '剪': 'jian', '藏': 'cang',
  '中': 'zhong', '国': 'guo', '知': 'zhi', '网': 'wang',
  '站': 'zhan', '长': 'zhang', '之': 'zhi', '家': 'jia', '工': 'gong', '具': 'ju',
  '创': 'chuang', '意': 'yi', '社': 'she', '区': 'qu',

  // Additional Common Description & Tag Characters
  '百': 'bai', '度': 'du', '腾': 'teng', '讯': 'xun', '君': 'jun', '刀': 'dao', '蓝': 'lan', '湖': 'hu',
  '稿': 'gao', '定': 'ding', '设': 'she', '计': 'ji', '程': 'cheng', '序': 'xu', '阿': 'a',
  '里': 'li', '妈': 'ma', '测': 'ce', '速': 'su', '检': 'jian', '公': 'gong', '外': 'wai', '位': 'wei',
  '备': 'bei', '案': 'an', '查': 'cha', '询': 'xun', '权': 'quan', '重': 'zhong', '学': 'xue', '术': 'shu',
  '论': 'lun', '自': 'zi', '媒': 'mei', '体': 'ti', '客': 'ke', '服': 'fu', '坛': 'tan', '协': 'xie',
  '同': 'tong', '合': 'he', '作': 'zuo', '端': 'duan', '无': 'wu', '损': 'sun', '压': 'ya', '缩': 'suo',
  '像': 'xiang', '视': 'shi', '觉': 'jue', '美': 'mei', '原': 'yuan', '型': 'xing', '插': 'cha', '画': 'hua',
  '动': 'dong', '配': 'pei', '色': 'se', '抠': 'kou', '字': 'zi', '排': 'pai', '版': 'ban',
  '全': 'quan', '万': 'wan', '音': 'yin', '乐': 'yue', '制': 'zhi', '声': 'sheng', '词': 'ci',
  '曲': 'qu', '频': 'pin', '录': 'lu', '播': 'bo', '量': 'liang', '交': 'jiao', '互': 'hu', '沙': 'sha',
  '盒': 'he', '常': 'chang', '用': 'yong', '安': 'an', '保': 'bao', '护': 'hu', '络': 'luo'
};

/**
 * Returns the pinyin full string and pinyin initials for a given text.
 */
export function getPinyinInfo(text: string): { full: string; initials: string } {
  let full = "";
  let initials = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const py = charToPinyin[char];
    if (py) {
      full += py;
      initials += py[0];
    } else {
      // Keep lowercase alphanumeric values
      if (/[a-zA-Z0-9]/.test(char)) {
        const lower = char.toLowerCase();
        full += lower;
        initials += lower;
      }
    }
  }

  return { full, initials };
}

/**
 * Checks if the search query matches the tool's name or description using Pinyin.
 */
export function matchPinyin(toolName: string, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return false;

  const { full, initials } = getPinyinInfo(toolName);

  // 1. Exact match on full combined pinyin (e.g. "wenben" matches "wenbenfenxi...")
  // 2. Match on initials (e.g. "wb" matches "wbfxdxxzh")
  return full.includes(q) || initials.includes(q);
}
