document.addEventListener("DOMContentLoaded", function() {
    const boxes = (numRows, numCols) => {
        const container = document.querySelector('#boxes-container');
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const div = document.createElement('div');
                div.classList.add('boxes');
                container.appendChild(div);

                div.addEventListener('mouseenter', function() {
                    div.style.backgroundColor = 'blue';
                });
            }
        }
    };

    const slider = document.getElementById('myRange');
    slider.addEventListener('input', function() {
        const numBoxes = parseInt(slider.value);
        const numRows = Math.ceil(Math.sqrt(numBoxes));
        const numCols = Math.ceil(Math.sqrt(numBoxes));
        
        const container = document.querySelector('#boxes-container');
        container.innerHTML = '';
        boxes(numRows, numCols);
    });

    boxes(4, 4);
});
