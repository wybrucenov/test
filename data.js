// 12种美食人格 - 完整文案
const PERSONALITIES = {
  xiaolongxia: {
    id: 'xiaolongxia',
    name: '麻辣小龙虾型',
    emoji: '🦐',
    color1: '#FF3D5A',
    color2: '#FF8C42',
    tags: ['#社交悍匪', '#直球选手', '#夜宵天花板'],
    tagline: '火辣直球,夜宵局永远的主力',
    desc: '你就是派对里的辣椒素,走到哪气氛到哪。说话不过脑子,做事不回头看。爱恨分明,讨厌的人看一眼就拉黑,喜欢的人能掏心窝子。凌晨两点的烧烤摊才是你的主场,夜宵局的灵魂永远是你。',
    soulmate: '烤串型 / 火锅型',
    enemy: '沙拉型(看不下去)',
    question: '你是被这个世界针对了,还是主动招惹它的?'
  },
  sushi: {
    id: 'sushi',
    name: '日式寿司型',
    emoji: '🍣',
    color1: '#1B4D8E',
    color2: '#FFFFFF',
    tags: ['#质感生活', '#极简主义', '#拍照五分钟'],
    tagline: '吃饭也要颜值在线',
    desc: '餐具要好看,摆盘要讲究,拍照五分钟才能开吃。享受的是过程,不是结果。你觉得生活应该是有条不紊的,慢一点的精致。朋友圈的九宫格永远是最整齐的那个,滤镜是必修课。',
    soulmate: '甜品型 / 沙拉型',
    enemy: '碳水炸弹型(看不下去)',
    question: '你是不是没吃饱过?'
  },
  kaochuan: {
    id: 'kaochuan',
    name: '街头烤串型',
    emoji: '🍢',
    color1: '#F5C518',
    color2: '#8B4513',
    tags: ['#人间清醒', '#义气担当', '#塑料情退散'],
    tagline: '江湖儿女,大口喝酒大块吃肉',
    desc: '路边摊才是真正的深夜食堂。不挑环境,不挑座位,只挑人。能和你撸串的才是真兄弟,塑料情就别来了。生活嘛,简单粗暴才带劲,别整那些虚的。',
    soulmate: '小龙虾型 / 火锅型',
    enemy: '寿司型(看不下去)',
    question: '你有多久没吃过正经饭了?'
  },
  dessert: {
    id: 'dessert',
    name: '法式甜品型',
    emoji: '🍰',
    color1: '#FF9EC7',
    color2: '#FFFFFF',
    tags: ['#氛围感', '#颜控晚期', '#小确幸收集者'],
    tagline: '仪式感拉满,小确幸收集者',
    desc: '生日要吃蛋糕,周末要有 brunch,节气要有甜品。每一个普通的日子,都值得用甜度过。你相信生活是过给自己的,细节里全是温柔。甜品柜前你能站 10 分钟选一块。',
    soulmate: '寿司型 / 奶茶型',
    enemy: '暗黑料理型(看不下去)',
    question: '你的糖分够不够?'
  },
  carbs: {
    id: 'carbs',
    name: '碳水炸弹型',
    emoji: '🍜',
    color1: '#E8C547',
    color2: '#A0522D',
    tags: ['#干饭人', '#人间真实', '#简单快乐'],
    tagline: '面食米饭不可辜负,快乐就是这么直白',
    desc: '一碗米饭能让你幸福,一碗面条能让你原谅全世界。不挑食,不矫情,给啥吃啥。你相信最简单的食物最治愈,没有碳水解决不了的问题,如果有,那就再来一碗。',
    soulmate: '烤串型 / 小龙虾型',
    enemy: '沙拉型(看不下去)',
    question: '今天你碳水自由了吗?'
  },
  salad: {
    id: 'salad',
    name: '轻食沙拉型',
    emoji: '🥗',
    color1: '#7EC850',
    color2: '#FFFFFF',
    tags: ['#成分党', '#自律达人', '#人间清醒'],
    tagline: '自律即自由,生活有 plan',
    desc: '吃饭前先看热量表,配料表背得比单词还熟。一周健身五次,吃沙拉时还要加柠檬汁。你的克制不是为了瘦,是为了告诉自己"我可以"。自律即自由,你信了一辈子。',
    soulmate: '寿司型 / 果茶型',
    enemy: '碳水炸弹型 / 烤串型',
    question: '你快乐吗?'
  },
  hotpot: {
    id: 'hotpot',
    name: '重庆火锅型',
    emoji: '🍲',
    color1: '#E63946',
    color2: '#F5C518',
    tags: ['#社交天花板', '#氛围组C位', '#局气'],
    tagline: '呼朋唤友型选手,气氛组 C 位',
    desc: '一个人吃饭不叫吃饭,叫凑合。你是朋友圈的组局担当,谁的局都缺不了你。一桌好饭要有三五好友,要够辣够热闹,要不醉不归。鸳鸯锅是最后的妥协。',
    soulmate: '烤串型 / 小龙虾型',
    enemy: '寿司型(看不下去)',
    question: '你有多久没一个人吃饭了?'
  },
  milktea: {
    id: 'milktea',
    name: '奶茶续命型',
    emoji: '🧋',
    color1: '#C8956D',
    color2: '#FFB6C1',
    tags: ['#甜品自由', '#情绪充电', '#多巴胺'],
    tagline: '多巴胺重度依赖,戒糖从未成功',
    desc: '"今天靠什么活?靠奶茶。" 你能在任何情绪里找到对应的饮品搭配。心情好要喝一杯庆祝,心情差要喝一杯治愈,加班更要喝一杯续命。糖分就是你的能量来源,戒糖从未成功。',
    soulmate: '甜品型 / 果茶型',
    enemy: '沙拉型(看不下去)',
    question: '今天第几杯了?'
  },
  luosifen: {
    id: 'luosifen',
    name: '螺蛳粉型',
    emoji: '🍲',
    color1: '#F5C518',
    color2: '#3B8C3B',
    tags: ['#争议体质', '#敢爱敢恨', '#话题中心'],
    tagline: '争议体质,真香警告',
    desc: '你在人群里就是话题制造机。爱你的死心塌地,恨你的避之不及。但你不在乎,你只在乎真不真实。喜欢的人就狂喜欢,讨厌的人直接拉黑,绝不内耗。你的存在本身就是争议。',
    soulmate: '暗黑料理型 / 小龙虾型',
    enemy: '沙拉型(看不下去)',
    question: '你是不是又被议论了?'
  },
  doujiang: {
    id: 'doujiang',
    name: '豆浆油条型',
    emoji: '🥟',
    color1: '#F5DEB3',
    color2: '#8B4513',
    tags: ['#暖系人格', '#人间小确幸', '#治愈系'],
    tagline: '治愈系,人间烟火最动人',
    desc: '早餐摊的豆浆油条,深夜的一碗清粥,是你最爱的温柔。你相信生活藏在最日常的细节里。不用多豪华,有家人,有热饭,有阳光,够了。你是朋友圈里最让人安心的存在。',
    soulmate: '碳水炸弹型 / 果茶型',
    enemy: '暗黑料理型(看不下去)',
    question: '今天好好吃饭了吗?'
  },
  dark: {
    id: 'dark',
    name: '暗黑料理型',
    emoji: '🦑',
    color1: '#7B2CBF',
    color2: '#1A1A1A',
    tags: ['#猎奇达人', '#反差感', '#探险家'],
    tagline: '重口味探险家,平淡是最大敌人',
    desc: '别人看到皱眉的,你想试试;别人不敢吃的,你先下单。你的冰箱里永远有奇怪的东西,你的味蕾要的不是好吃,是"没吃过"。平淡对你来说等于无趣,猎奇才是日常。',
    soulmate: '螺蛳粉型 / 小龙虾型',
    enemy: '沙拉型 / 寿司型(看不下去)',
    question: '你今天踩雷了吗?'
  },
  fruittea: {
    id: 'fruittea',
    name: '果茶水果型',
    emoji: '🍵',
    color1: '#A8D8B9',
    color2: '#FFFFFF',
    tags: ['#松弛感', '#无攻击性', '#佛系'],
    tagline: '佛系清新,岁月静好',
    desc: '喜茶、奈雪、茶百道,你都喝过。走路不急,说话不急,吃饭不急。你相信慢慢来比较快,世界不会因为你着急就改变。晒太阳、喝果茶、看云,这就是生活。',
    soulmate: '寿司型 / 沙拉型',
    enemy: '火锅型(看不下去)',
    question: '今天的你,慢下来了吗?'
  }
};

