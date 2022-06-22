let zones = document.querySelectorAll('.die'),
    rightBtn = document.querySelector('#rightArrow'),
    leftBtn = document.querySelector('#leftArrow'),
    rotation = 0;

rightBtn.addEventListener('click', () => {
    rotation -= 90;
    if (rotation == Math.abs(360)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });
});

leftBtn.addEventListener('click', () => {
    rotation += 90;
    if (rotation == Math.abs(360)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });
});