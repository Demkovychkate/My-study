let btn1= document.querySelector('.btnOne');
let res1 = document.querySelector('.resOne');

let btn2= document.querySelector('.btnTwo');
let res2 = document.querySelector('.resTwo');

let btn3= document.querySelector('.btnThree');
let res3 = document.querySelector('.resThree');
let res31 = document.querySelector('.resthreeOne');

let btn4= document.querySelector('.btnfour');
let res41 = document.querySelector('.resfourOne');
let res42 = document.querySelector('.resfourTwo');

let btn5= document.querySelector('.btnfive');
let res51 = document.querySelector('.resfiveOne');
let res52 = document.querySelector('.resfiveTwo');

//Task1
function FirstTask(){
  let str1 = ' ';
  for (let i = 20; i <= 30; i=i+0.5) {
    str1 += i + ' ';
    res1.innerHTML= str1;
  }
}

btn1.onclick=FirstTask;

//Task2
function SecondTask(){
    let str2 = ' ';
    for (let i = 10; i <= 100; i=i+10) {
      str2 += (i*27) + ' ';
      res2.innerHTML= str2;
    }
  }
  
  btn2.onclick=SecondTask;
  
//Task 3 
function ThirdTask(){
    let N = prompt('Введіть число');
    let str3 = ' ';
    
    for (let i = 1; i <= 100; i++) {
      let j = Math.pow( [i],2); 
      if ( j <= N ){
        str3 += j + ' ';
        res3.innerHTML= str3;
        res31.innerHTML=N;
      }
      
    }
  }
  
  btn3.onclick=ThirdTask;  

  //Task 4
  function FourTask(){
    let n = prompt('Введіть число');  
    let str4 = ' ';  
    
      if(n % n==0 ){
       if( n % 2 ===0){
       str4 += 'Дане число є простим '     
       }
       else {
        str4 += 'Дане число не є простим '    
      }
       }
       res41.innerHTML = n;
       res42.innerHTML= str4 ;
      }   
    
    btn4.onclick=FourTask;
  
    // Task5
    function FiveTask(){
        let n = prompt('Введіть число');  
        let str5 = ' ';  
        
           if( n  % 3 === 0){
           str5 += 'Дане число можна отримати шляхом зведення числа 3 у деякий ступінь';   
           }
           else {
            str5 +=  'Дане число не можна отримати шляхом зведення числа 3 у деякий ступінь'; 
          }
           
           res51.innerHTML = n;
           res52.innerHTML= str5 ;
          }   
        
        btn5.onclick=FiveTask;
  