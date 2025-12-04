$(document).ready(function(){
    // 信用卡號自動跳轉到下一個輸入框
        $('.card-number-group input').on('input', function() {
            if ($(this).val().length === 4) {
                $(this).next('input').focus();
            }
            });

    // 表單提交
        $('.payment-form').on('submit', function(e) {
            e.preventDefault();
                
            // 驗證通過，跳轉到下一頁
            window.location.href = './input4-1.html';
        });
});
