function cambios() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.textContent = '🏵️🌻';
        heart.className = 'heart';

        const startX = Math.random() * 90;
        heart.style.left = `${startX}vw`;
        heart.style.top = '0px';
        heart.style.fontSize = `${18 + Math.random() * 30}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}
