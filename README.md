# SQIsign2D² 算法官网离线版

这是一个无外部依赖的静态网站，内容已依据 `算法材料` 中的规范、基础信息、知识产权声明、实现代码和测试向量完成填充。

## 浏览方式

- 直接双击 `index.html` 可离线浏览。
- 为获得与线上一致的路径行为，可在本目录运行 `python -m http.server 4173`，然后访问 `http://127.0.0.1:4173/`。

## 页面

- `index.html`：算法概览、关键指标与材料时间线
- `scheme.html`：构造流程、数学基础、安全模型与设计取舍
- `parameters.html`：8 个参数实例、尺寸、具体安全估算与优化实现性能
- `implementation.html`：规范、基础信息、知识产权声明、源码包、KAT 与复现说明
- `responses.html`：公开回应政策与勘误登记状态
- `team.html`：8 名联合提交人、参与机构和联系信息

## 下载资源

- `downloads/SQIsign2D2-implementations.zip`：参考实现与优化实现
- `downloads/SQIsign2D2-test-vectors.zip`：16 份压缩/未压缩 KAT
- 原始 PDF 保留在 `算法材料` 中，并从“实现与资源”页面直接链接。

## 内容依据

- `SQIsign2D2 Algorithm specifications.pdf`，Version 1.0，2026-04-26
- `SQIsign Algorithm specifications Addition.pdf`
- `Basic information.pdf`，签署日期 2026-04-20
- `Intellectual property.pdf`
- `Implementations/README.txt`、参考/优化实现源码及测试向量

未在材料中出现的信息不会推测补写。当前明确标注为“未提供”或“未报告”的项目包括：独立开源许可证、嵌入式实现、峰值内存、公开回应记录及独立勘误表。详见 `CONTENT_FIELDS.md`。

## 后续部署到 GitHub Pages

当前版本未执行任何线上部署。以后可将整个目录提交到 GitHub 仓库，并在仓库 Settings → Pages 中选择从默认分支根目录发布。页面和下载链接均使用相对路径，适合项目站点或 `username.github.io` 根站点。

发布前建议再次核对：

1. 联系邮箱和团队公开范围；
2. 软件与材料的授权条款；
3. 是否新增正式回应、勘误或更新版本；
4. GitHub 仓库单文件及总体积限制。
