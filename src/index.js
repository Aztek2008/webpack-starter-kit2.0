import './styles.css';
// import characters from './data-array';
import characters from './data-array-2';

const dataTable = document.querySelector('.data-table');

const charactersKeys = Object.keys(characters[0]);
const charactersValues = characters.map(character => Object.values(character));
console.log(charactersKeys)
console.log(charactersValues)
console.log(characters)

const headMarkup = buildHeadRow(charactersKeys);
const bodyMarkup = gatherBodyRows(charactersValues);

dataTable.insertAdjacentHTML('beforeend', headMarkup);
dataTable.insertAdjacentHTML('beforeend', bodyMarkup);

const tableHeader = document.querySelector('.table-header');
tableHeader.addEventListener('click', tableSort);

//    ----------------------FUNCTIONS---------------------------    //

function tableSort(event) {
  const word = event.target.textContent;
  console.log('name of item:', word)

  const chracterSortedValues = (a, b) => a[word] - b[word];

  const newCharacters = characters.sort(chracterSortedValues);

  ///-----------------------------------------------------------------
  const charactersKeys = Object.keys(newCharacters[0]);
  const charactersValues = newCharacters.map(character => Object.values(character));

  const headMarkup = buildHeadRow(charactersKeys);
  const bodyMarkup = gatherBodyRows(charactersValues);

  dataTable.innerHTML = '';
  dataTable.insertAdjacentHTML('beforeend', headMarkup);
  dataTable.insertAdjacentHTML('beforeend', bodyMarkup);
  tableHeader.removeEventListener('click', tableSort);
  ///-----------------------------------------------------------------
}

function buildHeadRow(array) {
  return `
    <thead class="table-header">
      <tr>
        ${array.map(item => `<td>${item}</td>`).join('')}
      </tr>
    </thead>
    `;
};

function gatherBodyRows(charactersValues) {
  return charactersValues.map(characterValue => buildTableBodyRow(characterValue)).join('');
}

function buildTableBodyRow(array) {
  return `
  <tr>
    ${array.map(item => `<td>${item}</td>`).join('')}
  </tr>
  `;
};

//////////////////////////////////////////////  END OF CODE  ////////////////////////////////////////////////////
//
//
// {
// const eventItem = charactersValues.find((character, idx) => {
//   if (charactersKeys[idx] === word) {
//     console.log(character[idx]);
//     const chracterSortedValues = (a, b) => a.word - b.word;

//     if (typeof character[idx] === isNaN) {
//       const arraySortByString = characters.sort((prev, next) => {
//         if (prev.word < next.word) return -1;
//         if (prev.word < next.word) return 1;
//       })
//       // return arraySortByString;

//       /////////////////////////////////////////////////////////////////
//       // const newCharacters = characters.sort(chracterSortedValues);

//       const charactersKeys = Object.keys(arraySortByString[0]);
//       const charactersValues = arraySortByString.map(character => Object.values(character));

//       const headMarkup = buildHeadRow(charactersKeys);
//       const bodyMarkup = gatherBodyRows(charactersValues);

//       dataTable.innerHTML = '';
//       dataTable.insertAdjacentHTML('beforeend', headMarkup);
//       dataTable.insertAdjacentHTML('beforeend', bodyMarkup);
//       /////////////////////////////////////////////////////////////////


//     const newCharacters = characters.sort(chracterSortedValues);

//     // ///------------------------------------------

//     const charactersKeys = Object.keys(newCharacters[0]);
//     const charactersValues = newCharacters.map(character => Object.values(character));

//     const headMarkup = buildHeadRow(charactersKeys);
//     const bodyMarkup = gatherBodyRows(charactersValues);

//     dataTable.innerHTML = '';
//     dataTable.insertAdjacentHTML('beforeend', headMarkup);
//     dataTable.insertAdjacentHTML('beforeend', bodyMarkup);

//     ///------------------------------------------
//   }
// });
// }





//////////////////////// YANA's CODE /////////////////////////////////////////////////////////..

// const makeTable = (array) => {
//   const arrSorce = array.map(obj => Object.entries(obj));
//   const stringTable = arrSorce
//   .map(elem => `
//     <tr>
//       ${(elem.map(elem => `<td>${elem[1]}</td>`)).join('')}
//     </tr>
//     `)
//     .join('');

//   const makeTable = `
//   <table >
//     <thead>
//       <tr>${arrSorce[0].map(item => `
//         <th>
//           <button>${item[0]}</button>
//         </th>
//         `)
//         .join('')}
//       </tr>
//       ${stringTable}
//     </thead>
//   <tbody>`
//   document.querySelector('body').innerHTML = makeTable;
// }

// makeTable(sorce)

// const arrayTr = document.querySelectorAll('tr');
// // const arrayTd = [...arrayTr].map(tr => [...tr.children]);
// const headTable = [...arrayTr][0]
// const arrTh = [...headTable.children];
// const nameTh = arrTh[0].firstElementChild;
// const ageTh = arrTh[1].firstElementChild;
// const starsTh = arrTh[2].firstElementChild;
// const daysActiveTh = arrTh[3].firstElementChild;

// function sortTableByName(event) {

//   const arraySortByNames = sorce.sort((prev, next) => {

//     if (prev.name < next.name) return -1;
//     if (prev.name < next.name) return 1;

//   });

//   makeTable(arraySortByNames)
// };

// function sortTableByAge(event) {
//   const arraySortByAge = sorce.sort((a, b) => a.age - b.age);
//   makeTable(arraySortByAge)
// };

// function sortTableByStars(event) {
//   const arraySortByStars = sorce.sort((a, b) => a.stars - b.stars);
//   makeTable(arraySortByStars)
// };

// function sortTableByDaysActives(event) {
//   const arraySortByDaysActives = sorce.sort((a, b) => a.daysActive - b.daysActive);
//   makeTable(arraySortByDaysActives)
// };

// nameTh.addEventListener('click', sortTableByName);
// ageTh.addEventListener('click', sortTableByAge);
// starsTh.addEventListener('click', sortTableByStars);
// daysActiveTh.addEventListener('click', sortTableByDaysActives);
