const div = document.createElement('div')

document.body.append(div);

const buttonAddTd = document.createElement('button');
div.appendChild(buttonAddTd);
const pAddTd = document.createElement('p');
buttonAddTd.appendChild(pAddTd);
pAddTd.textContent = 'Add Td';

const buttonAddTr = document.createElement('button');
div.appendChild(buttonAddTr);
const pAddTr = document.createElement('p');
buttonAddTr.appendChild(pAddTr);
pAddTr.textContent = 'Add Tr';

const buttonRemoveTd = document.createElement('button');
div.appendChild(buttonRemoveTd);
const pRemoveTd = document.createElement('p');
buttonRemoveTd.appendChild(pRemoveTd);
pRemoveTd.textContent = 'Remove Td';

const buttonRemoveTr = document.createElement('button');
div.appendChild(buttonRemoveTr);
const pRemoveTr = document.createElement('p');
buttonRemoveTr.appendChild(pRemoveTr);
pRemoveTr.textContent = 'Remove Tr';

const table = document.createElement('table');

document.body.append(table);

function addtr() {
    return document.createElement('tr');
}


function addtd() {
    return document.createElement('td');
}


let n = 4;
let m = 3;

for (let a = 0; a < n; ++a) {

    const tr = addtr();
    table.appendChild(tr);

    for (let b = 0; b < m; ++b) {
        const td = addtd();
        tr.appendChild(td);
    };

};


function addRow() {
    const newRow = addtr();
    const cell = addtd();
    cell.textContent = 'New cell';
    newRow.appendChild(cell);
    table.appendChild(newRow);
  }

  function addColumn() {
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      const cell = addtd();
      cell.textContent = 'New cell';
      rows[i].appendChild(cell);
    }
  }

  function removeRow() {
    if (table.rows.length > 1) {  
      table.removeChild(table.lastChild);
    } else {
      alert('Table needs to contain at least one row!');
    }
  }

  function removeColumn() {
    const rows = table.getElementsByTagName('tr');
    if (rows.length > 0 && rows[0].cells.length > 1) { 
      for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].lastChild);
      }
    } else {
      alert('Table needs to contain at least one column!');
    }
  }

buttonAddTr.addEventListener('click', addRow);

buttonAddTd.addEventListener('click', addColumn);

buttonRemoveTr.addEventListener('click', removeRow);

buttonRemoveTd.addEventListener('click', removeColumn);




