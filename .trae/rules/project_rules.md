# 客户端小程序（uni-app）项目结构总览与二次开发规则

本文件用于指导在现有代码基础上进行二次开发，强调“复用已有模块与能力，按约定扩展，避免重复与随意改动”。仅作为规范文档，不涉及业务代码修改。

## 1. 技术栈与核心入口
- 基于 uni-app（Vue2）与 HBuilderX 构建，H5 dev 端口参见 manifest.json（默认 8180）。
- 入口：<mcfile name="main.js" path="/Users/shift/Documents/Trea/client-mini-app-master/main.js"></mcfile> 初始化全局依赖、store、i18n、全局组件；<mcfile name="App.vue" path="/Users/shift/Documents/Trea/client-mini-app-master/App.vue"></mcfile> 为应用根组件。
- 路由与页面：<mcfile name="pages.json" path="/Users/shift/Documents/Trea/client-mini-app-master/pages.json"></mcfile> 统一声明页面与 tabBar 配置；新增页面必须在此注册。

## 2. 目录结构与职责（重点可复用模块）
- 公共能力
  - API 与工具：
    - <mcfile name="common/api.js" path="/Users/shift/Documents/Trea/client-mini-app-master/common/api.js"></mcfile> 统一 API 地址字典（按业务域归类），新增接口请在此扩展并复用 util.request。
    - <mcfile name="common/core/util.js" path="/Users/shift/Documents/Trea/client-mini-app-master/common/core/util.js"></mcfile> 与 <mcfile name="common/utils.js" path="/Users/shift/Documents/Trea/client-mini-app-master/common/utils.js"></mcfile> 提供网络、格式化、分享等通用方法，页面与组件禁止直接写裸请求，必须走 util.request 封装。
  - 全局状态：<mcfile name="store/index.js" path="/Users/shift/Documents/Trea/client-mini-app-master/store/index.js"></mcfile>（Vuex）集中管理 system/user/layout/config 等状态；新增跨页数据先评估是否放入 store 模块（优先新增模块而非随意加字段）。
  - 国际化：<mcfolder name="locale" path="/Users/shift/Documents/Trea/client-mini-app-master/locale"></mcfolder>（en/zh/th），新增文案务必写入 i18n 资源并使用 $t 调用，严禁写死中文。
  - UI 组件：
    - 自研：<mcfolder name="components/common" path="/Users/shift/Documents/Trea/client-mini-app-master/components/common"></mcfolder>（如 my-img、tabbar、modal 等），二开优先复用与扩展这些组件；避免在页面内重复造轮子。
    - 第三方：<mcfolder name="uni_modules" path="/Users/shift/Documents/Trea/client-mini-app-master/uni_modules"></mcfolder>（uni-calendar、uni-icons、uni-steps 等），按需引入、避免全量打包。
  - 下拉刷新/上拉分页：<mcfolder name="mescroll-uni" path="/Users/shift/Documents/Trea/client-mini-app-master/mescroll-uni"></mcfolder> 已封装 MeScroll 组件与 mixins；列表页面统一复用，禁止自写滚动分页逻辑。
  - 第三方 SDK：<mcfolder name="common" path="/Users/shift/Documents/Trea/client-mini-app-master/common"></mcfolder> 内封装了 facebook-sdk、line、ali-js-sdk、wechat-util 等；接入社交/支付/地图等请走已有封装层。
- 业务页面
  - 首页/商城/订单/我的等在 <mcfolder name="pages/index" path="/Users/shift/Documents/Trea/client-mini-app-master/pages/index"></mcfolder> 与 <mcfolder name="pages/order" path="/Users/shift/Documents/Trea/client-mini-app-master/pages/order"></mcfolder>、<mcfolder name="pages/my" path="/Users/shift/Documents/Trea/client-mini-app-master/pages/my"></mcfolder> 等目录；新增页面按业务域就近放置并在 pages.json 注册。

## 3. 二次开发通用约定
- 路由与页面
  - 新增页面：先建 pages/xxx/yyy.vue → 在 pages.json 注册 path 与样式 → 通过 uni.navigateTo/redirectTo 跳转。
  - tabBar 页面仅在 pages.json 的 tabBar.list 中维护，避免在代码里硬编码。
- 数据与 API
  - 统一通过 util.request 发起请求，URL 从 api.js 读取；新增接口先在 api.js 中归类命名（小驼峰/语义化）。
  - 对接口返回的数据统一在页面/组件方法中做最小必要处理，复杂计算/格式化抽到 utils 或 computed。
- 状态管理
  - 跨页面共享的状态（用户、布局、配置、购物车等）统一放入 store；遵循 state/mutations/actions 规范，避免直接修改 state。
- 组件复用
  - 复用 components/common 下的通用组件；通用样式/逻辑抽成 mixin 或独立组件，再在业务页组合使用。
  - 列表/分页统一使用 mescroll-uni 提供的组件与生命周期，不要自实现滚动监听。
- 国际化与文案
  - 所有展示文案走 $t('key')；新增 key 请同步三语言资源文件，命名使用 kebab-case。
- 资源与图片
  - 使用全局 <mcfile name="components/common/my-img.vue" path="/Users/shift/Documents/Trea/client-mini-app-master/components/common/my-img.vue"></mcfile> 组件处理图像加载与占位，避免直接 img。
- 第三方集成
  - 微信/LINE/Facebook 等统一走 common 下封装；涉及回调/签名逻辑，页面层只处理成败与提示，细节在封装层维护。

## 4. 扩展实践清单（Checklist）
- 新接口：api.js 注册 → 在 util.request 中调用 → 页面接收/渲染（必要时加 store）。
- 新页面：创建 .vue → pages.json 注册 → 复用通用组件与 i18n。
- 新列表页：基于 mescroll-uni 封装上拉/下拉 → 断言空态/分页完结。
- 新状态：新增 store 模块或字段 → 写 mutations/actions → 页面通过 mapState/mapActions 使用。
- 新文案：同步 locale/en.json、zh.json、th.json。

## 5. 代码风格与提交
- 命名：文件/目录 kebab-case；变量/方法小驼峰；常量大写下划线。
- 组件：单文件组件遵循“脚本-模板-样式”顺序，样式 scoped，优先使用 rpx。
- 提交信息：遵循 Conventional Commits（feat/fix/docs/refactor/chore 等）。

## 6. 分支策略（二次开发）
- main：稳定产线分支，仅合并经过验证的发布版本。
- develop：日常开发分支（默认开发基线），所有功能/修复从此分支切出：
  - feature/xxx → 提 PR 到 develop。
  - fix/yyy → 提 PR 到 develop。
  - 版本发布：develop 合并回 main 并打 tag。

## 7. 注意事项（安全与配置）
- 禁止在代码中硬编码密钥/Token/私钥；如需接入新服务，请改造为从配置或安全存储注入。
- 变更 manifest.json、pages.json 等全局文件需谨慎评估对全站的影响并走评审。

— 完 —