document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 設定觀察選項
    const observerOptions = {
        root: null, // 使用瀏覽器視窗
        rootMargin: '0px',
        threshold: 0.2 // 當元素 20% 進入視窗時觸發
    };
    
    // 2. 創建 Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 添加 is-visible 類別觸發動畫
                entry.target.classList.add('is-visible');
                
                // 動畫執行後停止觀察
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 3. 選取所有經歷區塊
    const experienceBlocks = document.querySelectorAll('.experience');
    
    // 4. 開始觀察每個區塊
    experienceBlocks.forEach(block => {
        observer.observe(block);
    });
    
    // 5. 為律師 Banner 卡片添加進入動畫（可選）
    const lawerBannerCard = document.querySelector('.lawer-banner-card');
    if (lawerBannerCard) {
        // 頁面載入時淡入
        setTimeout(() => {
            lawerBannerCard.style.opacity = '0';
            lawerBannerCard.style.transform = 'translateY(30px)';
            lawerBannerCard.style.transition = 'all 0.8s ease-out';
            
            // 延遲顯示
            requestAnimationFrame(() => {
                lawerBannerCard.style.opacity = '1';
                lawerBannerCard.style.transform = 'translateY(0)';
            });
        }, 100);
    }
    
    console.log('律師頁面滾動動畫已啟動！');
});