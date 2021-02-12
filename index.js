    const arrowIcons = document.querySelectorAll('.arrow-icon');
    const questions = document.querySelectorAll('.p__question');
    const answers = document.querySelectorAll('.p__answer');
    
    $(document).ready(() => {
        arrowIcons.forEach((arrowIcon) => {
            arrowIcon.addEventListener('click', (e) => {
                let id = parseInt(e.target.getAttribute('data-id'));
                let answer = answers[id];
    
                handleClick(id, answer);
            });
        });
    
        const handleClick = (data, element) => {
            answers[data].style.display === 'block'
                ? ((questions[data].style.fontWeight = 400),
                  $(element).slideUp('1000'))
                : ((questions[data].style.fontWeight = 700),
                  (answers[data].style.color = 'hsl(240, 6%, 50%)'),
                  $(element).slideDown('1000'));
        };
    });
    
    // jQuery added for animations