// ============================================================
// アフィリエイトリンク設定ファイル
// ASP(A8.net等)で提携承認後、下記のURLを広告リンクURLに
// 差し替えるだけで、全ページのボタンに自動反映されます。
// ============================================================
const AFFILIATE_LINKS = {
  nosh:       "https://nosh.jp/",                  // ← nosh の広告リンクに差し替え
  mitsuboshi: "https://mitsuboshifarm.jp/",        // ← 三ツ星ファームの広告リンクに差し替え
  watami:     "https://www.watami-takushoku-direct.jp/", // ← ワタミの宅食ダイレクト
  tsurukame:  "https://tsurukame-kitchen.com/",    // ← Dr.つるかめキッチン
  greenspoon: "https://green-spoon.jp/",           // ← GREEN SPOON
  muscledeli: "https://muscledeli.jp/"             // ← マッスルデリ
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-service]").forEach(el => {
    const url = AFFILIATE_LINKS[el.dataset.service];
    if (url) { el.href = url; el.rel = "nofollow sponsored noopener"; el.target = "_blank"; }
  });
});
