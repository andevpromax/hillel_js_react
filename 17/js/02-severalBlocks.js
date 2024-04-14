/* 
* =============================================
* Working with 3 blocks
*/

const block = document.querySelectorAll('.block');

let xStart, yStart;
let activeBlock;

const mousedownHandler = (event) => {
    activeBlock = event.target;
    activeBlock.classList.add('active');

    xStart = event.clientX;
    yStart = event.clientY;

    activeBlock.addEventListener('mousemove', mousemoveHandler);
    window.addEventListener('mouseup', mouseupHandler);
};

const mousemoveHandler = (event) => {
    activeBlock = event.target;

    let xEnd = event.clientX;
    let yEnd = event.clientY;

    const horizontalDiff = xEnd - xStart;
    const verticalDiff = yEnd - yStart;

    xStart = xEnd;
    yStart = yEnd;

    activeBlock.style.left = `${parseInt(activeBlock.style.left || 0) + horizontalDiff}px`;
    activeBlock.style.top = `${parseInt(activeBlock.style.top || 0) + verticalDiff}px`;
};


const mouseupHandler = (event) => {
    activeBlock = event.target;

    activeBlock.classList.remove('active');

    activeBlock.removeEventListener('mousemove', mousemoveHandler);
    window.removeEventListener('mouseup', mouseupHandler);
};

block.forEach(block => {
    block.addEventListener('mousedown', mousedownHandler);
});


