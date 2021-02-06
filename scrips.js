const toggleButton = document.getElementsByClassName('toggle_btn')[0];
const navbarLinks = document.getElementsByClassName ('navbar_links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('on');
});