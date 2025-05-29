// Season Detection and Background
        function getSeason() {
            const month = new Date().getMonth() + 1;
            if (month >= 11 || month <= 3) return 'winter';
            if (month >= 4 && month <= 6) return 'summer';
            return 'monsoon';
        }

        function setSeasonalBackground() {
            const season = getSeason();
            const background = document.getElementById('background');
            background.className = `background-container background-${season}`;
            
            // Create seasonal particles
            createSeasonalParticles(season);
        }

        // Seasonal Particle Effects
        function createSeasonalParticles(season) {
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                setTimeout(() => {
                    createParticle(season);
                }, i * 200);
            }
        }

        function createParticle(season) {
            const particle = document.createElement('div');
            particle.className = `particle particle-${season}`;
            
            // Random starting position
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            
            document.body.appendChild(particle);
            
            // Animation based on season
            if (season === 'monsoon') {
                // Rain effect
                particle.style.animation = `fall-${Math.random() * 2 + 1}s linear infinite`;
                particle.style.setProperty('--fall-distance', window.innerHeight + 'px');
            } else if (season === 'winter') {
                // Snow effect
                particle.style.animation = `snow-${Math.random() * 3 + 2}s linear infinite`;
            } else {
                // Summer floating effect
                particle.style.animation = `summer-float-${Math.random() * 4 + 3}s ease-in-out infinite`;
            }
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 5000);
        }

        // Add CSS animations dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall-1s { to { transform: translateY(${window.innerHeight}px); } }
            @keyframes fall-2s { to { transform: translateY(${window.innerHeight}px) translateX(20px); } }
            @keyframes snow-2s { to { transform: translateY(${window.innerHeight}px) translateX(-30px); } }
            @keyframes snow-3s { to { transform: translateY(${window.innerHeight}px) translateX(30px); } }
            @keyframes snow-4s { to { transform: translateY(${window.innerHeight}px) translateX(-10px); } }
            @keyframes summer-float-3s { 0%, 100% { transform: translateY(${window.innerHeight}px) translateX(0); } 50% { transform: translateY(${window.innerHeight/2}px) translateX(20px); } }
            @keyframes summer-float-4s { 0%, 100% { transform: translateY(${window.innerHeight}px) translateX(0); } 50% { transform: translateY(${window.innerHeight/2}px) translateX(-20px); } }
            @keyframes summer-float-5s { 0%, 100% { transform: translateY(${window.innerHeight}px) translateX(0); } 50% { transform: translateY(${window.innerHeight/2}px) translateX(10px); } }
        `;
        document.head.appendChild(style);

        // Cursor Interactive Effect
        const cursorGlow = document.getElementById('cursorGlow');
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorGlow.style.left = mouseX - 10 + 'px';
            cursorGlow.style.top = mouseY - 10 + 'px';
        });

        // Smooth cursor following
        function updateCursor() {
            cursorGlow.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        // Share functionality
        const shareBtn = document.getElementById('shareBtn');
        const shareModal = document.getElementById('shareModal');
        const closeModal = document.getElementById('closeModal');

        shareBtn.addEventListener('click', () => {
            shareModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            shareModal.style.display = 'none';
        });

        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.style.display = 'none';
            }
        });

        // Share options
        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);

        document.getElementById('shareWhatsApp').href = `https://wa.me/?text=${pageTitle} ${pageUrl}`;
        document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
        document.getElementById('shareLinkedIn').href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;

        // Initialize seasonal background
        setSeasonalBackground();

        // Update particles periodically
        setInterval(() => {
            createParticle(getSeason());
        }, 1000);

        // Optimize performance
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateCursor);
                ticking = true;
            }
        }

        // Preload and optimize
        document.addEventListener('DOMContentLoaded', () => {
            // Preload critical resources
            setTimeout(() => {
                setSeasonalBackground();
            }, 100);
        });

        // Service Worker for caching (optional)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(() => {
                // Silent fail for demo
            });
        }

                // Season Detection and Background
        function getSeason() {
            const month = new Date().getMonth() + 1;
            if (month >= 11 || month <= 3) return 'winter';
            if (month >= 4 && month <= 6) return 'summer';
            return 'monsoon';
        }

        function setSeasonalBackground() {
            const season = getSeason();
            const background = document.getElementById('background');
            const weatherEffect = document.getElementById('weatherEffect');
            
            background.className = `background-container background-${season}`;
            
            // Clear previous weather effects
            weatherEffect.innerHTML = '';
            
            // Create seasonal weather effects
            createWeatherEffect(season, weatherEffect);
        }

        // Weather Effects
        function createWeatherEffect(season, container) {
            if (season === 'summer') {
                createWindEffect(container);
            } else if (season === 'monsoon') {
                createRainEffect(container);
            } else if (season === 'winter') {
                createSnowEffect(container);
            }
        }

        function createWindEffect(container) {
            // Create wind lines
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const windLine = document.createElement('div');
                    windLine.className = 'wind-lines';
                    windLine.style.top = Math.random() * window.innerHeight + 'px';
                    windLine.style.left = '-100px';
                    windLine.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    windLine.style.animationDelay = Math.random() * 2 + 's';
                    container.appendChild(windLine);
                    
                    // Remove after animation
                    setTimeout(() => {
                        if (windLine.parentNode) {
                            windLine.parentNode.removeChild(windLine);
                        }
                    }, 5000);
                }, i * 200);
            }
            
            // Continuous wind generation
            setInterval(() => {
                if (getSeason() === 'summer') {
                    const windLine = document.createElement('div');
                    windLine.className = 'wind-lines';
                    windLine.style.top = Math.random() * window.innerHeight + 'px';
                    windLine.style.left = '-100px';
                    windLine.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    container.appendChild(windLine);
                    
                    setTimeout(() => {
                        if (windLine.parentNode) {
                            windLine.parentNode.removeChild(windLine);
                        }
                    }, 5000);
                }
            }, 300);
        }

        // Load QRious for QR generation
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js';
        script.onload = () => {
            const qr = new QRious({
                element: document.getElementById('qrcode'),
                value: window.location.href,
                size: 120,
                background: 'white',
                foreground: '#333'
            });
            qr.makeCode(window.location.href);
            document.getElementById('qrcode').style.display = 'block';
        };
        document.head.appendChild(script);


        // Copy Link functionality
        const copyLinkButton = document.getElementById('copyLink');
        const copyNotification = document.getElementById('copyNotification');

        copyLinkButton.addEventListener('click', () => {
            const url = window.location.href;

            navigator.clipboard.writeText(url)
                .then(() => {
                    // Show notification
                    copyNotification.classList.add('show');
                    // Hide it after 2 seconds
                    setTimeout(() => {
                        copyNotification.classList.remove('show');
                    }, 2000);
                })
                .catch((err) => {
                    console.error('Failed to copy: ', err);
                });
        });

        function createRainEffect(container) {
            // Create rain drops
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const rainDrop = document.createElement('div');
                    rainDrop.className = 'rain-drop';
                    rainDrop.style.left = Math.random() * window.innerWidth + 'px';
                    rainDrop.style.top = '-20px';
                    rainDrop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                    rainDrop.style.animationDelay = Math.random() * 2 + 's';
                    container.appendChild(rainDrop);
                    
                    setTimeout(() => {
                        if (rainDrop.parentNode) {
                            rainDrop.parentNode.removeChild(rainDrop);
                        }
                    }, 3000);
                }, i * 50);
            }
            
            // Continuous rain
            setInterval(() => {
                if (getSeason() === 'monsoon') {
                    for (let i = 0; i < 5; i++) {
                        const rainDrop = document.createElement('div');
                        rainDrop.className = 'rain-drop';
                        rainDrop.style.left = Math.random() * window.innerWidth + 'px';
                        rainDrop.style.top = '-20px';
                        rainDrop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                        container.appendChild(rainDrop);
                        
                        setTimeout(() => {
                            if (rainDrop.parentNode) {
                                rainDrop.parentNode.removeChild(rainDrop);
                            }
                        }, 3000);
                    }
                }
            }, 100);
        }

        function createSnowEffect(container) {
            // Add snow ground
            const snowGround = document.createElement('div');
            snowGround.className = 'snow-ground';
            container.appendChild(snowGround);
            
            // Create snowflakes
            const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
                    snowflake.style.left = Math.random() * window.innerWidth + 'px';
                    snowflake.style.top = '-20px';
                    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    snowflake.style.animationDelay = Math.random() * 2 + 's';
                    snowflake.style.fontSize = (Math.random() * 0.8 + 0.8) + 'em';
                    container.appendChild(snowflake);
                    
                    setTimeout(() => {
                        if (snowflake.parentNode) {
                            snowflake.parentNode.removeChild(snowflake);
                        }
                    }, 8000);
                }, i * 100);
            }
            
            // Continuous snow
            setInterval(() => {
                if (getSeason() === 'winter') {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
                    snowflake.style.left = Math.random() * window.innerWidth + 'px';
                    snowflake.style.top = '-20px';
                    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    snowflake.style.fontSize = (Math.random() * 0.8 + 0.8) + 'em';
                    container.appendChild(snowflake);
                    
                    setTimeout(() => {
                        if (snowflake.parentNode) {
                            snowflake.parentNode.removeChild(snowflake);
                        }
                    }, 8000);
                }
            }, 2000);
        }

        // QR Zoom on Click
        const qrCanvas = document.getElementById('qrcode');
        const zoomModal = document.getElementById('qrZoomModal');
        const closeQrZoom = document.getElementById('closeQrZoom');
        const qrZoomedCanvas = document.getElementById('qrcodeZoomed');

        // Open QR zoom modal
        qrCanvas.addEventListener('click', () => {
            // Generate enlarged QR
            new QRious({
                element: qrZoomedCanvas,
                value: window.location.href,
                size: 260,
                background: 'white',
                foreground: '#333'
            });

            zoomModal.style.display = 'flex';
        });

        // Close zoom modal
        closeQrZoom.addEventListener('click', () => {
            zoomModal.style.display = 'none';
        });

        document.getElementById('qrZoomBackdrop').addEventListener('click', () => {
            zoomModal.style.display = 'none';
        });

