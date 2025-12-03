        // 模擬加載進度（可選）
        var progress = 0;
        var progressInterval = setInterval(function() {
            progress += Math.random() * 30;
            if (progress > 90) {
                progress = 90;
                clearInterval(progressInterval);
            }
            $('#progressFill').css('width', progress + '%');
        }, 200);

        // 監聽頁面完全加載（包括圖片、樣式等所有資源）
        $(window).on('load', function() {
            // 確保進度條到 100%
            clearInterval(progressInterval);
            $('#progressFill').css('width', '100%');
            
            // 稍作延遲讓用戶看到 100%
            setTimeout(function() {
                // 添加淡出 class
                $('#pageLoader').addClass('fade-out');
                
                // 等待淡出動畫完成後移除元素
                setTimeout(function() {
                    $('#pageLoader').remove();
                    $('#mainContent').addClass('loaded');
                }, 500); // 與 CSS transition 時間一致
            }, 300);
        });

        
        $(window).on('load', function() {
            var elapsedTime = Date.now() - startTime;
            var remainingTime = Math.max(0, minDisplayTime - elapsedTime);
            
            // 如果加載太快，延遲一下再隱藏
            setTimeout(function() {
                clearInterval(progressInterval);
                $('#progressFill').css('width', '100%');
                
                setTimeout(function() {
                    $('#pageLoader').addClass('fade-out');
                    setTimeout(function() {
                        $('#pageLoader').remove();
                        $('#mainContent').addClass('loaded');
                    }, 500);
                }, 300);
            }, remainingTime);
        });