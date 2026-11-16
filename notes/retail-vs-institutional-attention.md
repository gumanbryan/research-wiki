# 散戶與機構投資人注意力上升，對股價走勢有什麼差別？

- 日期：2026-11-16
- 標籤：投資人注意力、散戶交易、機構投資人、股價壓力、盈餘公告後漂移

## 先回答問題

目前 Wiki 收錄的兩篇美股研究，最清楚的差別在**價格反應的時點**。較偏散戶的 Google 異常搜尋量升高後，個股在未來兩週的異常報酬較高，符合暫時性買盤壓力的解釋。較偏機構的 Bloomberg 注意力在公告當天較高時，股價對盈餘意外、分析師評等變動的當日反應較強，之後的同向漂移較弱。機構注意力的結果要連同消息方向來讀。正面消息下，當日反應可能更正向；負面消息下，交乘項的貢獻會相反。

## 對照證據

| | 較偏散戶的注意力 | 較偏機構的注意力 |
| --- | --- | --- |
| 指標 | Google 異常搜尋量 ASVI，週頻，與過去八週搜尋量中位數比較 | Bloomberg 個股新聞搜尋及閱讀，日頻，最高分達門檻時 AIA 為 1 |
| 研究情境 | 美國 Russell 3000，2004–2008 年的一般股票週 | 美國 Russell 3000，2010–2015 年樣本中的盈餘公告與評等變動 |
| 較早的價格反應 | ASVI 高 1 個標準差，第 1、2 週異常報酬分別高 **18.7、14.9 bp**，分別達 1% 與 5% 顯著水準 | 高 AIA 的額外交乘反應，在公告當日為 **+8 bp／每單位標準化盈餘意外**，以及 **+83 bp／每一級評等變動** |
| 較晚的價格反應 | 第 3、4 週未達顯著。第 5–52 週為 **−28.9 bp**，全樣本未達顯著 | 高 AIA 的額外交乘反應，盈餘公告後第 1–40 日累積 **−10 bp／每單位標準化盈餘意外**，評等變動後第 1–10 日累積 **−20 bp／每一級評等變動** |
| 原文位置 | [Da 等（2011）](../wiki/papers/da-2011-in-search-of-attention.md)，Table VI、§IV.A | [Ben-Rephael 等（2017）](../wiki/papers/ben-rephael-2017-it-depends-on-where-you-search.md)，Table 6A、Figure 4、Table 7A、Figure 5 |

### 數字怎麼讀

- 機構欄的數字是「消息意外程度 × 高注意力」的交乘係數。以盈餘為例，+8 bp 與 −10 bp 指的是高、低 AIA 組的**消息敏感度差異**。盈餘意外為負時，幅度乘上負值，交乘貢獻的符號隨之反轉。後續的負係數用來解讀漂移較弱。見 2017 年 Table 6A 與 Figure 4。
- 2017 年研究的日頻模型顯示，Bloomberg 指標 AIAC 領先 Google 指標 ADSVI。這提供了同一篇研究裡的注意力時序對照。見 2017 年 Table 5 與 Figure 3。
- 兩篇的樣本期、時間頻率、事件設定與估計量各有差異。這些數字不能直接比大小。搜尋與閱讀也是注意力代理，無法逐筆確認投資人身分或買賣方向。整體證據適合用「相關」或「預測」表述。

## 建議參考文獻

- **Stefano DellaVigna、Joshua M. Pollet（2009）**。*Investor Inattention and Friday Earnings Announcements*。2017 年論文引用的基礎文獻，以週五與其他平日的盈餘公告對照即時反應和延遲反應。[下載作者刊前版 PDF](https://eml.berkeley.edu/~sdellavi/wp/earnfr080204.pdf)
- **Ed deHaan、Alastair Lawrence、Robin Litjens（2025 卷期，2024 線上）**。*Measuring Investor Attention Using Google Search*。適合補強散戶注意力代理的設計，特別是股票代號搜尋的衡量誤差。[下載期刊全文 PDF](https://research.tilburguniversity.edu/files/116296636/dehaan-et-al-2024-measuring-investor-attention-using-google-search.pdf)
- **Jeremy Michels（2025 卷期，2024 線上）**。*Retail Investor Trade and the Pricing of Earnings*。以 Robinhood 使用者的持股變化研究散戶如何回應盈餘公告，適合補上與機構研究相同的事件情境。[DOI／期刊摘要](https://doi.org/10.1007/s11142-024-09825-9)
