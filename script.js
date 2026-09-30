/* ==========================================================
   Link do checkout — altere somente aqui para trocar em
   todos os botões de compra da página.
   ========================================================== */
const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQGKO8";

document.querySelectorAll("[data-checkout]").forEach(function (btn) {
  btn.href = CHECKOUT_URL;
});
