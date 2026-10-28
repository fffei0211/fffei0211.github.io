# Pastel Portfolio

一个可直接替换内容的中文个人作品集模板。设计语言来自用户提供参考图的共同特征：低饱和粉、奶油黄、薄荷绿与雾蓝渐变背景，轻玻璃拟态/纸张卡片、胶囊导航、编辑感大标题和克制动效。模板只复用风格规律，不复制参考作品中的姓名、照片、文案、项目或独特视觉资产。

> [!IMPORTANT]
> 当前姓名、职位、经历、项目、技能、学校、邮箱、社交账号和简历均为明确标记的占位内容，不代表任何真实人物或履历。公开发布前，请逐项替换为可核实且获准公开的信息。

## 页面内容

- 悬浮胶囊导航：章节锚点、当前章节状态与简历入口。
- Hero：问候语、姓名、职业定位、个人简介、能力标签、行动按钮和人物图区域。
- 经历：用时间线和卡片呈现职责、关键行动及结果/复盘。
- 精选项目：围绕问题、角色、贡献和结果组织案例，而不是重复的功能卡片。
- 技能档案：以可切换卡片展示技能名称、类别与项目证据，不虚构精确能力分数。
- 教育背景：展示学校、专业、时间和真实学习经历。
- 联系区：深色大卡片、邮箱/社交入口、简历与回到顶部操作。

页面采用单页锚点导航，不依赖服务端路由，适合直接部署到 GitHub Pages。桌面、平板和手机均有对应布局，并包含键盘焦点、跳过导航、语义化结构、图片替代文字及 `prefers-reduced-motion` 降级支持。

## 技术栈

- React
- Vite
- 原生 CSS 与 CSS variables
- pnpm
- GitHub Pages 官方 Actions

要求 Node.js 24 或更高版本。项目通过 `packageManager` 固定 pnpm 版本，请保留并提交 `pnpm-lock.yaml`。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建与本地预览：

```bash
pnpm build
pnpm preview
```

Vite 默认将生产文件输出到 `dist/`。

## 替换个人内容

主要内容集中在 [`src/data/profile.js`](src/data/profile.js)。建议先复制一份自己的资料清单，再一次性替换数据，避免在多个组件里散落修改。

| 数据分组 | 需要填写的内容 |
| --- | --- |
| `site` | 网站标题、描述及站点标识 |
| `identity` / 身份信息 | 姓名、英文名或缩写、职业方向、简介、能力标签、所在地、当前状态、肖像及替代文字 |
| `hero` | 首屏问候语、主次行动按钮和简历按钮文案 |
| `sectionCopy` | 经历、项目、技能、教育与联系区的章节编号、标题和说明 |
| `experiences` | 起止时间、单位、角色、职责、关键行动、真实成果或复盘 |
| `projects` | 项目名称、类别、时间、本人角色、问题、贡献、结果、封面、标签及详情链接 |
| `skills` | 技能名称、类别、使用场景，以及能证明该技能的真实案例 |
| `education` | 时间、学校、学历/专业、课程或经历、图片及替代文字 |
| `contact` | 可公开邮箱、所在地、合作说明、社交主页和简历链接 |

替换时请遵循以下原则：

1. 只写可核实的真实经历，不虚构单位、学校、客户、奖项、数据或能力评级。
2. 量化结果应能解释口径；无法公开时使用定性复盘，不填写看似精确的占位数字。
3. 联系方式仅填写愿意公开的信息；不要将私人手机号、家庭地址或密钥写入仓库。
4. 删除一项内容时同步检查对应导航、按钮和空状态，避免留下失效链接。
5. 完成真实内容替换后，再移除相应的 `isPlaceholder` 标志与“待补充”文字。

## 替换图片

占位素材位于 [`src/assets/images/`](src/assets/images/)，均为抽象 SVG，不代表真实人物、学校、公司或项目。详细规格见 [`src/assets/images/README.md`](src/assets/images/README.md)。

建议规格：

