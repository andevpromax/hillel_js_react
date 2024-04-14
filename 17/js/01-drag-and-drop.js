/* 
* =============================================
* drag-and-drop
*/

// const block = document.querySelector('#block');

// block.style.left = 0;
// block.style.top = 0;

// let xStart, yStart;

// block.addEventListener('mousedown', (event) => {
//     xStart = event.clientX;
//     yStart = event.clientY;
// });

// block.addEventListener('mouseup', (event) => {
//     let xEnd = event.clientX;
//     let yEnd = event.clientY;

//     let currentBlockLeft = parseInt(block.style.left);
//     let currentBlockTop = parseInt(block.style.top);

//     const horizontalDiff = xEnd - xStart;
//     const verticalDiff = yEnd - yStart;

//     block.style.left = currentBlockLeft + horizontalDiff + 'px';
//     block.style.top = currentBlockTop + verticalDiff + 'px';
// });

/* 
* =============================================
* add mouseup for window
*/

// const block = document.querySelector('#block');

// block.style.left = 0;
// block.style.top = 0;

// let xStart, yStart;

// block.addEventListener('mousedown', (event) => {
//     xStart = event.clientX;
//     yStart = event.clientY;
// });

// window.addEventListener('mouseup', (event) => {
//     console.log(event)
//     let xEnd = event.clientX;
//     let yEnd = event.clientY;

//     let currentBlockLeft = parseInt(block.style.left);
//     let currentBlockTop = parseInt(block.style.top);

//     const horizontalDiff = xEnd - xStart;
//     const verticalDiff = yEnd - yStart;

//     block.style.left = currentBlockLeft + horizontalDiff + 'px';
//     block.style.top = currentBlockTop + verticalDiff + 'px';
// });

/* 
* =============================================
* add logic for separate functions
*/

// const block = document.querySelector('#block');

// block.style.left = 0;
// block.style.top = 0;

// let xStart, yStart;

// const mousedownHandler = (event) => {
//     xStart = event.clientX;
//     yStart = event.clientY;

//     block.addEventListener('mousemove', mouseupHandler);
//     window.addEventListener('mouseup', mouseupHandler);

//     window.addEventListener('mouseup', () => {
//         block.removeEventListener('mousemove', mouseupHandler);
//     })
// };


// const mouseupHandler = (event) => {
//     let xEnd = event.clientX;
//     let yEnd = event.clientY;

//     let currentBlockLeft = parseInt(block.style.left);
//     let currentBlockTop = parseInt(block.style.top);

//     const horizontalDiff = xEnd - xStart;
//     const verticalDiff = yEnd - yStart;

//     xStart = xEnd;
//     yStart = yEnd;

//     block.style.left = currentBlockLeft + horizontalDiff + 'px';
//     block.style.top = currentBlockTop + verticalDiff + 'px';

//     window.removeEventListener('mouseup', mouseupHandler);
// };

// block.addEventListener('mousedown', mousedownHandler);

/* 
* =============================================
* refactoring
*/

const block = document.querySelector('#block');

block.style.left = 0;
block.style.top = 0;

let xStart, yStart;

const mousedownHandler = (event) => {
    xStart = event.clientX;
    yStart = event.clientY;

    block.addEventListener('mousemove', mousemoveHandler);
    window.addEventListener('mouseup', mouseupHandler);
};

const mousemoveHandler = (event) => {
    let xEnd = event.clientX;
    let yEnd = event.clientY;

    let currentBlockLeft = parseInt(block.style.left);
    let currentBlockTop = parseInt(block.style.top);

    const horizontalDiff = xEnd - xStart;
    const verticalDiff = yEnd - yStart;

    xStart = xEnd;
    yStart = yEnd;

    // 1
    block.style.left = currentBlockLeft + horizontalDiff + 'px';
    block.style.top = currentBlockTop + verticalDiff + 'px';

    // 2
    // block.style.left = `${parseInt(block.style.left || 0) + horizontalDiff}px`;
    // block.style.top = `${parseInt(block.style.top || 0) + verticalDiff}px`;
};


const mouseupHandler = () => {
    block.removeEventListener('mousemove', mousemoveHandler);
    window.removeEventListener('mouseup', mouseupHandler);
};

block.addEventListener('mousedown', mousedownHandler);

