# 🍜 美食人格测试 · Food Personality Test

> 一个丝网印海报风的 12 人格测试小站 — 纯前端,10 道题,60 秒测出你是哪种美食。

![预览](./preview.png)

## ✨ 特色

- **12 种美食人格** — 小龙虾 / 寿司 / 烤串 / 甜品 / 碳水 / 沙拉 / 火锅 / 奶茶 / 螺蛳粉 / 豆浆 / 暗黑 / 果茶
- **10 道精心设计的题目** — 选项带权重,自动判定结果
- **丝网印海报视觉** — 粉/青/黄三色撞色、错位印刷、SVG 颗粒纹理、胶带/邮戳装饰
- **长按保存海报** — 结果页一键生成可分享图片(基于 html2canvas)
- **零依赖、零后端** — 任何静态托管都能跑

## 🎨 视觉设计

灵感来自 **Risograph(丝网印)** 印刷工艺 — 撞色、错版、颗粒感、复古海报。
刻意避开常见的"AI 风"渐变和玻璃拟物,选用印刷质感的大胆色块和反 AI 模板的视觉语汇。

配色:
- 粉 `#FF3D8B` / 青 `#00C2C2` / 黄 `#FFD93D` / 深 `#1A1A3E` / 纸 `#FAF4E8`

## 🚀 本地运行

任意静态服务器都行:

```bash
# Python
python -m http.server 8080

# Node
npx serve .

# 或直接双击 index.html (部分浏览器对 file:// 下的 CDN 有限制,推荐用 server)
```

访问 `http://localhost:8080/`

## 📦 GitHub Pages 部署

1. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "init: 美食人格测试"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. **开启 Pages**
   - 进入 repo → `Settings` → `Pages`
   - Source 选 `Deploy from a branch`
   - Branch 选 `main` / `(root)`
   - 保存后等 1-2 分钟,会得到 `https://<user>.github.io/<repo>/`

3. **重要:加 `.nojekyll`**
   ```bash
   touch .nojekyll
   git add .nojekyll
   git commit -m "chore: disable jekyll"
   git push
   ```
   GitHub Pages 默认会过 Jekyll,可能影响资源加载。空文件 `.nojekyll` 关闭它。

## 📁 文件结构

```
food-personality/
├── index.html      # 三个页面 (开始 / 测试 / 结果)
├── style.css       # 丝网印风格样式
├── app.js          # 测试流程 + 分享海报逻辑
├── data.js         # 12 种人格 + 10 道题 (文案集中在这里)
├── preview.png     # README 预览图
├── preview-result.png  # 结果页预览
├── .nojekyll       # GitHub Pages 关闭 Jekyll
└── README.md
```

## 🛠 自定义

### 修改人格文案
编辑 `data.js` 里的 `PERSONALITIES` 对象,每种人格包含:
- `name` 名称
- `emoji` 大表情
- `color1` / `color2` 主色(用于圆形头像背景)
- `tags` 标签数组
- `tagline` 一句话定位
- `desc` 详细描述
- `soulmate` / `enemy` 灵魂伴侣 / 死敌
- `question` 灵魂拷问

### 修改测试题
编辑 `data.js` 里的 `QUESTIONS` 数组,每题包含:
- `q` 题面
- `options` 4 个选项,每个选项的 `scores` 字段为各人格加权(例如 `{ xiaolongxia: 2, kaochuan: 1 }`)

总分最高的人格为最终结果。

### 修改视觉
编辑 `style.css` 顶部 `:root` 变量即可全站换色:
```css
:root {
  --pink: #FF3D8B;
  --cyan: #00C2C2;
  --yellow: #FFD93D;
  --dark: #1A1A3E;
  --paper: #FAF4E8;
}
```

## 🔧 调试技巧

URL 后加 hash 可直接预览特定页面:

| URL | 效果 |
|---|---|
| `/` | 开始页 |
| `/#quiz` | 直接进入测试 |
| `/#preview=xiaolongxia` | 预览小龙虾型 |
| `/#preview=luosifen` | 预览螺蛳粉型 |
| `/#preview=salad` | 预览沙拉型 |

12 个 ID 都在 `data.js` 的 `PERSONALITIES` 键名里。

## 📜 License

MIT — 自由使用、修改、分发,商用也可,保留原作者声明即可。

## 🙏 致谢

- 设计参考:Risograph 印刷美学、独立杂志、复古海报
- 字体:[Smiley Sans](https://github.com/atelier-anchor/smiley-sans) · [Archivo Black](https://fonts.google.com/specimen/Archivo+Black) · [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC)
- 海报生成:[html2canvas](https://html2canvas.hertzen.com/)

---

Made with 🌶️ & 🍜 · 欢迎 Fork / Star / 提 Issue