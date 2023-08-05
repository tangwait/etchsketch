document.addEventListener("DOMContentLoaded", function() {
    const maxBoxes = 400;
    const gridSize = Math.ceil(Math.sqrt(maxBoxes));

    const boxes = (numRows, numCols) => {
        const container = document.querySelector('#boxes-container');
        container.style.setProperty('--numRows', numRows);
        container.style.setProperty('--numCols', numCols);

        for (let i = 0; i < numRows * numCols; i++) {
            const div = document.createElement('div');
            div.classList.add('boxes');
            container.appendChild(div);

            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = 'blue';
            });
        }
    };

    const slider = document.getElementById('myRange');
    slider.addEventListener('input', function() {
        const numBoxes = parseInt(slider.value);

        const numRows = Math.ceil(Math.sqrt(numBoxes));
        const numCols = Math.ceil(numBoxes / numRows);

        const container = document.querySelector('#boxes-container');
        container.innerHTML = '';
        boxes(numRows, numCols);
    });

    boxes(gridSize, gridSize);
});
