const enterButton = document.getElementById("enterButton")

document.getElementById("enterButton").addEventListener('click', function(){
    window.location.href = "tracking.html"
})

function toggleMenu() {
    var menuIcon = document.querySelector('.mobile-menu-icon');
    var leftSide = document.querySelector('.left-side');
    menuIcon.classList.toggle('change');
    leftSide.classList.toggle('collapsed');
}

$(document).ready(function() {

    var data = [
        ["13-03-2024", "IMG", "09:34 AM", "00 Hours, 50 Minutes", "IMG", "06:30 PM", "8 Hours, 30 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["15-03-2024", "IMG", "09:28 AM", "00 Hours, 32 Minutes", "IMG", "06:30 PM", "8 Hours, 50 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"],
        ["14-03-2024", "IMG", "09:32 AM", "00 Hours, 40 Minutes", "IMG", "06:38 PM", "8 Hours, 20 Minutes"]
    ];

    $('#myTable').DataTable({
        data: data,
        responsive: true
    });
});


