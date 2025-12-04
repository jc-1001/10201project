$(document).ready(function () {
    /// 表單提交 - 直接跳轉，不做額外驗證
  $('.contain-left form').on('submit', function(e) {
    e.preventDefault();
    window.location.href = './input3.html';
  });
});