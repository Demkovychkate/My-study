let res1 = document.querySelector('.result-one');
let res2 = document.querySelector('.result-two');
let res3 = document.querySelector('.result-three');
let res4 = document.querySelector('.result-four');
let res5 = document.querySelector('.result-five');

let numberOne = prompt('Введите первое число');
if (numberOne === '' || numberOne === null || isNaN(numberOne)){
  alert('Ви не ввели число');
  numberOne = prompt('Введите первое число');
}
else {
  res1.innerHTML = numberOne;
}

let numberTwo = prompt('Введите второе число');
if (numberTwo === '' || numberTwo === null || isNaN(numberTwo)){
  alert('Ви не ввели число');
  numberTwo = prompt('Введите второе число');  
}
else {
  res2.innerHTML = numberTwo;
}

let numberThree = prompt('Введите третье число');
if (numberThree === '' || numberThree === null || isNaN(numberThree)){
    alert('Ви не ввели число');
    numberThree = prompt('Введите третье число');
}
else {
  res3.innerHTML = numberThree;
}


let mass = [numberOne,numberTwo,numberThree];
res4.innerHTML=mass;


let sum = 0;
let count = 0;

for (let i = 0; i < mass.length; i++) {
  if (!isNaN(mass[i])) {
    sum += parseFloat(mass[i]);
    count++;
  }
}

let avg = sum / count;
res5.innerHTML = Math.floor(avg);
