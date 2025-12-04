document.addEventListener('DOMContentLoaded', () => {
    // 1. 獲取所有需要滾動顯示的元素
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // 2. 設置 Intersection Observer 的選項
    // rootMargin: '0px 0px -150px 0px' 讓元素在距離視窗底部 150px 時就開始動畫。
    const options = {
      root: null, // 觀察者為 viewport
      rootMargin: '0px 0px -150px 0px', 
      threshold: 0 // 只要有一點進入就觸發
    };

    // 3. 創建觀察器實例和回調函數
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // 如果元素沒有進入視窗，則跳過
        if (!entry.isIntersecting) {
          return;
        }

        // 元素進入視窗：
        // (1) 添加 .visible class 觸發 CSS 動畫 (透過 transition 實現平滑出現)
        entry.target.classList.add('visible');

        // (2) 停止觀察該元素，避免重複觸發
        observer.unobserve(entry.target);
      });
    }, options);

    // 4. 開始觀察所有目標元素
    revealElements.forEach(element => {
      observer.observe(element);
    });
});