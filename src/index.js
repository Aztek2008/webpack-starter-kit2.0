import './styles.css';
import characters from './data-array';
// import characters from './data-array-2';

const dataTable = document.querySelector('.data-table');
const bodyTable = document.querySelector('.body-table');

const charactersKeys = Object.keys(characters[0]);
const charactersValues = characters.map(character => Object.values(character));

const headMarkup = buildHeadRow(charactersKeys);
const bodyMarkup = gatherBodyRows(charactersValues);

dataTable.insertAdjacentHTML('afterbegin', headMarkup);
bodyTable.insertAdjacentHTML('beforeend', bodyMarkup);

const tableHeader = document.querySelector('.table-header');
tableHeader.addEventListener('click', tableSort);

//  ----------------------------FUNCTIONS----------------------------
//-------------------------------------------------------------------

function tableSort(event) {
  const clickedName = event.target.textContent;
  console.log('name of item:', clickedName);

  //------------------------- SORTING NEW ARRAY ---------------------

  const chracterSortedValues = (a, b) => {
    if (typeof characters[0][clickedName] === 'number') {
      return a[clickedName] - b[clickedName];
    }
    return a[clickedName][0] > b[clickedName][0] ? 1 : -1;
  }

  const newCharacters = characters.sort(chracterSortedValues);

  // ----------------------------  ВСТАВКА НОВОГО МАССИВА  -----------
  const charactersValues = newCharacters.map(character => Object.values(character));

  const bodyMarkup = gatherBodyRows(charactersValues);

  bodyTable.innerHTML = '';
  bodyTable.insertAdjacentHTML('beforeend', bodyMarkup);
  //------------------------------------------------------------------
}

function buildHeadRow(array) {
  return `
    <thead class="table-header">
      <tr>
        ${array.map(item => `<td>${item}</td>`).join('')}
      </tr>
    </thead>
    `;
}

function gatherBodyRows(charactersValues) {
  return charactersValues
    .map(characterValue => buildTableBodyRow(characterValue))
    .join('');
}

function buildTableBodyRow(array) {
  return `
  <tr>
    ${array.map(item => `<td>${item}</td>`).join('')}
  </tr>
  `;
}
