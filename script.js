const enterButton = document.getElementById("enterButton")

document.getElementById("enterButton").addEventListener('click', function(){
    window.location.href = "tracking.html"
})

// JavaScript function to toggle the menu
function toggleMenu() {
    var menuIcon = document.querySelector('.mobile-menu-icon');
    var leftSide = document.querySelector('.left-side');
    menuIcon.classList.toggle('change');
    leftSide.classList.toggle('collapsed');
}

