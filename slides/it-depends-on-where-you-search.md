# It Depends on Where You Search｜逐頁稿

[Wiki 論文筆記](../wiki/papers/ben-rephael-2017-it-depends-on-where-you-search.md) · [期刊原文](https://doi.org/10.1093/rfs/hhx031)

## 1. It Depends on Where You Search

- 機構投資人有注意到消息時，股價會更快反映嗎？

- Azi Ben-Rephael、Zhi Da、Ryan D. Israelsen（2017），The Review of Financial Studies。

**原文位置**　摘要與導論

## 2. 從「誰在注意」開始

- Google 股票搜尋較偏向散戶注意力。這篇加入 Bloomberg 終端的個股新聞搜尋與閱讀，建立較偏向機構的代理指標。

- 作者想知道：兩種注意力誰先動？注意到消息時，價格反應集中在當日，還是留到後續？

**原文位置**　導論、§2–3

## 3. 資料涵蓋 2,669 檔美股

- 期間為 2010 年 2 月至 2015 年 12 月。主樣本由 Russell 3000 股票篩選而成。

- 子樣本涵蓋 34,400 次盈餘公告與 16,312 次分析師評等變動。Ancerno 機構交易資料只到 2015 年 6 月。

**原文位置**　§1.1、Tables 1–2

## 4. AIA 怎麼從 Bloomberg 活動算出來？

- 個股新聞主動搜尋記 10 分，閱讀記 1 分，彙整成每小時計數。

- 用最近 8 小時平均值和該股過去 30 天的歷史分布比較，評為 0–4 分，再取當日最高分。

$$\mathrm{AIA}_{i,t}=\mathbf{1}\{\mathrm{Score}_{i,t}\geq3\}$$

**原文位置**　§1.2

## 5. 先檢查 AIA 是否真的較偏機構

- AIA 與 Ancerno 機構交易量的關聯，強於它與整體 CRSP 交易量的關聯。

- 這支持「較偏機構」的解讀。終端資料混合搜尋與閱讀，無法逐筆辨認使用者身分。

**原文位置**　Table 4、§2.2

## 6. Bloomberg 注意力在日頻模型中領先 Google

- Table 5 的 VAR 用 Bloomberg 的較連續指標 AIAC，與 Google 異常日搜尋量 ADSVI 比較。

- AIAC 對後續 ADSVI 有預測資訊。這個結果描述訊號的先後關係，交易者之間的直接影響仍無法由這張表確認。

**原文位置**　Table 5、Figure 3

## 7. 事件迴歸比較當日反應與後續漂移

- 用 DGTW 特徵調整後報酬，檢查「盈餘意外 × AIA」和「評等變動 × AIA」的交乘項。

- 盈餘公告追蹤到第 40 個交易日，評等變動追蹤到第 10 個交易日。交乘項是高 AIA 組多出的報酬反應。

**原文位置**　§3.1–3.2、Tables 6–7

## 8. 盈餘意外較快反映到股價

- 每增加一單位標準化盈餘意外（SUE），AIA 交乘項在公告當日額外為 +8 bp（t = 2.69），事件後第 1–40 日累積為 −10 bp（t = −2.78）。

- Figure 4 對照高、低注意力組的累積異常報酬路徑。重點是低注意力組留下較多後續漂移。

**原文位置**　Table 6A、Figure 4

## 9. 分析師評等變動也呈現相近模式

- 每變動一級評等，AIA 交乘項在事件日額外為 +83 bp（t = 16.61），事件後第 1–10 日累積為 −20 bp（t = −2.75）。

- Figure 5 可與 Figure 4 對讀。留意評等變動用「一級」，盈餘意外用 SUE 單位。

**原文位置**　Table 7A、Figure 5

## 10. 跟 In Search of Attention 怎麼接？

- 2011 年論文用每週 Google 搜尋量考察未來報酬，對照過去八週的中位數。

- 2017 年論文同時用日頻 Bloomberg 與 Google 指標，找公告後反映的速度。兩篇共同說明，解讀注意力效果時要先對齊誰在注意、何時注意，以及觀察哪段報酬。

**原文位置**　Da 等（2011）Table VI、Ben-Rephael 等（2017）§1.2–1.3、Tables 5–7

## 11. 結論與限制

- 高機構注意力組在事件當日反應較大，後續同向漂移較小。

- 公布的 Bloomberg 分數混合搜尋和閱讀。盤後公告子樣本可檢查同日價格先動的疑慮，整體結果仍屬觀察性證據。

**原文位置**　§3.1–3.3、Tables 6–8

## 12. 建議文獻 · 原文引用

- **Stefano DellaVigna、Joshua M. Pollet（2009）**。《Investor Inattention and Friday Earnings Announcements》。用盈餘公告落在週五或其他平日來比較即時反應與後續漂移，適合對照 Bloomberg 直接衡量的做法。 [下載 PDF](https://eml.berkeley.edu/~sdellavi/wp/earnfr080204.pdf)（公開作者刊前版）。

- **David Hirshleifer、Sonya Seongyeon Lim、Siew Hong Teoh（2009）**。《Driven to Distraction: Extraneous Events and Underreaction to Earnings News》。用同日其他公司的盈餘公告數量衡量分心，適合對照「資訊太多」與「機構搜尋或閱讀變少」兩種研究設計。 [下載 PDF](https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/c/362/files/2011/02/Driven-to-Distraction-Extraneous-Events-and-Underreaction-to-Earnings-News.pdf)（公開期刊全文）。

尚未匯入 Wiki。

## 13. 建議文獻 · 近期延伸

- **Jiayi Zheng（2024）**。《Institutional attention and investment efficiency》。同樣研究盈餘公告日的機構注意力，將結果變數延伸到企業投資決策。適合看注意力研究如何跨到公司理財。 [下載 PDF](https://research-management.mq.edu.au/ws/portalfiles/portal/403711601/Accounting_Finance_-_2024_-_Zheng_-_Institutional_attention_and_investment_efficiency.pdf)（公開期刊全文）。

- **Jeremy Michels（2025 卷期；2024 線上）**。《Retail investor trade and the pricing of earnings》。用持有個股的 Robinhood 使用者人數檢查散戶對盈餘公告的反應，可與本文的機構注意力結果對讀。 [DOI／期刊摘要](https://doi.org/10.1007/s11142-024-09825-9)（期刊摘要）。

尚未匯入 Wiki。
