/* -------------------------------------------------------------------------- */
/*                          THIS WAS MY FIRST ATTEMPT                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          This code no longer works                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*             It's here solely to show a before and after effect             */
/* -------------------------------------------------------------------------- */

/*
I wanted to retain this code to show what it was like when I first built this, especially because I planned to make a GIF with the before and after effect. In essence, this code worked, but the drop down was very abrupt and simply didn't work as intended. As such, I came back with more knowledge and cleaned it up a LOT.

If you want to see for yourself, go to the HTML script tag and swap out out JS files (add 2 to the end of current file name, and this page will run instead). 
*/


const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.p__question');
const answers = document.querySelectorAll('.p__answer');

$(document).ready(() => {
    arrowIcons.forEach((arrowIcon) => {
        arrowIcon.addEventListener('click', (e) => {
            let isQuestionBold = arrowIcon.nextElementSibling.style.fontWeight;
            // let arrowId = answers[arrowIcon.getAttribute('data-id')].getAttribute('data-id')
            let p__answer = answers[arrowIcon.getAttribute('data-id')];
            console.log(answers)

            $(p__answer).slideDown('1000');

            // isQuestionBold initially starts off as falsy on first click
            if (!isQuestionBold) {
                arrowIcon.nextElementSibling.style.fontWeight = '700';
                answers[arrowIcon.getAttribute('data-id')].style.color =
                    'hsl(240, 6%, 50%)';
                answers[arrowIcon.getAttribute('data-id')].style.display =
                    'block';
            }
            // toggles emboldened question to normal font weight
            if (isQuestionBold === '700') {
                arrowIcon.nextElementSibling.style.fontWeight = '400';
                answers[arrowIcon.getAttribute('data-id')].style.display =
                    'none';
            }
            // toggles normal font weight to emboldened question
            if (isQuestionBold === '400') {
                arrowIcon.nextElementSibling.style.fontWeight = '700';
                answers[arrowIcon.getAttribute('data-id')].style.display =
                    'block';
            }
        });
    });
});

// jQuery added for animations


// create two separate classes for both div questions and answers
// create function to toggle on/off classes when arrow icon is clicked
    // class #1 should display question in bold
    // class #2 should display answer


