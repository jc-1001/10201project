document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 設定觀察選項
    const observerOptions = {
        root: null, // 使用瀏覽器視窗作為觀察範圍
        rootMargin: '0px', // 不設定額外的邊距
        threshold: 0.5 // 當元素 50% 進入視窗時觸發//修改!!!
    };
    
    // 2. 創建 Intersection Observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // 當元素進入視窗時
            if (entry.isIntersecting) {
                // 添加 is-visible 類別來觸發 CSS 動畫
                entry.target.classList.add('is-visible');
                
                // 動畫執行後，停止觀察該元素（避免重複觸發）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 3. 選取需要觀察的元素
    
    // 專業團隊區塊
    const lawerTitle = document.querySelector('.lawer .title');
    const lawerCards = document.querySelectorAll('.lawer-card');
    
    // 契約生成區塊
    const contractTitle = document.querySelector('.contract .title');
    const contractSubText = document.querySelector('.contract .sub-txt');
    const contractButton = document.querySelector('.contract .button');
    
    // 契約卡片清單
    const ctCards = document.querySelectorAll('.ct-card');
    
    // 4. 開始觀察元素
    
    // 觀察專業團隊標題
    if (lawerTitle) {
        observer.observe(lawerTitle);
    }
    
    // 觀察所有律師卡片
    lawerCards.forEach(card => {
        observer.observe(card);
    });
    
    // 觀察契約生成標題
    if (contractTitle) {
        observer.observe(contractTitle);
    }
    
    // 觀察契約生成副標題
    if (contractSubText) {
        observer.observe(contractSubText);
    }
    
    // 觀察契約生成按鈕
    if (contractButton) {
        observer.observe(contractButton);
    }
    
    // 觀察所有契約卡片
    ctCards.forEach(card => {
        observer.observe(card);
    });
    
    // 5. 通用滾動顯示功能（可選）
    // 如果您想為其他元素添加滾動效果，只需加上 .scroll-fade-in 類別
    const scrollElements = document.querySelectorAll('.scroll-fade-in');
    scrollElements.forEach(el => {
        observer.observe(el);
    });
    
    console.log('滾動漸進動畫已啟動！');
});