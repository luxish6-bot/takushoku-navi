// 宅配食ナビ 共通スクリプト:ヘッダー整形 / モバイルメニュー / 目次自動生成 / 現在地ハイライト
document.addEventListener("DOMContentLoaded", () => {

  /* --- ヘッダーを整形してメニューボタンを追加 --- */
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  if (header && !header.querySelector(".hdr-inner")) {
    const title = header.querySelector(".site-title");
    const inner = document.createElement("div");
    inner.className = "hdr-inner";
    if (title) {
      title.innerHTML = '<a href="index.html">宅配食ナビ<small>冷凍宅配弁当の比較サイト</small></a>';
      inner.appendChild(title);
    }
    const btn = document.createElement("button");
    btn.id = "navToggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "メニューを開く");
    btn.textContent = "≡ メニュー";
    inner.appendChild(btn);
    header.innerHTML = "";
    header.appendChild(inner);
    btn.addEventListener("click", () => {
      if (!nav) return;
      const open = nav.classList.toggle("open");
      btn.textContent = open ? "× 閉じる" : "≡ メニュー";
    });
  }

  /* --- ナビを内側ラッパーで中央寄せ + 現在地ハイライト --- */
  if (nav && !nav.querySelector(".nav-inner")) {
    const wrap = document.createElement("div");
    wrap.className = "nav-inner";
    while (nav.firstChild) wrap.appendChild(nav.firstChild);
    nav.appendChild(wrap);
  }
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("current");
  });

  /* --- 目次を自動生成(h2が3つ以上ある記事のみ) --- */
  const main = document.querySelector("main");
  if (main) {
    const hs = [...main.querySelectorAll("h2")];
    if (hs.length >= 3) {
      const toc = document.createElement("nav");
      toc.className = "toc";
      toc.setAttribute("aria-label", "目次");
      let html = '<div class="toc-title">この記事の内容</div><ol>';
      hs.forEach((h, i) => {
        if (!h.id) h.id = "sec" + (i + 1);
        html += '<li><a href="#' + h.id + '">' + h.textContent + "</a></li>";
      });
      toc.innerHTML = html + "</ol>";
      // 導入文(.lead)の直後、なければ最初のh2の前に挿入
      const lead = main.querySelector(".lead");
      if (lead && lead.nextSibling) lead.parentNode.insertBefore(toc, lead.nextSibling);
      else hs[0].parentNode.insertBefore(toc, hs[0]);
    }
  }
});
