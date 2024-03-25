let table = document.querySelector('.Table');
let btn1 = document.querySelector('.btn');

function FirstTable(){

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            let tdValue = i * 10 + j + 1; 
            td.textContent = tdValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

}
btn1.onclick=FirstTable;