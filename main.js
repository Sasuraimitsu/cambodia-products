const ONLINE_STORE_URL = "";

const note = document.querySelector("#shop-note");
const buyButtons = document.querySelectorAll("[data-buy]");

buyButtons.forEach((button) => {
  if (ONLINE_STORE_URL) {
    button.href = ONLINE_STORE_URL;
    button.target = "_blank";
    button.rel = "noopener";
    note.textContent = "";
    note.classList.remove("is-active");
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    note.textContent = "公開前に販売ページのURLを設定してください。設定後は、このボタンから通販ページへ移動できます。";
    note.classList.add("is-active");
    note.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
