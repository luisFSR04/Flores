alert("Espero que te guste esto");
function cambios() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('span');
        heart.textContent = '🌻';
        heart.className = 'heart';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (20 + Math.random() * 25) + 'px';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
