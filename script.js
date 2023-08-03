const boxes = () => {
    const container = document.querySelector('#boxes-container');
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        container.appendChild(div);

        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = 'blue';
        });
    };
};
boxes();