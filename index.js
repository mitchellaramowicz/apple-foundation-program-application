document.addEventListener('DOMContentLoaded', () => {

    const questionItems = document.querySelectorAll('.question-item');
    const dots = document.querySelectorAll('.tracker-dot');
    const nextButtons = document.querySelectorAll('.next-button');

    // Function to update the tracker dots
    function updateTracker() {
        questionItems.forEach((item, index) => {
            if (item.classList.contains('active')) {
                dots[index].classList.add('active');
            } else {
                dots[index].classList.remove('active');
            }
        });
    }

    // Toggle logic for question headers
    questionItems.forEach((item, index) => {
        const header = item.querySelector('.question-header');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            questionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }

            updateTracker();
        });
    });

    // Tracker dots click logic
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Close all
            questionItems.forEach(item => {
                item.classList.remove('active');
            });

            // Open the one corresponding to the dot
            questionItems[index].classList.add('active');

            updateTracker();
        });
    });

    // Next button logic
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            // Close current question
            questionItems[index].classList.remove('active');

            // Open next question
            if (questionItems[index + 1]) {
                questionItems[index + 1].classList.add('active');
            }

            updateTracker();
        });
    });
});