
// 1. 取得所有需要監聽的輸入元素(定義id/class名稱)
      const pay1Input = document.getElementById("pay1");
      const paydayInput = document.getElementById("payday");
      const howtoPayRadios = document.querySelectorAll(
        'input[name="howtoPay"]'
      );
      const preRantRadios = document.querySelectorAll('input[name="pre-rant"]');
      const prePayInput = document.getElementById("pre-pay");

      // 2. 取得所有需要更新的預覽元素
      const previewPay1 = document.getElementById("preview-pay1");
      const previewPayday = document.getElementById("preview-payday");
      const previewHowtoPay = document.getElementById("preview-howtoPay");
      const previewPreRantStatus = document.getElementById(
        "preview-pre-rant-status"
      );
      const previewPreRantAmountContainer = document.getElementById(
        "preview-pre-rant-amount"
      );
      const previewPrePay = document.getElementById("preview-pre-pay");

      // --- 監聽事件及更新函式 ---

      // Q1 & Q2: 租金金額和支付日期的更新
      function updatePaymentInfo() {
        // 更新每月租金金額，如果沒輸入就顯示底線
        previewPay1.textContent =
          pay1Input.value.trim() !== ""
            ? new Intl.NumberFormat().format(pay1Input.value)
            : "________";

        // 更新支付日期，如果沒輸入就顯示底線
        previewPayday.textContent =
          paydayInput.value.trim() !== "" ? paydayInput.value : "___";
      }

      pay1Input.addEventListener("input", updatePaymentInfo);
      paydayInput.addEventListener("input", updatePaymentInfo);

      // Q3: 支付方式的更新
      function updateHowtoPay() {
        let selectedMethod = "";
        // 遍歷所有 radio button
        howtoPayRadios.forEach((radio) => {
          if (radio.checked) {
            // 找到被選中的 radio button 的 label 文本作為支付方式
            selectedMethod = document.querySelector(
              `label[for="${radio.id}"]`
            ).textContent;
          }
        });

        previewHowtoPay.textContent =
          selectedMethod !== "" ? selectedMethod : "__________________";
      }

      howtoPayRadios.forEach((radio) => {
        radio.addEventListener("change", updateHowtoPay);
      });

      // Q4: 押租金約定及金額的更新
      function updatePreRantInfo() {
        let statusText = "";
        let isPreRant = false;

        preRantRadios.forEach((radio) => {
          if (radio.checked) {
            // 找到被選中的 radio button 的 label 文本作為狀態
            statusText = document.querySelector(
              `label[for="${radio.id}"]`
            ).textContent;
            if (radio.value === "pre-rant2") {
              // 判斷是否為「有押金」
              isPreRant = true;
            }
          }
        });

        // 更新狀態 (無約定 / 有押金)
        previewPreRantStatus.textContent = statusText;

        // 根據是否有押金來顯示或隱藏押金金額的預覽區塊
        if (isPreRant) {
          previewPreRantAmountContainer.style.display = "inline";
          // 更新押金金額
          previewPrePay.textContent =
            prePayInput.value.trim() !== ""
              ? new Intl.NumberFormat().format(prePayInput.value)
              : "________";
        } else {
          previewPreRantAmountContainer.style.display = "none";
          previewPrePay.textContent = "________"; // 清空金額
        }
      }

      preRantRadios.forEach((radio) => {
        radio.addEventListener("change", updatePreRantInfo);
      });

      prePayInput.addEventListener("input", updatePreRantInfo);

      // 頁面載入時執行一次初始化，確保預設值也能顯示
      document.addEventListener("DOMContentLoaded", () => {
        updatePaymentInfo();
        updateHowtoPay();
        updatePreRantInfo();
      });


$(document).ready(function () {
    /// 表單提交 - 直接跳轉，不做額外驗證
  $('.contain-left form').on('submit', function(e) {
    e.preventDefault();
    window.location.href = './input3.html';
  });
});