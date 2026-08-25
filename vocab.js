// vocab.js
// Vocabulary data for the Chinese Vocabulary Review app.
//
// To add or remove a word, just add or remove an object from this array.
// Each object has four fields:
//   chinese - the Chinese character(s)
//   pinyin  - the pinyin (with tone marks)
//   meaning - a short English definition
//   note    - optional extra info (part of speech + lesson reference)
//
// The order of this array is the "normal" browsing order used by
// Previous / Next when Shuffle is off.

const VOCAB = [
  // Lesson 1, Dialogue 1
  {
    chinese: "你",
    pinyin: "nǐ",
    meaning: "you (singular)",
    note: "你好 nǐ hǎo",
  },
  {
    chinese: "好",
    pinyin: "hǎo",
    meaning: "good; well; fine; OK",
    note: "你好 nǐ hǎo",
  },
  {
    chinese: "我",
    pinyin: "wǒ",
    meaning: "I; me",
    note: "我很好 wǒ hěn hǎo",
  },
  {
    chinese: "叫",
    pinyin: "jiào",
    meaning: "to be called; to call",
    note: "我叫王小云 wǒ jiào Wáng Xiǎoyún",
  },
  {
    chinese: "请问",
    pinyin: "qǐngwèn",
    meaning: "may I ask; excuse me",
    note: "请问你叫什么名字 qǐngwèn nǐ jiào shénme míngzi",
  },
  {
    chinese: "请",
    pinyin: "qǐng",
    meaning: "please; to request; to invite",
    note: "请坐 qǐng zuò",
  },
  {
    chinese: "问",
    pinyin: "wèn",
    meaning: "to ask",
    note: "问好 wèn hǎo",
  },
  {
    chinese: "什么",
    pinyin: "shénme",
    meaning: "what",
    note: "你叫什么名字 nǐ jiào shénme míngzi",
  },
  {
    chinese: "名字",
    pinyin: "míngzi",
    meaning: "name",
    note: "你的名字 nǐ de míngzi",
  },
  {
    chinese: "姓",
    pinyin: "xìng",
    meaning: "one's surname is / surname",
    note: "贵姓 guìxìng",
  },
  {
    chinese: "认识",
    pinyin: "rènshi",
    meaning: "to know",
    note: "很高兴认识你 hěn gāoxìng rènshi nǐ",
  },
  {
    chinese: "很",
    pinyin: "hěn",
    meaning: "very",
    note: "我很好 wǒ hěn hǎo",
  },
  {
    chinese: "高兴",
    pinyin: "gāoxìng",
    meaning: "happy",
    note: "很高兴 hěn gāoxìng",
  },
  {
    chinese: "也",
    pinyin: "yě",
    meaning: "also; too",
    note: "我也很好 wǒ yě hěn hǎo",
  },
  {
    chinese: "马大为",
    pinyin: "Mǎ Dàwéi",
    meaning: "Ma Dawei, name of an American student",
    note: "我叫马大为 wǒ jiào Mǎ Dàwéi",
  },
  {
    chinese: "宋华",
    pinyin: "Sòng Huá",
    meaning: "Song Hua, name of a Chinese student",
    note: "这是宋华 zhè shì Sòng Huá",
  },

  // Lesson 1, Dialogue 2
  {
    chinese: "在",
    pinyin: "zài",
    meaning: "to be (here, there); to be (in, on, at)",
    note: "在这儿 zài zhèr",
  },
  {
    chinese: "吗",
    pinyin: "ma",
    meaning: "a modal particle used for a question expecting a yes-no answer",
    note: "你好吗 nǐ hǎo ma",
  },
  {
    chinese: "进",
    pinyin: "jìn",
    meaning: "to enter",
    note: "请进 qǐng jìn",
  },
  {
    chinese: "坐",
    pinyin: "zuò",
    meaning: "to sit",
    note: "请坐 qǐng zuò",
  },
  {
    chinese: "谢谢",
    pinyin: "xièxie",
    meaning: "to thank",
    note: "谢谢你 xièxie nǐ",
  },
  {
    chinese: "最近",
    pinyin: "zuìjìn",
    meaning: "lately; recently",
    note: "你最近怎么样 nǐ zuìjìn zěnmeyàng",
  },
  {
    chinese: "怎么样",
    pinyin: "zěnmeyàng",
    meaning: "how (is, are); how about",
    note: "你怎么样 nǐ zěnmeyàng",
  },
  {
    chinese: "呢",
    pinyin: "ne",
    meaning: "a modal particle used for an elliptical question",
    note: "你呢 nǐ ne",
  },
  {
    chinese: "忙",
    pinyin: "máng",
    meaning: "busy",
    note: "很忙 hěn máng",
  },
  {
    chinese: "不",
    pinyin: "bù",
    meaning: "not; no",
    note: "不忙 bù máng",
  },
  {
    chinese: "太",
    pinyin: "tài",
    meaning: "too; extremely",
    note: "太忙 tài máng",
  },
  {
    chinese: "他",
    pinyin: "tā",
    meaning: "he; him",
    note: "他很好 tā hěn hǎo",
  },
  {
    chinese: "丁力波",
    pinyin: "Dīng Lìbō",
    meaning: "Ding Libo, name of a Canadian student",
    note: "这是丁力波 zhè shì Dīng Lìbō",
  },
  {
    chinese: "林娜",
    pinyin: "Lín Nà",
    meaning: "Lin Na, name of a British student",
    note: "我叫林娜 wǒ jiào Lín Nà",
  },

  // Lesson 2, Dialogue 1
  {
    chinese: "老师",
    pinyin: "lǎoshī",
    meaning: "teacher",
    note: "老师好 lǎoshī hǎo",
  },
  {
    chinese: "早上",
    pinyin: "zǎoshang",
    meaning: "morning",
    note: "早上好 zǎoshang hǎo",
  },
  {
    chinese: "早",
    pinyin: "zǎo",
    meaning: "early",
    note: "你早 nǐ zǎo",
  },
  {
    chinese: "你们",
    pinyin: "nǐmen",
    meaning: "you (plural)",
    note: "你们好 nǐmen hǎo",
  },
  {
    chinese: "们",
    pinyin: "men",
    meaning: "plural suffix",
    note: "朋友们 péngyoumen",
  },
  {
    chinese: "这",
    pinyin: "zhè",
    meaning: "this",
    note: "这是我的朋友 zhè shì wǒ de péngyou",
  },
  {
    chinese: "是",
    pinyin: "shì",
    meaning: "to be; is/am/are...",
    note: "我是美国人 wǒ shì Měiguó rén",
  },
  {
    chinese: "朋友",
    pinyin: "péngyou",
    meaning: "friend",
    note: "好朋友 hǎo péngyou",
  },
  {
    chinese: "刚",
    pinyin: "gāng",
    meaning: "just",
    note: "我刚到 wǒ gāng dào",
  },
  {
    chinese: "到",
    pinyin: "dào",
    meaning: "to reach; to arrive",
    note: "刚到北京 gāng dào Běijīng",
  },
  {
    chinese: "您",
    pinyin: "nín",
    meaning: "you (singular, polite form)",
    note: "您好 nín hǎo",
  },
  {
    chinese: "贵姓",
    pinyin: "guìxìng",
    meaning: "one's (honorable) surname",
    note: "您贵姓 nín guìxìng",
  },
  {
    chinese: "哪",
    pinyin: "nǎ",
    meaning: "which",
    note: "你是哪国人 nǐ shì nǎ guó rén",
  },
  {
    chinese: "国",
    pinyin: "guó",
    meaning: "country",
    note: "中国 Zhōngguó",
  },
  {
    chinese: "人",
    pinyin: "rén",
    meaning: "person",
    note: "北京人 Běijīng rén",
  },
  {
    chinese: "学习",
    pinyin: "xuéxí",
    meaning: "to study; to learn",
    note: "学习汉语 xuéxí Hànyǔ",
  },
  {
    chinese: "学",
    pinyin: "xué",
    meaning: "to study (usually with an object)",
    note: "学汉语 xué Hànyǔ",
  },
  {
    chinese: "汉语",
    pinyin: "Hànyǔ",
    meaning: "Chinese (usually referring to Mandarin)",
    note: "学汉语 xué Hànyǔ",
  },
  {
    chinese: "再见",
    pinyin: "zàijiàn",
    meaning: "goodbye",
    note: "老师再见 lǎoshī zàijiàn",
  },
  {
    chinese: "陈",
    pinyin: "Chén",
    meaning: "Chen, a surname",
    note: "陈老师 Chén lǎoshī",
  },
  {
    chinese: "北京",
    pinyin: "Běijīng",
    meaning: "Beijing",
    note: "去北京 qù Běijīng",
  },
  {
    chinese: "美国",
    pinyin: "Měiguó",
    meaning: "the United States",
    note: "美国人 Měiguó rén",
  },

  // Lesson 2, Dialogue 2
  {
    chinese: "点心",
    pinyin: "diǎnxin",
    meaning: "snacks; dim sum",
    note: "吃点心 chī diǎnxin",
  },
  {
    chinese: "好吃",
    pinyin: "hǎochī",
    meaning: "delicious; tasty",
    note: "很好吃 hěn hǎochī",
  },
  {
    chinese: "吃",
    pinyin: "chī",
    meaning: "to eat",
    note: "吃米饭 chī mǐfàn",
  },
  {
    chinese: "爸爸",
    pinyin: "bàba",
    meaning: "dad; father",
    note: "我爸爸 wǒ bàba",
  },
  {
    chinese: "喜欢",
    pinyin: "xǐhuan",
    meaning: "to like",
    note: "我喜欢 wǒ xǐhuan",
  },
  {
    chinese: "和",
    pinyin: "hé",
    meaning: "and",
    note: "我和你 wǒ hé nǐ",
  },
  {
    chinese: "米饭",
    pinyin: "mǐfàn",
    meaning: "(cooked) rice",
    note: "吃米饭 chī mǐfàn",
  },
  {
    chinese: "饭",
    pinyin: "fàn",
    meaning: "(cooked) rice; meal",
    note: "吃饭 chī fàn",
  },
  {
    chinese: "妈妈",
    pinyin: "māma",
    meaning: "mom; mother",
    note: "我妈妈 wǒ māma",
  },
  {
    chinese: "她",
    pinyin: "tā",
    meaning: "she; her",
    note: "她是老师 tā shì lǎoshī",
  },
  {
    chinese: "面条",
    pinyin: "miàntiáo",
    meaning: "noodles",
    note: "吃面条 chī miàntiáo",
  },
  {
    chinese: "饺子",
    pinyin: "jiǎozi",
    meaning: "jiaozi; dumpling",
    note: "吃饺子 chī jiǎozi",
  },
  {
    chinese: "包子",
    pinyin: "bāozi",
    meaning: "baozi; steamed stuffed bun",
    note: "吃包子 chī bāozi",
  },
  {
    chinese: "大",
    pinyin: "dà",
    meaning: "big",
    note: "大包子 dà bāozi",
  },
  {
    chinese: "小",
    pinyin: "xiǎo",
    meaning: "small",
    note: "小饺子 xiǎo jiǎozi",
  },
  {
    chinese: "看",
    pinyin: "kàn",
    meaning: "to look at; to see",
    note: "你看 nǐ kàn",
  },
  {
    chinese: "那",
    pinyin: "nà",
    meaning: "that",
    note: "那是谁 nà shì shéi",
  },
  {
    chinese: "都",
    pinyin: "dōu",
    meaning: "all; both",
    note: "我们都好 wǒmen dōu hǎo",
  },
  {
    chinese: "要",
    pinyin: "yào",
    meaning: "to want; would like",
    note: "我要点心 wǒ yào diǎnxin",
  },
  {
    chinese: "上海",
    pinyin: "Shànghǎi",
    meaning: "Shanghai",
    note: "上海人 Shànghǎi rén",
  },
  {
    chinese: "王小云",
    pinyin: "Wáng Xiǎoyún",
    meaning: "Wang Xiaoyun, name of a Chinese student",
    note: "我叫王小云 wǒ jiào Wáng Xiǎoyún",
  },
  {
    chinese: "家",
    pinyin: "jiā",
    meaning: "home; family",
    note: "我家 wǒ jiā",
  },

  {
    chinese: "有",
    pinyin: "yǒu",
    meaning: "to have; there is/are",
    note: "我有一个哥哥 wǒ yǒu yí ge gēge",
  },

  {
    chinese: "几",
    pinyin: "jǐ",
    meaning: "how many; several",
    note: "你家有几口人？nǐ jiā yǒu jǐ kǒu rén?",
  },

  {
    chinese: "口",
    pinyin: "kǒu",
    meaning: "measure word for members of a household",
    note: "三口人 sān kǒu rén",
  },

  {
    chinese: "的",
    pinyin: "de",
    meaning: "possessive particle; of",
    note: "我的 wǒ de",
  },

  {
    chinese: "照片",
    pinyin: "zhàopiàn",
    meaning: "photo; photograph",
    note: "我的照片 wǒ de zhàopiàn",
  },

  {
    chinese: "做",
    pinyin: "zuò",
    meaning: "to do; to make",
    note: "做工作 zuò gōngzuò",
  },

  {
    chinese: "工作",
    pinyin: "gōngzuò",
    meaning: "work; job",
    note: "做工作 zuò gōngzuò",
  },

  {
    chinese: "医生",
    pinyin: "yīshēng",
    meaning: "doctor",
    note: "他是医生 tā shì yīshēng",
  },

  {
    chinese: "弟弟",
    pinyin: "dìdi",
    meaning: "younger brother",
    note: "我的弟弟 wǒ de dìdi",
  },

  {
    chinese: "哥哥",
    pinyin: "gēge",
    meaning: "older brother",
    note: "我的哥哥 wǒ de gēge",
  },

  {
    chinese: "一共",
    pinyin: "yígòng",
    meaning: "altogether; in total",
    note: "一共三个人 yígòng sān ge rén",
  },

  {
    chinese: "个",
    pinyin: "gè",
    meaning: "general measure word",
    note: "一个哥哥 yí ge gēge",
  },

  {
    chinese: "两",
    pinyin: "liǎng",
    meaning: "two; both",
    note: "两个妹妹 liǎng ge mèimei",
  },

  {
    chinese: "姐姐",
    pinyin: "jiějie",
    meaning: "older sister",
    note: "我的姐姐 wǒ de jiějie",
  },

  {
    chinese: "还",
    pinyin: "hái",
    meaning: "still; also; in addition",
    note: "我还有一个弟弟 wǒ hái yǒu yí ge dìdi",
  },

  {
    chinese: "谁",
    pinyin: "shéi",
    meaning: "who",
    note: "他是谁？tā shì shéi?",
  },

  {
    chinese: "妹妹",
    pinyin: "mèimei",
    meaning: "younger sister",
    note: "我的妹妹 wǒ de mèimei",
  },

  {
    chinese: "没",
    pinyin: "méi",
    meaning: "not; have not; there is not",
    note: "我没有妹妹 wǒ méiyǒu mèimei",
  },

  {
    chinese: "狗",
    pinyin: "gǒu",
    meaning: "dog",
    note: "我有一只狗 wǒ yǒu yì zhī gǒu",
  },

  {
    chinese: "贝贝",
    pinyin: "Bèibèi",
    meaning: "Beibei (a given name)",
    note: "贝贝是我的狗 Bèibèi shì wǒ de gǒu",
  },
  {
    chinese: "真",
    pinyin: "zhēn",
    meaning: "really / real",
    note: "真好 zhēn hǎo / 真忙 zhēn máng / 真高兴 zhēn gāoxìng",
  },
  {
    chinese: "漂亮",
    pinyin: "piàoliang",
    meaning: "beautiful; pretty",
    note: "真漂亮 zhēn piàoliang / 很漂亮 hěn piàoliang",
  },
  {
    chinese: "喝",
    pinyin: "hē",
    meaning: "to drink",
    note: "喝什么 hē shénme",
  },
  {
    chinese: "茶",
    pinyin: "chá",
    meaning: "tea",
    note: "喝茶 hē chá / 喜欢喝茶 xǐhuan hē chá / 茶很好 chá hěn hǎo",
  },
  {
    chinese: "咖啡",
    pinyin: "kāfēi",
    meaning: "coffee",
    note: "喝咖啡 hē kāfēi / 喜欢喝咖啡 xǐhuan hē kāfēi",
  },
  {
    chinese: "张",
    pinyin: "zhāng",
    meaning: "a measure word for flat objects",
    note: "一张照片 yì zhāng zhàopiàn",
  },
  {
    chinese: "女儿",
    pinyin: "nǚ'ér",
    meaning: "daughter",
    note: "我女儿 wǒ nǚ'ér / 女儿很漂亮 nǚ'ér hěn piàoliang",
  },
  {
    chinese: "今年",
    pinyin: "jīnnián",
    meaning: "this year",
    note: "今年很忙 jīnnián hěn máng",
  },
  {
    chinese: "年",
    pinyin: "nián",
    meaning: "year",
    note: "2016年 èr líng yī liù nián / 2020年 èr líng èr líng nián",
  },
  {
    chinese: "岁",
    pinyin: "suì",
    meaning: "year (of age)",
    note: "五岁 wǔ suì / 九岁 jiǔ suì / 几岁 jǐ suì",
  },
  {
    chinese: "今天",
    pinyin: "jīntiān",
    meaning: "today",
    note: "",
  },
  {
    chinese: "天",
    pinyin: "tiān",
    meaning: "day",
    note: "一天 yì tiān / 两天 liǎng tiān",
  },
  {
    chinese: "钢琴",
    pinyin: "gāngqín",
    meaning: "piano",
    note: "学钢琴 xué gāngqín",
  },
  {
    chinese: "课",
    pinyin: "kè",
    meaning: "class; lesson; course",
    note: "钢琴课 gāngqín kè / 汉语课 Hànyǔ kè / 没有课 méiyǒu kè",
  },
  {
    chinese: "孩子",
    pinyin: "háizi",
    meaning: "child",
    note: "中国孩子 Zhōngguó háizi / 美国孩子 Měiguó háizi / 一个孩子 yí ge háizi",
  },
  {
    chinese: "啊",
    pinyin: "a",
    meaning:
      "attached to a verb, adjective, or the end of a sentence as a sign of confirmation",
    note: "",
  },
  {
    chinese: "晚上",
    pinyin: "wǎnshang",
    meaning: "evening",
    note: "晚上工作 wǎnshang gōngzuò / 晚上有课 wǎnshang yǒu kè",
  },
  {
    chinese: "晚",
    pinyin: "wǎn",
    meaning: "late",
    note: "很晚 hěn wǎn / 不晚 bù wǎn",
  },
  {
    chinese: "英语",
    pinyin: "Yīngyǔ",
    meaning: "English (language)",
    note: "学习英语 xuéxí Yīngyǔ / 英语课 Yīngyǔ kè",
  },
  {
    chinese: "中国",
    pinyin: "Zhōngguó",
    meaning: "China",
    note: "",
  },
  {
    chinese: "陆雨平",
    pinyin: "Lù Yǔpíng",
    meaning: "Lu Yuping, name of a Chinese reporter",
    note: "",
  },
];
