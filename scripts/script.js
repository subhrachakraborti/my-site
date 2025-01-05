// Mobile-View Navigation Button
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuContent = document.getElementById('menuContent');

    console.log('Menu Button:', menuButton); // Should log the button element
    console.log('Menu Content:', menuContent); // Should log the content div

    if (!menuButton || !menuContent) {
        console.error('Required elements are missing in the DOM.');
        return;
    }
    let isOpen = false;

    // Toggle menu on button click
    menuButton.addEventListener('click', () => {
        isOpen = !isOpen;
        menuContent.classList.toggle('open', isOpen);
        menuButton.textContent = isOpen ? '✖' : '☰';
    });

    // Hide menu when scrolling
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // User is scrolling down
            if (isOpen) {
                isOpen = false;
                menuContent.classList.remove('open');
                menuButton.textContent = '☰';
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
    });

    // Close menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!menuContent.contains(e.target) && e.target !== menuButton && isOpen) {
            isOpen = false;
            menuContent.classList.remove('open');
            menuButton.textContent = '☰';
        }
    });
});


// Custom Navigation
const myNav = document.getElementById("myNav");
const customMenuBtn = document.querySelector(".custom_menu-btn");
if (myNav && customMenuBtn) {
    window.openNav = function() {
        myNav.classList.toggle("menu_width");
        customMenuBtn.classList.toggle("menu_btn-style");
    }
}

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

// JavaScript Circular Menu

const centerButton = document.querySelector('.center-button');
const menuItems = document.querySelectorAll('.m-item');
let isMenuOpen = true;

centerButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    // Toggle the plus/cross button
    centerButton.classList.toggle('plus');

    // Toggle menu items visibility with animation
    menuItems.forEach(item => {
        item.classList.toggle('hidden');
    });
});

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

// Right Click Disabled
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right click is disabled for security reasons!');
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
      alert('Screenshots are not allowed!');
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
      e.Event.cancelBubble = true;
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.KeyboardEvent.keyCode == 123) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      e.preventDefault();
    }
  });
  
// Function to play audio
function playAudio() {
    var audio = document.getElementById('background-audio');
    audio.volume = 0.30; // Set volume to 30%
 
    if (audio.paused) {
        audio.play().catch(function(error) {
            console.log("Audio playback failed:", error);
        });
    }
}

window.onload = function() {
    playAudio();
};

document.addEventListener('keydown', function(e) {
    playAudio();
});