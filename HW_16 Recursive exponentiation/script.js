let num = parseFloat(prompt("Введіть число"));
let degree = parseInt(prompt("Введіть ступінь для зведення"));

function pow(num, degree) {  
    if (degree === 0) {
        return 1;
    }   
    else {
        return num * pow(num, degree - 1);
    }
}

    let result = pow(num, degree);
    alert(`${num}^${degree} = ${result}`);

