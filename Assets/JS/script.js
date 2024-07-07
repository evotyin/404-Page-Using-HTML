document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('starCanvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    function getRandomColor() {
        const colors = ['#ff005a', '#8400ff', '#00c8ff', '#ffd700', '#00ff40'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createStar() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = Math.random() * 50 + 5; // Slightly smaller stars
        const speed = Math.random() * 2 + 1; // Slower stars
        const color = getRandomColor();
        stars.push({ x, y, length, speed, color });
    }

    function drawStar(star) {
        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(star.x - star.length, star.y - star.length);
        context.strokeStyle = star.color;
        context.lineWidth = 2;
        context.stroke();
    }

    function animateStars() {
        requestAnimationFrame(animateStars);
        context.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star, index) => {
            star.x += star.speed;
            star.y += star.speed;

            if (star.x > canvas.width || star.y > canvas.height) {
                stars.splice(index, 1);
                createStar();
            }

            drawStar(star);
        });
    }

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    animateStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
