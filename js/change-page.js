
    // 確保 DOM 結構載入完成
    document.addEventListener('DOMContentLoaded', () => {
        // 選擇所有指向內部頁面（以 .html 結尾且不包含外部協定）的連結
        const internalLinks = document.querySelectorAll('a[href^="./"], a[href^="../"], a[href^="/"], a[href$=".html"], a[href$=".htm"]');
        
        // 排除掉不需淡出的連結，例如錨點連結 (#...) 和 target="_blank" 的連結
        const filteredLinks = Array.from(internalLinks).filter(link => {
            const href = link.getAttribute('href');
            const target = link.getAttribute('target');
            
            // 排除錨點 (#...) 和 target="_blank" 的連結
            return href && !href.startsWith('#') && target !== '_blank';
        });

        // 動畫持續時間，必須與 CSS 中的 `0.5s` 保持一致（單位為毫秒）
        const transitionDuration = 300; 
        const pageBody = document.body;

        filteredLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // 1. 阻止瀏覽器立即跳轉頁面
                event.preventDefault();
                const targetUrl = link.getAttribute('href');

                // 2. 將淡出類別添加到 body 元素
                pageBody.classList.add('page-fade-out');

                // 3. 等待動畫完成後才執行真正的頁面跳轉
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, transitionDuration);
            });
        });
    });
