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
    }
}
