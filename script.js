const boxes = () => {
    const container = document.querySelector('#boxes-container');
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('boxes');
        div.textContent = `Box ${i+1}`;
        div.style.backgroundColor = 'lightblue';
        container.appendChild(div);
    };
};

boxes();