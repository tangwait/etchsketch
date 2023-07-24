const boxes = () => {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.textContent = `Box ${i+1}`;
        div.style.backgroundColor = 'lightblue';
        document.body.appendChild(div);
    };
};

boxes();