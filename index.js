const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.p__question');

arrowIcons.forEach((arrowIcon) => {
    arrowIcon.addEventListener('click', () => {
        arrowIcon.nextElementSibling.style.fontWeight = "700";
    });
});
