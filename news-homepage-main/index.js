const navMenu = document.querySelector('.menu');
const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn')

toggleBtn.addEventListener('click', () => {
    navMenu.style.display = 'unset';
});

closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';
})