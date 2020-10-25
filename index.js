const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.p__question');

arrowIcons.forEach((arrowIcon) => {
    arrowIcon.addEventListener('click', () => {
        arrowIcon.nextElementSibling.style.fontWeight = "700";
        // Run ternary operation OR if statement to toggle on or off
        // If fontWeight is equal to 700
            // Change fontWeight to normal size
        // Else do change fontWeight to 700
        console.log(arrowIcon.nextElementSibling.style.fontWeight)
    });
});
