document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.createElement('button');
    toggleButton.innerText = '☰'; // You can use any symbol or text here
    toggleButton.className = 'toggle-button';
    
    toggleButton.addEventListener('click', function() {
        var sidebar = document.querySelector('.md-sidebar');
        sidebar.classList.toggle('hidden');
    });

    var header = document.querySelector('.md-header');
    header.appendChild(toggleButton);
});
// File: docs/js/custom.js

// Function to change the favicon
function changeFavicon(src) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = src;
}

// Detect visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        changeFavicon('logofav.png'); // Path to your active (red) favicon
    } else {
        changeFavicon('logo copy.png'); // Path to your inactive (silver) favicon
    }
});

// Initial state
if (document.visibilityState === 'visible') {
    changeFavicon('logofav.png');
} else {
    changeFavicon('logo copy.png');
}
