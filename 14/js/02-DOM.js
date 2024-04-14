/* 
* =============================================
* Attributes
* elem.hasAttribute(name)
* elem.getAttribute(name)
* elem.setAttribute(name, value)
* elem.removeAttribute(name)
* elem.attributes(name)
*/

const imageRef = document.querySelector('.hero-image');
console.dir(imageRef);

// Не стандартизований спосіб
// console.log('src', imageRef.src);
// console.log('alt', imageRef.alt);

// Стандарт
// elem.getAttribute(name)
// console.log('src: ', imageRef.getAttribute('src'));
// console.log('alt: ', imageRef.getAttribute('alt'));

// elem.hasAttribute(name)
console.log('src: ', imageRef.hasAttribute('src'));
console.log('alt: ', imageRef.hasAttribute('alt'));

// imageRef.src = 'https://cs11.livemaster.ru/storage/topic/NxN/2c/9b/9cf0a41d13ecb11439e6145dff576315df83op.jpg?h=3KvOPndE06tlraLLSmkHPQ'

imageRef.setAttribute(
  'src',
  'https://cs11.livemaster.ru/storage/topic/NxN/2c/9b/9cf0a41d13ecb11439e6145dff576315df83op.jpg?h=3KvOPndE06tlraLLSmkHPQ'
);

imageRef.setAttribute('alt', 'nature');

/* 
* =============================================
* HTMLElement.style
*/

const activeLinkRef = document.querySelector('.nav__link--active');
console.log('activeLinkRef', activeLinkRef);

activeLinkRef.href = '/blog';
activeLinkRef.style.color = 'red';













