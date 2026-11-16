---
title: "It Depends on Where You Search: Institutional Investor Attention and Underreaction to News"
authors: ["Azi Ben-Rephael", "Zhi Da", "Ryan D. Israelsen"]
year: 2017
version: "期刊排版版，附件頁碼 1–39"
journal: "The Review of Financial Studies"
reading_status: "待讀"
doi: "10.1093/rfs/hhx031"
source_url: "https://doi.org/10.1093/rfs/hhx031"
tags: ["投資人注意力", "行為財務", "機構投資人", "事件研究", "盈餘公告後漂移"]
---

# It Depends on Where You Search: Institutional Investor Attention and Underreaction to News

## 30 秒回想

- **問什麼**：機構投資人注意哪些消息？他們在公告時注意到消息，股價是否比較快反映資訊？
- **怎麼做**：用 Bloomberg 終端的個股新聞搜尋與閱讀活動衡量機構注意力。當每日最高分是 3 或 4，異常機構注意力指標 AIA 就等於 1。
- **關鍵發現**：在美股樣本中，Bloomberg 注意力和機構交易活動相關，在日頻模型中領先 Google 搜尋注意力。機構注意力高的事件，股價通常更快反映盈餘意外或評等變動，之後的同向漂移較小。
- **直接看 Figure 4**：比較盈餘意外後，AIA 為 0 與 1 的累積異常報酬路徑。分組圖由 Table 6A 估計值換算而成。分析師評等變動的對應圖是 Figure 5。

## 研究問題與貢獻

[Da、Engelberg 與 Gao（2011）](da-2011-in-search-of-attention.md) 以 Google 搜尋衡量較偏散戶的注意力。本篇用 Bloomberg 終端的新聞搜尋及閱讀衡量較偏機構的注意力，加入 Ancerno 機構交易活動作為驗證，並比較兩類訊號對新聞的時序及公告後價格調整。見導論、§2.2–2.3。

## 資料與研究設計

- **來源與閱讀範圍**：[期刊排版 PDF](https://doi.org/10.1093/rfs/hhx031)。以下頁碼沿用附件。已讀正文、主要表格與圖說，另行發布的資料附錄及網路附錄待查。
- **樣本**：2010 年 2 月至 2015 年 12 月的美股 Russell 3000 樣本，篩選後主樣本為 2,669 檔。I/B/E/S 子樣本含 34,400 次盈餘公告及 16,312 次分析師評等變動。Ancerno 機構交易資料只涵蓋至 2015 年 6 月。見 §1.1、Tables 1–2。
- **Bloomberg 分數**：個股新聞搜尋記 10 分、閱讀記 1 分，彙總成每小時計數。Bloomberg 將最近 8 小時的平均計數與該股過去 30 天的每小時計數比較，依歷史分布給 0 到 4 分，再取當天最高分。作者用 $\mathrm{AIA}_{i,t}=\mathbf{1}\{\mathrm{Score}_{i,t}\geq 3\}$ 標記異常注意力。較連續的 AIAC 用於 VAR。見 §1.2，附件 pp. 9–10。
- **Google 對照**：日頻 ADSVI 為當天 Google DSVI 相對前一個月平均值的對數比率，事件迴歸另用虛擬變數 DADSVI。2011 年論文使用週頻和前八週中位數，兩篇的 Google 指標口徑不同。見 §1.3。
- **事件檢驗**：用事件日與後續各期的 DGTW 特徵調整後報酬，估計「標準化盈餘意外（SUE）× AIA」或「評等變動 × AIA」交乘項。盈餘公告追蹤至第 40 個交易日，評等變動追蹤至第 10 個交易日。見 §3.1–3.2、Tables 6–7。

## 主要結果與限制

| 問題 | 結果 | 原文位置 |
| --- | --- | --- |
| 指標反映誰的活動？ | AIA 和機構交易量的關聯強於它與整體 CRSP 交易量的關聯。 | Table 4、附件 p. 21 |
| 兩類注意力的先後順序？ | VAR 中，Bloomberg 機構注意力指標 AIAC 領先 Google 的 ADSVI。 | Table 5、Figure 3 |
| 盈餘公告如何反映？ | 每增加一單位 SUE，AIA 交乘項的額外報酬反應在事件日為 +8 bp（t = 2.69），事件後第 1–40 日累積為 −10 bp（t = −2.78）。作者估計的漂移主要集中在 AIA 為 0 的公告。 | Table 6A、Figure 4 |
| 分析師評等變動如何反映？ | 評等變動每差一級，AIA 交乘項在事件日為 +83 bp（t = 16.61），事件後第 1–10 日累積為 −20 bp（t = −2.75）。 | Table 7A、Figure 5 |

**限制**：Bloomberg 分數同時含主動搜尋和閱讀，且原始每小時計數未提供。終端使用者身分與 Ancerno 關聯支持機構注意力的解讀，資料本身無法逐筆確認投資人身分。公告內容與當日價格變化可能同時影響注意力。作者用盤後盈餘公告的子樣本處理同日股價先動的疑慮，估計仍應按觀察性證據解讀。Table 8 是樣本內的日曆時間投組分析，交易成本後或樣本外表現應另行查證。見 §1.2、§3.1、§3.3。

## 我的閱讀筆記

## 相關論文與主題

- [In Search of Attention](da-2011-in-search-of-attention.md)｜沿用 Google 搜尋衡量注意力的做法，加入 Bloomberg 訊號以比較較偏散戶及較偏機構的注意力。
- [投資人注意力與股價壓力](../topics/investor-attention-and-price-pressure.md)｜比較一般股票週的後續報酬與有特定公告事件時的價格調整。
