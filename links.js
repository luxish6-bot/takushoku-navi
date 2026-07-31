// ============================================================
// アフィリエイトリンク設定ファイル
// ASP(A8.net / もしも)で提携承認後、下記のURLを差し替えるだけで
// 全ページのボタンに自動反映されます。
// ============================================================
const A8 = m => "https://px.a8.net/svt/ejp?a8mat=" + m;
// もしも「どこでもリンク」(Amazon) — 任意のAmazon URLへのアフィリエイトリンクを生成
const AMZ = u => "https://af.moshimo.com/af/c/click?a_id=5716759&p_id=170&pc_id=185&pl_id=4062&url=" + encodeURIComponent(u);

const AFFILIATE_LINKS = {
  // ---- A8.net 提携済み(稼働中) ----
  medimeal:   A8("4B88SX+ERO3ZM+4ICQ+60OXE"),          // メディミール(制限食)
  tsurukame:  A8("4B8BWU+CVSP0Y+48GW+63H8I"),          // Dr.つるかめキッチン(制限食)
  fitfood:    A8("4B8BWU+CM9RCI+57YO+BX3J6"),          // FIT FOOD HOME(国産素材・無添加調理)
  shokurakuzen: A8("4B8BWU+CMV6YA+5VTA+5YJRM"),        // 食楽膳(嚥下対応)
  taihei:     A8("4B8BWU+CV79F6+4OFW+5Z6WY"),          // 宅配弁当のタイヘイ
  freezer_rental: A8("4B8BWU+CWE4MQ+OE2+TSBE9"),       // 冷凍庫レンタル

  // ---- もしもアフィリエイト 提携済み(W報酬対象) ----
  wellness:   "https://af.moshimo.com/af/c/click?a_id=5716754&p_id=4793&pc_id=12663&pl_id=63258", // ウェルネスダイニング
  tedemogu:   "https://af.moshimo.com/af/c/click?a_id=5716755&p_id=6988&pc_id=19985&pl_id=88548", // TEDEMOGU(手づかみ離乳食)

  // ---- 楽天アフィリエイト(A8経由・提携済み) ----
  rakuten_freezer: "https://rpx.a8.net/svt/ejp?a8mat=4B88SX+EJXH4I+2HOM+BW8O1&rakuten=y&a8ejpredirect=" + encodeURIComponent("https://search.rakuten.co.jp/search/mall/小型冷凍庫/"),

  // ---- Amazon(もしも経由・提携済み / どこでもリンク) ----
  amazon_freezer: AMZ("https://www.amazon.co.jp/s?k=小型冷凍庫"),
  amazon_container: AMZ("https://www.amazon.co.jp/s?k=冷凍保存容器"),

  // ---- 審査中(承認され次第ここを差し替え) ----
  nosh:       "https://nosh.jp/",                        // A8審査中
  watami:     "https://www.watami-takushoku-direct.jp/", // A8・もしも審査中
  kinniku:    "https://muscle-shokudo.jp/",              // 筋肉食堂(A8審査中)

  // ---- ASPに案件なし(素のリンク) ----
  mitsuboshi: "https://mitsuboshifarm.jp/",
  greenspoon: "https://green-spoon.jp/",
  muscledeli: "https://muscledeli.jp/"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-service]").forEach(el => {
    const url = AFFILIATE_LINKS[el.dataset.service];
    if (url) { el.href = url; el.rel = "nofollow sponsored noopener"; el.target = "_blank"; }
  });
});
