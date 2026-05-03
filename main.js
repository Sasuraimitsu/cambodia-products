// 1. 各商品ごとのURLを管理できるようにする（将来的な拡張性）
const STORE_CONFIG = {
  defaultUrl: "https://example.com/shop", // 基本のショップURL
  isReady: false // 公開準備ができたら true にする
};

const note = document.querySelector("#shop-note");
const buyButtons = document.querySelectorAll("[data-buy]");

// メッセージ表示関数（共通化）
const showMessage = (msg) => {
  note.textContent = msg;
  note.classList.add("is-active");
  note.scrollIntoView({ behavior: "smooth", block: "center" });
};

buyButtons.forEach((button) => {
  if (STORE_CONFIG.isReady && STORE_CONFIG.defaultUrl) {
    // 【準備完了時】通常のリンクとして動作
    button.href = STORE_CONFIG.defaultUrl;
    button.target = "_blank";
    button.rel = "noopener";
  } else {
    // 【準備中】クリックイベントで案内を出す
    button.addEventListener("click", (e) => {
      e.preventDefault();
      // ユーザー向けの丁寧な言葉遣いに変更
      showMessage("現在、オンライン販売の準備中です。もうしばらくお待ちください。");
    });
  }
});
