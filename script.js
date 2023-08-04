const boxes = (numBoxes) => {
    const container = document.querySelector('#boxes-container');
    for (let i = 0; i < numBoxes; i++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        container.appendChild(div);
    }
        const boxElements = document.querySelectorAll('boxes');
        boxElements.forEach(box => {
            box.addEventListener('mouseenter', function() {
                box.style.backgroundColor = 'blue';
        });
    });
};

const slider = document.getElementById('myRange');
slider.addEventListener('input', function() {
    const numBoxes = parseInt(slider.value);
    const container = document.querySelector('#boxes-container');
    container.innerHTML = '';
    boxes(numBoxes);
});

boxes(16);

