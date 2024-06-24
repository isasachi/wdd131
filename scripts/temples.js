
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', function() {
        if (nav.style.display === 'none') {
            nav.style.display = 'block';
            menuIcon.innerHTML = 'X'
        } else {
            nav.style.display = 'none';
            menuIcon.innerHTML = '&#9776;';
        }
    });
});
