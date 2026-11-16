# In Search of Attention｜逐頁稿

Da、Engelberg 與 Gao（2011），*The Journal of Finance*。

[Wiki 論文筆記](../wiki/papers/da-2011-in-search-of-attention.md) · [期刊原文](https://doi.org/10.1111/j.1540-6261.2011.01679.x)

## 1. In Search of Attention

- Google 搜尋量能不能衡量投資人注意力，並預測後續股價？

- 作者先驗證搜尋活動與散戶交易的關聯，再檢查美股短期報酬、後續反轉與 IPO 表現。

**原文位置**　摘要、pp. 1461–1466

## 2. 為何要看投資人主動搜尋？

- 新聞、週轉率和極端報酬是間接衡量。搜尋記錄了主動找資訊的行為。

- 作者檢驗散戶的買進選擇是否受注意力影響，並形成暫時的買盤壓力。

**口頭補充**　買進時有大量股票可以挑，賣出時通常從現有持股挑。這個不對稱是作者引用的機制。

**原文位置**　導論，pp. 1462–1465

## 3. ASVI 衡量這週搜尋得有多異常

- 上市股票以股票代號搜尋。$\mathrm{SVI}_{i,t}$ 是股票 $i$ 在第 $t$ 週的搜尋量指數。

$$
\mathrm{ASVI}_{i,t}=\ln(\mathrm{SVI}_{i,t})-\ln\!\left[\operatorname{median}(\mathrm{SVI}_{i,t-1},\ldots,\mathrm{SVI}_{i,t-8})\right]
$$

- ASVI 為正，代表這週搜尋量高於該股票過去八週的中位數。

**原文位置**　§I、Table I

## 4. 搜尋活動與散戶交易有關

- 主樣本為 2004 年 1 月至 2008 年 6 月間曾納入 Russell 3000 的 3,606 檔美股。

- 新聞、異常週轉率和絕對異常報酬只能解釋 ASVI 變異的一小部分。

- 搜尋量變化與 Dash-5 的個人訂單及交易活動增加相關。

**口頭補充**　交易資料支持散戶注意力的解讀，但無法辨認每一筆搜尋是誰做的。

**原文位置**　§I、Tables III–V

## 5. 搜尋熱度升高後，前兩週異常報酬較高

- ASVI 高一個標準差時，特徵調整後異常報酬的估計差異。

| 期間 | 估計差異 | 顯著性 |
| --- | ---: | --- |
| 第 1 週 | +18.7 bp | 1% |
| 第 2 週 | +14.9 bp | 5% |
| 第 3、4 週 | — | 未達顯著 |
| 第 5–52 週 | −28.9 bp | 未達顯著 |

**口頭補充**　Table VI 橫著讀 ASVI 那一列。作者每週做 Fama–MacBeth 橫斷面迴歸，報酬按市值、帳面市值比和動能調整。第 5–52 週的負值方向符合價格壓力消退，但精確度較低。

**原文位置**　§IV.A、Table VI，pp. 1482–1483

## 6. 上市前搜尋熱度較高的 IPO，首日報酬較高

- 就 2004–2007 年具有效 SVI 的 185 檔 IPO，以公司名稱衡量上市前一週的搜尋熱度。

- 高 ASVI 組平均首日報酬 16.98%，低 ASVI 組為 10.90%，相差 6.08 個百分點。

- 後續弱勢主要出現在上市前搜尋量增加、且首日報酬也高的 IPO。

**口頭補充**　Figure 3 的 Panel A 先看首日差異，Panel B 再看長期結果。首日報酬以發行價為基準。

**原文位置**　§IV.B、Figure 3、Tables VIII–IX

## 7. 這篇論文的證據能支持到哪裡？

- 短期預測。在研究的美股樣本中，異常搜尋量與後續兩週較高的異常報酬有關。

- 機制與限制。搜尋活動無法辨認買賣方向，基本面消息可能同時推動搜尋和價格。

- 長期與交易。完整樣本的反轉估計未達顯著，交易成本後的績效仍待檢驗。

**原文位置**　§I、§IV.A、Tables VI–VII

## 8. Table V 怎麼驗證散戶注意力？

- 研究用 SEC Dash-5 的月度訂單與交易資料，檢查搜尋量變化是否伴隨個人交易活動增加。

- 作者也比較不同交易場所。結果支持散戶注意力的解讀，搜尋資料仍無法逐筆確認搜尋者身分或交易方向。

**原文位置**　§III、Table V

## 9. Table VI 怎麼讀迴歸係數？

- 依序看 ASVI 那一列的第 1、2、3、4 週，以及第 5–52 週。由於 ASVI 已標準化，係數對應高一個標準差的報酬差異。

- 作者以每週 Fama–MacBeth 橫斷面迴歸估計，報酬按市值、帳面市值比及動能調整。週期與顯著性一起讀。

**原文位置**　§IV.A、Table VI，pp. 1482–1483

## 10. 延伸到機構投資人

- 本篇以週頻 Google 搜尋量研究較偏散戶的注意力及後續股價。

- 2017 年延伸研究加入 Bloomberg 終端日頻訊號，並用公告當日與公告後漂移來考察資訊反映。兩篇的注意力代理、事件設定與報酬期間需分開對照。

**原文位置**　Da 等（2011）Table VI、Ben-Rephael 等（2017）Tables 5–7

## 11. 建議文獻 · 原文引用

- **Brad M. Barber、Terrance Odean（2008）**。《All That Glitters: The Effect of Attention and News on the Buying Behavior of Individual and Institutional Investors》。直接連到本文的行為機制：散戶面對大量買進選項時，會不會更常淨買進吸引注意的股票？ [下載 PDF](https://faculty.haas.berkeley.edu/odean/Papers%20current%20versions/AllThatGlitters_RFS_2008.pdf)（公開期刊全文）。

- **Simon Gervais、Ron Kaniel、Dan H. Mingelgrin（2001）**。《The High-Volume Return Premium》。對照以異常成交量衡量股票能見度的做法，可回頭看本文的搜尋量在控制成交量後提供了什麼資訊。 [下載 PDF](https://citeseerx.ist.psu.edu/document?doi=23141f15d605d1baa833a3a552913f9b266b7911&repid=rep1&type=pdf)（公開期刊全文）。

尚未匯入 Wiki。

## 12. 建議文獻 · 近期延伸

- **Ed deHaan、Alastair Lawrence、Robin Litjens（2025 卷期；2024 線上）**。《Measuring Investor Attention Using Google Search》。重新檢查只搜股票代號的衡量誤差，並比較加上「stock」的搜尋詞。適合重做 ASVI 前先讀。 [下載 PDF](https://research.tilburguniversity.edu/files/116296636/dehaan-et-al-2024-measuring-investor-attention-using-google-search.pdf)（公開期刊全文）。

- **María José Ayala、Nicolás Gonzálvez-Gallego、Rocío Arteaga-Sánchez（2024）**。《Google search volume index and investor attention in stock market: a systematic review》。整理 56 篇研究的搜尋詞、區域與頻率選擇。適合找不同市場或不同資料頻率的做法。 [下載 PDF](https://link.springer.com/content/pdf/10.1186/s40854-023-00606-y.pdf)（開放取用全文）。

尚未匯入 Wiki。
