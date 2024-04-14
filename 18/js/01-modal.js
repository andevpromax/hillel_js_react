/* 
* =============================================
* Відкрити і закрити по кліку на кнопку
* Закрити по кліку в бекдроп
* Закрити по ESC
*/

// const refs = {
//   openModalBtn: document.querySelector('button[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('button[data-action="close-modal"]'),
//   backdrop: document.querySelector('js-backdrop'),
// }

// refs.openModalBtn.addEventListener('click', () => {
//   document.body.classList.add('show-modal');
// });

// refs.closeModalBtn.addEventListener('click', () => {
//   document.body.classList.remove('show-modal');
// });

/* 
* =============================================
* На бекдроп додаєм слухач подій
*/

// const refs = {
//   openModalBtn: document.querySelector('button[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('button[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// }

// refs.openModalBtn.addEventListener('click', () => {
//   document.body.classList.add('show-modal');
// });

// refs.closeModalBtn.addEventListener('click', () => {
//   document.body.classList.remove('show-modal');
// });

// refs.backdrop.addEventListener('click', (event) => {
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);

//   if (event.target === event.currentTarget) {
//     document.body.classList.remove('show-modal');
//   }
// });

/* 
* =============================================
* refactor
*/

// const refs = {
//   openModalBtn: document.querySelector('button[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('button[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// }

// refs.openModalBtn.addEventListener('click', handleOpenModal);

// refs.closeModalBtn.addEventListener('click', handleCloseModal);

// refs.backdrop.addEventListener('click', handleBackDropClick);

// function handleOpenModal() {
//   document.body.classList.add('show-modal');
// };

// function handleCloseModal() {
//   document.body.classList.remove('show-modal');
// };

// function handleBackDropClick(event) {
//   if (event.target === event.currentTarget) {
//     document.body.classList.remove('show-modal');
//   };
// };

/* 
* =============================================
* Escape
*/

const refs = {
  openModalBtn: document.querySelector('button[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('button[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
}

refs.openModalBtn.addEventListener('click', handleOpenModal);
refs.closeModalBtn.addEventListener('click', handleCloseModal);
refs.backdrop.addEventListener('click', handleBackDropClick);

function handleOpenModal() {
  window.addEventListener('keydown', handlePressEscape);
  document.body.classList.add('show-modal');
};

function handleCloseModal() {
  window.removeEventListener('keydown', handlePressEscape);
  document.body.classList.remove('show-modal');
};

function handleBackDropClick(event) {
  if (event.target === event.currentTarget) {
    document.body.classList.remove('show-modal');
  };
};

function handlePressEscape(event) {
  if (event.code === 'Escape') {
    handleCloseModal();
  };
};





