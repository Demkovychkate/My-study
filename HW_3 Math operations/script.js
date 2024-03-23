let btn1=document.querySelector('.btn-one');
let btn2=document.querySelector('.btn-two');
let btn3=document.querySelector('.btn-three');
let btn4=document.querySelector('.btn-four');


function Add(){     
let number1= prompt('Введіть перше число', ' ');
let number2= prompt('Введіть друге число', ' ');  
alert (number1 +'+'+ number2 +'='+ (+number1 + +number2));   
  }
btn1.onclick=Add;

function Sub (){     
let number1= prompt('Введіть перше число', ' ');
let number2= prompt('Введіть друге число', ' ');  
alert (number1 +'-'+ number2 +'='+ (+number1 - +number2));   
      }
btn2.onclick=Sub;


function Mult (){     
let number1= prompt('Введіть перше число', ' ');
let number2= prompt('Введіть друге число', ' ');  
alert (number1 +'*'+ number2 +'='+ (+number1 * +number2));   
}
btn3.onclick=Mult; 

function Div (){     
    let number1= prompt('Введіть перше число', ' ');
    let number2= prompt('Введіть друге число', ' ');  
    alert (number1 +'/'+ number2 +'='+ (+number1 / +number2));   
    }
    btn4.onclick=Div;    