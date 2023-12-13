const canvas = document.querySelector("canvas");

//added
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//added-end

const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = images/three_wise_men.png;

let isScratching = false;

backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', (event) => {
    isScratching = true;
    scratch(event);
});

canvas.addEventListener('mousemove', (event) => {
    scratch(event);
});

canvas.addEventListener('mouseup', () => {
    isScratching = false;
});

/*
function scratch(event) {
    if (!isScratching) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop,
        20,
        0,
        Math.PI * 2
    );
    ctx.fill();
}
*/

// Add a mousemove event listener to the scratch card
document.querySelector('.scratch-card').addEventListener('mousemove', function(event) {
    // Get the position of the mouse relative to the scratch card
    const x = event.offsetX;
    const y = event.offsetY;
  
    // Simulate the scratch effect by revealing the scratch image at the mouse position
    document.querySelector('.scratch-card .scratch-image').style.left = x + 'px';
    document.querySelector('.scratch-card .scratch-image').style.top = y + 'px';
  });
  
//open the card - WELL FUNCTIONING
function handleBackgroundClick() {
    const card = document.querySelector('.card');

    card.addEventListener('click', function() {
    card.classList.toggle('open');
});
}