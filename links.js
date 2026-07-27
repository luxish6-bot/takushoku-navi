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
  muscledeli: "https://muscledeli.jp/",            // ← マッスルデリ
  medimeal:   "https://px.a8.net/svt/ejp?a8mat=4B88SX+ERO3ZM+4ICQ+60OXE", // メディミール(A8提携済み)
  // もしもアフィリエイト(提携済み・W報酬対象)
  wellness:   "https://af.moshimo.com/af/c/click?a_id=5716754&p_id=4793&pc_id=12663&pl_id=63258", // ウェルネスダイニング(制限食)
  // 楽天アフィリエイト(A8経由・提携済み)
  rakuten_freezer: "https://rpx.a8.net/svt/ejp?a8mat=4B88SX+EJXH4I+2HOM+BW8O1&rakuten=y&a8ejpredirect=" + encodeURIComponent("https://search.rakuten.co.jp/search/mall/小型冷凍庫/")
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-service]").forEach(el => {
    const url = AFFILIATE_LINKS[el.dataset.service];
    if (url) { el.href = url; el.rel = "nofollow sponsored noopener"; el.target = "_blank"; }
  });
});