// 10 道测试题 - 每个选项对应不同人格的权重
const QUESTIONS = [
  {
    q: '周末早上醒来,你第一件事会做什么?',
    options: [
      { text: '赖床到中午,醒来就点外卖小龙虾', scores: { xiaolongxia: 2, kaochuan: 1 } },
      { text: '慢悠悠做一份精致的 brunch', scores: { sushi: 2, dessert: 1 } },
      { text: '出门约朋友去撸串', scores: { kaochuan: 2, hotpot: 1 } },
      { text: '起床先做一组帕梅拉再吃沙拉', scores: { salad: 2, sushi: 1 } }
    ]
  },
  {
    q: '朋友突然来你家,你会?',
    options: [
      { text: '直接带他去吃夜宵', scores: { xiaolongxia: 1, kaochuan: 2, hotpot: 1 } },
      { text: '翻出甜品柜里的好货招待', scores: { dessert: 2, milktea: 1 } },
      { text: '冰箱里有什么就做什么', scores: { carbs: 2, doujiang: 1 } },
      { text: '一起研究一个新菜谱', scores: { dark: 2, luosifen: 1 } }
    ]
  },
  {
    q: '心情不好的时候,你会?',
    options: [
      { text: '点一份辣到流泪的小龙虾', scores: { xiaolongxia: 3 } },
      { text: '喝一杯加双倍糖的奶茶', scores: { milktea: 2, dessert: 1 } },
      { text: '一个人去吃螺蛳粉,边吃边流泪', scores: { luosifen: 3 } },
      { text: '喝杯热水早点睡', scores: { doujiang: 2, fruittea: 1 } }
    ]
  },
  {
    q: '你最讨厌的饭搭子是?',
    options: [
      { text: '嫌这嫌那、挑三拣四的人', scores: { kaochuan: 2, xiaolongxia: 1 } },
      { text: '一定要拍照五分钟才肯开吃的人', scores: { sushi: 1, salad: 1 } },
      { text: '什么都"算了你决定"的人', scores: { hotpot: 2 } },
      { text: '节食到只剩沙拉的人', scores: { carbs: 2, kaochuan: 1, luosifen: 1 } }
    ]
  },
  {
    q: '你的冰箱里最常见的是?',
    options: [
      { text: '各种酱料、啤酒、肥宅快乐水', scores: { xiaolongxia: 1, kaochuan: 2, hotpot: 1 } },
      { text: '新鲜水果和瓶瓶罐罐的果茶', scores: { fruittea: 3, salad: 1 } },
      { text: '鸡蛋、牛奶、速冻饺子', scores: { carbs: 2, doujiang: 2 } },
      { text: '各种稀奇古怪的食材', scores: { dark: 3, luosifen: 1 } }
    ]
  },
  {
    q: '你最近发朋友圈最多的是?',
    options: [
      { text: '凌晨宵夜九宫格', scores: { xiaolongxia: 1, kaochuan: 2, hotpot: 1 } },
      { text: '一份精致摆盘照 + 滤镜', scores: { sushi: 2, dessert: 1, salad: 1 } },
      { text: '一杯新出的果茶或奶茶', scores: { milktea: 2, fruittea: 2 } },
      { text: '一碗家常菜或妈妈做的菜', scores: { doujiang: 2, carbs: 2 } }
    ]
  },
  {
    q: '如果只能选一种食物活一辈子,你会选?',
    options: [
      { text: '一碗面或一份炒饭', scores: { carbs: 3 } },
      { text: '一份寿司拼盘', scores: { sushi: 3 } },
      { text: '一杯奶茶', scores: { milktea: 3 } },
      { text: '什么都敢试的野生派', scores: { dark: 3 } }
    ]
  },
  {
    q: '你对自己体重管理的态度是?',
    options: [
      { text: '减什么肥,活着就要吃', scores: { kaochuan: 2, xiaolongxia: 1, carbs: 1, hotpot: 1 } },
      { text: '严格自律,热量为先', scores: { salad: 3 } },
      { text: '吃甜品不胖就行,管它的', scores: { dessert: 2, milktea: 2 } },
      { text: '完全佛系,饿了就吃不饿就算', scores: { fruittea: 2, doujiang: 1 } }
    ]
  },
  {
    q: '朋友过生日,你会?',
    options: [
      { text: '组一桌火锅局,大家热闹一晚上', scores: { hotpot: 3, kaochuan: 1 } },
      { text: '订一个超精致的蛋糕', scores: { dessert: 3 } },
      { text: '请TA 嗦一碗螺蛳粉,够特别', scores: { luosifen: 2, dark: 1 } },
      { text: '送一份手工做的小礼物', scores: { doujiang: 2, fruittea: 2 } }
    ]
  },
  {
    q: '你最讨厌别人对你说什么?',
    options: [
      { text: '"你怎么又吃辣?"', scores: { xiaolongxia: 2, kaochuan: 1 } },
      { text: '"拍照可以了吗?"', scores: { sushi: 1, dessert: 1, salad: 1 } },
      { text: '"这个热量好高啊"', scores: { carbs: 2, milktea: 1, kaochuan: 1 } },
      { text: '"你怎么什么都敢吃?"', scores: { dark: 2, luosifen: 2 } }
    ]
  }
];