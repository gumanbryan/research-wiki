# 論文發想幫手

用 LLM Wiki 整理財金論文，依標籤連結研究，也能將單篇論文或研究問題轉成簡報。

- 開啟 [網站首頁](index.html)，可搜尋論文、篩選標籤，並播放兩篇論文的導讀。
- 從 [Wiki 索引](wiki/index.md) 閱讀論文與主題筆記。
- [AGENTS.md](AGENTS.md) 包含網站規格、檔案格式與維護規則。簡報逐頁稿在 `slides/`，共用模板在 `templates/`。
- [原始資料索引](raw/README.md) 提供兩篇論文的 DOI。

## 使用 GitHub Pages

將作業檔案保持原有目錄層級放到儲存庫的 `main` 分支，使 `index.html` 與 `AGENTS.md` 位於根目錄。在 GitHub 的 **Settings → Pages** 選擇 **Deploy from a branch → main → /(root)**，儲存後用 **Visit site** 開啟網站。

簡報可用方向鍵或按鈕翻頁，支援全螢幕的瀏覽器可使用全螢幕按鈕。LaTeX 顯示需要連線到 KaTeX CDN。
