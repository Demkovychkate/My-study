let res = document.querySelector('.res');
let btn = document.querySelector('.btn');


function generateList(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return '';
    }

    let item = array.shift(); 
    if (Array.isArray(item)) {
        return `<ul>${generateList(item)}</ul>${generateList(array)}`;
    }

    return `<li>${item}</li>${generateList(array)}`;
}

btn.addEventListener('click', function() {
    const array = [1, 2, 3, [1.1, 1.2, 1.3], 4];
    const result = generateList(array);
    res.innerHTML = `Результат: ${result}`; 
});