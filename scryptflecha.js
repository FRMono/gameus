document.addEventListener("DOMContentLoaded", function() {
    const arrows = document.querySelectorAll('.arrow');
    const contents = document.querySelectorAll('.info');

    let currentIndex = 0;

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains('left')) {
                currentIndex = (currentIndex === 0) ? contents.length - 1 : currentIndex - 1;
            } else {
                currentIndex = (currentIndex === contents.length - 1) ? 0 : currentIndex + 1;
            }
            updateContent();
        });
    });

    function updateContent() {
        contents.forEach((content, index) => {
            if (index === currentIndex) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
});

