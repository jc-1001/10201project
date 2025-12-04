$(document).ready(function() {
    // 鎖定要執行動畫的區塊
    var $newsSection = $('section.servers');
    // 捲動偵測函式
    function checkScroll() {
        // 1. 取得視窗的高度 (Viewport Height)
        var windowHeight = $(window).height();

        // 2. 取得使用者目前捲動到的位置
        var scrollPosition = $(window).scrollTop();

        // 3. 取得目標區塊相對於文件頂部的位置
        var sectionOffset = $newsSection.offset().top;

        // 4. 設定一個觸發點 (例如：當區塊的頂部進入到視窗底部上方 150px 處時觸發)
        var triggerPoint = scrollPosition + windowHeight - 300; // 可以調整這個數值

        // 5. 判斷是否應該顯示區塊
        // 如果 觸發點 (triggerPoint) 已經超過 區塊的位置 (sectionOffset)
        if (triggerPoint > sectionOffset) {
            // 加上 is-visible 類別，觸發 CSS 的 opacity: 1
            $newsSection.addClass('is-visible');
            // 一旦顯示後，移除捲動事件監聽，避免重複執行 (效能優化)
            $(window).off('scroll', checkScroll);
        }
    }

    // A. 第一次頁面載入時先執行一次，以防元素一開始就在視窗內
    checkScroll();

    // B. 監聽視窗捲動事件
    $(window).on('scroll', checkScroll);
});