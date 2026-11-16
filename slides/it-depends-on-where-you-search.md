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

## 12. 建議文獻

- Stefano DellaVigna 與 Joshua M. Pollet（2009），Investor Inattention and Friday Earnings Announcements。

- 比較週五與其他平日的盈餘公告反應，適合對照以公告時點研究注意力不足的方法。公開作者全文為刊前版。

**原文位置**　延伸閱讀

[下載作者刊前版 PDF](https://eml.berkeley.edu/~sdellavi/wp/earnfr080204.pdf)
