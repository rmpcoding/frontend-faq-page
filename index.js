const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.p__question');
const answers = document.querySelectorAll('.p__answer');

answers.forEach((answer) => {
    // answer.style.display = "none";
})

arrowIcons.forEach((arrowIcon) => {
    arrowIcon.addEventListener('click', () => {
        let isQuestionBold = arrowIcon.nextElementSibling.style.fontWeight;
        
        // isQuestionBold initially starts off as falsy on first click
        if (!isQuestionBold) {
            arrowIcon.nextElementSibling.style.fontWeight = "700";
            // here is where the code should display the p__answer text
        }

        // toggles emboldened question to normal font weight
        if (isQuestionBold === "700") {
            arrowIcon.nextElementSibling.style.fontWeight = "400";
        }

        // toggles normal font weight to emboldened question
        if (isQuestionBold === "400") {
            arrowIcon.nextElementSibling.style.fontWeight = "700";
        }




    });
});