| 用途 | 推荐尺寸 | 推荐格式 |
| --- | --- | --- |
| 人物图 | 至少 1200 × 1500 px | 透明 WebP 或 PNG |
| 项目封面 | 至少 1600 × 960 px | WebP 或 AVIF |
| 教育图片 | 至少 1600 × 960 px | WebP 或 AVIF |

可以使用同名文件替换，也可以修改 `src/data/profile.js` 中的导入路径。请同时更新对应 `imageAlt`：描述图片传达的信息，不写“图片”或文件名。只使用本人拥有版权、获得授权或许可范围允许公开展示的素材。

## 简历与公开文件

如需提供简历，可将文件放入 `public/`，例如 `public/resume.pdf`。GitHub Pages 项目站部署在仓库子路径下，因此不要在 JSX 中硬编码 `/resume.pdf` 或 `/assets/...`。应使用：

```js
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
```

通过 JavaScript/CSS 导入的 `src/assets/` 资源会由 Vite 自动处理基础路径。公开前请检查简历中是否包含不希望公开的电话、住址、证件信息或内部项目资料。

## 修改视觉样式

- [`src/styles/tokens.css`](src/styles/tokens.css)：颜色、圆角、阴影、间距与排版变量。
- [`src/styles/global.css`](src/styles/global.css)：重置、全局背景与通用可访问性规则。
- [`src/styles/site.css`](src/styles/site.css)：页面区块、组件状态与响应式布局。
- [`src/components/`](src/components/)：导航、章节标题、滚动呈现等复用组件。
- [`src/sections/`](src/sections/)：首屏、经历、项目、技能、教育和联系章节。

建议优先修改设计变量，保持整体视觉一致。装饰光斑、阴影和动效应保持克制，不要以降低对比度、字号或交互清晰度换取“高级感”。

## 页面元信息

发布前在 [`index.html`](index.html) 中替换：

- `<title>` 中的姓名与职业定位；
- `meta description`；
- 主题色与 favicon（如需）；
- 后续新增的 Open Graph 图片和分享文案。

不要在元信息中保留“待补充”，也不要写入无法证实的身份或成果。

## 部署到 GitHub Pages

仓库已包含 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)。工作流使用官方 Pages Actions，并由 `actions/configure-pages` 读取实际站点的 `base_path`，再动态传给 Vite；没有硬编码仓库名，因此兼容：

- `https://<username>.github.io/<repository>/` 项目站；
- `https://<username>.github.io/` 用户站；
- 配置了自定义域名的站点。

部署步骤：

1. 将项目推送到 GitHub，并确认默认分支为 `main`；若使用其他默认分支，请同步修改工作流的 `on.push.branches`。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 确认 `pnpm-lock.yaml` 已提交后，推送到 `main`，或在 Actions 页面手动运行工作流。
5. 等待 `Deploy to GitHub Pages` 完成，并通过工作流输出的站点 URL 检查结果。

工作流按顺序执行依赖安装、Pages 配置、动态基础路径构建、上传 `dist/` 和部署，不需要 `gh-pages` 分支或 `gh-pages` npm 包。

## 发布前检查

- [ ] 所有“待补充”和占位标签均已处理。
- [ ] 姓名、经历、项目、学校、成果及日期均真实可核实。
- [ ] 图片已获授权，人物和项目素材没有泄露隐私或内部信息。
- [ ] 每张信息图片都有准确的 `alt`；纯装饰图对读屏器隐藏。
- [ ] 邮箱、社交主页、项目详情和简历链接均可打开。
- [ ] 键盘可以访问导航、按钮和所有交互，焦点状态清晰可见。
- [ ] 文字与背景对比度足够，320px 宽度下无横向滚动。
- [ ] 开启系统“减少动态效果”后，内容仍完整可用。
- [ ] `pnpm build` 成功，`pnpm preview` 下无控制台错误或资源 404。
- [ ] GitHub Pages 的项目子路径、用户根路径或自定义域名下资源均可正常加载。

## 使用边界

本项目是一套可编辑模板，不包含参考网站原作者的身份信息、照片、Logo、作品内容或可识别资产。请把参考图仅作为审美方向，不要直接复制第三方受保护的视觉作品或履历内容。
