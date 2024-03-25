//Task 1
 let res1=document.querySelector('.res1');
 let btn1=document.querySelector('.btn1');

 let firstmass = ['Ann','Kate',10,15,98,35,85,'Sofi'];
 function FirstTask(){
    let sum= 0;
    let AVG=0;

   for(i=0; i < firstmass.length; i++){
    if (typeof firstmass[i] === 'number' ){   
     sum +=firstmass[i];    
     AVG ++;   
    }
    let AVG1 = sum/AVG;
    res1.innerHTML = AVG1;
   }
   } 

 btn1.onclick = FirstTask; 

//Task 2
let res2=document.querySelector('.res2');
let btn2=document.querySelector('.btn2');

function doMath(x, znak, y) {
x = +prompt("Введіть перше число");
y = +prompt("Введіть друге число");
znak = prompt("Виберіть операцію +, -, *, /, %, ^ ");
  switch (znak) {
      case "+":
          res2.innerHTML = x + y;
          break;
      case "-":
        res2.innerHTML = x - y;
          break;
      case "*":
        res2.innerHTML= x * y;
          break;
      case "/":
        res2.innerHTML = x / y;
          break;  
      case "%":
        res2.innerHTML = x % y;
          break;
      case "^":
        res2.innerHTML = Math.pow(x,y);
          break;    
  }

  return res2;
}
btn2.onclick=doMath;

//Task 3
let res3=document.querySelector('.res3');
let btn3=document.querySelector('.btn3');

function ThirdTask() {
  let n = prompt("Введіть довжину масиву");
  let m = prompt("Введіть довжину внутрішніх масивів");

let mainmass= [];

  for (let i = 0; i < n; i++) {
    let mass = [];
    for (let j = 0; j < m; j++) {
      let element = prompt(`Введіть значення для елемента (${i},${j})`);
      mass.push(element);
   
    }
    mainmass.push(mass);  

  }
 
res3.innerHTML+=mainmass;
console.log(mainmass);
  return mainmass;
  
}
btn3.onclick = ThirdTask;

//Task 4
let res4=document.querySelector('.res4');
let btn4=document.querySelector('.btn4');

function FourthTask(){

  let addText = prompt("Введіть текст");
  let litera= prompt("Введіть літеру, яку потрібно видалити", );
  let litera2= prompt("Введіть літеру, яку потрібно видалити", );
  

  let del = addText.replace(litera,' ', );
  let del2 = del.replace(litera2,' ');
  alert(del2); 
  res4.innerHTML=del2;
}

btn4.onclick=FourthTask;





