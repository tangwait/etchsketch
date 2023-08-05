document.addEventListener("DOMContentLoaded", function() {
    const boxes = (numRows, numCols) => {
        const container = document.querySelector('#boxes-container');
        container.style.setProperty('--numRows', numRows);
        container.style.setProperty('--numCols', numCols);

        for (let i = 0; i < numRows * numCols; i++) {
            const div = document.createElement('div');
            div.classList.add('boxes');
            container.appendChild(div);

            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = '#D3C4FF';
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
        console.log(numRows);
    });

    updateDesc = () => {
        const gridInput = document.getElementById('myRange');
        gridInput.addEventListener('input', function() {
            const numBoxes = parseInt(gridInput.value);
            const numRows = Math.ceil(Math.sqrt(numBoxes));
            const matrixSize = numRows;
            const gridDesc = document.getElementById('grid-desc');

            gridDesc.textContent = matrixSize + 'x' + matrixSize;
        });
    };

    boxes(4, 4);
    updateDesc();
});
