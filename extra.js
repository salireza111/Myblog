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