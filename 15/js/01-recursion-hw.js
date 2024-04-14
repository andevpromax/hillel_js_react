// first step

const root = document.querySelector('ul#root');
// console.log('root', root);

// const setClassForFirstItemByLevel1 = (level, ul) => {

//   // querySelector
//   const liFirst = ul.querySelector('li:first-of-type');
//   liFirst.classList.add('firstLevel');

//   // console.log('liFirst', liFirst);

//   // querySelectorAll
//   const allLis = ul.querySelectorAll('li');
//   console.log('allLis', allLis);

//   // children
//   // console.dir(root)
//   const lis = ul.children;
//   console.log('lis', lis)

//   // lis.forEach(li => console.log('li', li)); // error

//   for (let i = 0; i < lis.length; i++) {
//     let li = lis[i];
//     console.log('li', li);
//   };
// };

// setClassForFirstItemByLevel1(1, root);

//! second step

// const root2 = document.querySelector('ul#root');

// const setClassForFirstItemByLevel2 = (level, ul) => {

//   // const liFirst = ul.querySelector('li:first-of-type');
//   // liFirst.classList.add('firstLevel');

//   const liOriginArray = [...ul.children];
//   console.log('liOriginArray', liOriginArray);

//   liOriginArray.forEach(li => {

//     const innerUls = [...li.children];
//     console.log('innerUls', innerUls);

//     innerUls.forEach(innerUl => innerUl.querySelector('li').classList.add('secondLevel'))
//   });
// };

// setClassForFirstItemByLevel2(1, root2);

//! third step

// const root3 = document.querySelector('ul#root');

// const setClassForFirstItemByLevel3 = (level, ul) => {

//   const liFirst = ul.querySelector('li:first-of-type');
//   liFirst.classList.add('firstLevel');

//   const liOriginArray = [...ul.children];

//   liOriginArray.forEach(li => {
//     const innerUls = [...li.children];
//     console.log('innerUls', innerUls);

//     innerUls.forEach(innerUl => setClassForFirstItemByLevel3(level, innerUl));
//   });
// };

// setClassForFirstItemByLevel3(1, root3);

// const setClassForFirstItemByLevelWithQuerySelectorAll = (ul) => {
//     const liFirst = ul.querySelectorAll('li:first-of-type');
//     liFirst.forEach(li => li.classList.add('firstLevel'));
// };

// setClassForFirstItemByLevelWithQuerySelectorAll(root3)

//! fourth step

// const root4 = document.querySelector('ul#root');

// const setClassForFirstItemByLevel4 = (level, ul) => {

//   level-- // 1 0

//   const liFirst = ul.querySelector('li:first-of-type');
//   liFirst.classList.add('firstLevel');

//   if (level > 0) {
//     const liOriginArray = [...ul.children];
//     liOriginArray.forEach(li => {
//       const innerUls = [...li.children];
//       console.log('innerUls', innerUls);
  
//       innerUls.forEach(innerUl => setClassForFirstItemByLevel4(level, innerUl));
//     });
//   }
// };

// setClassForFirstItemByLevel4(2, root4);

//! fifth step
const root5 = document.querySelector('ul#root');
console.log('root5', root5);

const setClassForFirstItemByLevel5 = (level, ul) => {
  level--

  if (level > 0) {
    const liOriginArray = [...ul.children];

    liOriginArray.forEach(li => {
      const innerUls = [...li.children];
      console.log('innerUls', innerUls);
  
      innerUls.forEach(innerUl => setClassForFirstItemByLevel5(level, innerUl));
    });
  
  } else {
    const liFirst = ul.querySelector('li:first-of-type');
    liFirst.classList.add('firstLevel');
  }
};

setClassForFirstItemByLevel5(4, root5);
