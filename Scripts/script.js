// Loader functionality
const loader = document.querySelector('.loader');
const mobileLoader = document.querySelector('.mobile-loader');
const mainContent = document.querySelector('.main-content');

function hideLoader() {
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            loader.style.display = 'none';
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '1';
            }
        }, 500);
    }

    if (mobileLoader) {
        mobileLoader.style.opacity = '0';
        mobileLoader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            mobileLoader.style.display = 'none';
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '1';
            }
        }, 500);
    }
}
const style = document.createElement('style');
style.textContent = `
.loader, .mobile-loader {
opacity: 1;
transition: opacity 0.5s ease;
}
.main-content {
display: none;
opacity: 0;
transition: opacity 0.5s ease;
}
`;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', () => {
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    setTimeout(hideLoader, 4000);
});

setTimeout(() => {
    if (loader && loader.style.display !== 'none') {
        hideLoader();
    }
}, 4000);


// Navbars
const plusIcon = document.getElementById('plusIcon');
const hamburger = document.getElementById('hamburger');
const mainMenu = document.getElementById('mainMenu');
const secondaryMenu = document.getElementById('secondaryMenu');
const closeMainMenu = document.getElementById('closeMainMenu');
const closeSecondaryMenu = document.getElementById('closeSecondaryMenu');
hamburger.addEventListener('click', () => {
    mainMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});
plusIcon.addEventListener('click', () => {
    secondaryMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeMainMenu.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});
closeSecondaryMenu.addEventListener('click', () => {
    secondaryMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('main-menu')) {
        mainMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (e.target.classList.contains('secondary-menu')) {
        secondaryMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Scroll to top functionality
let mybutton = document.getElementById("topBtn");
if (mybutton) {
    window.onscroll = function() {
        scrollFunction();
    };

    window.scrollFunction = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    window.topFunction = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

// JavaScript Clock Time
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        document.getElementById('time').textContent = timeString;
    }

    setInterval(updateTime, 1000);
    updateTime();
});

// JavaScript Circular Menu
const centerButton = document.querySelector('.center-button');
const menuItems = document.querySelectorAll('.m-item');
let isMenuOpen = true;
centerButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    centerButton.classList.toggle('plus');
    menuItems.forEach(item => {
        item.classList.toggle('hidden');
    });
});

//Ads
 (adsbygoogle = window.adsbygoogle || []).push({});

 //Blogs
 

 //Scroll
 document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const showBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', showBoxes);
    showBoxes(); 
});

//Search
document.querySelector('.cosmic-search-box').addEventListener('submit', (e) => {
    const query = e.target.querySelector('input').value.trim();
    if (!query) {
        e.preventDefault();
    }
});

//Waves
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");
      
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.05; 
} 
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
let increment = 0;
function drawWave(color, amplitude, frequency, speed, offset) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);    
    for (let i = 0; i < canvas.width; i++) {
        let y = amplitude * Math.sin(i * frequency + increment + offset) + canvas.height / 2;
        ctx.lineTo(i, y);
    }    
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawWave("lightgrey", 10, 0.02, 0.05, 0);
            drawWave("rgba(100, 100, 255, 0.5)", 8, 0.025, 0.04, Math.PI / 4);
            increment += 0.05;
            requestAnimationFrame(animate);
        }
        animate();

//Go Back
function goBack() {
    window.history.back();
}
const gl = document.getElementById("canvas").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vertexShader", "fragmentShader"]);
const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
let mouseX = 0,
    mouseY = 0;
document.getElementById("canvas").addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas, 0.5);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    const uniforms = {
        u_time: (time) * 0.002,
        u_resolution: [gl.canvas.width, gl.canvas.height],
        u_mouse: [mouseX, mouseY],
    };
    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);