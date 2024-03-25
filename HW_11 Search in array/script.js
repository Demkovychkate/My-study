let mass=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let btn1=document.querySelector('.btn1');
let res1=document.querySelector('.result1');
let res2=document.querySelector('.result2');

let btn2=document.querySelector('.btn2');
let res3=document.querySelector('.result3');
let res4=document.querySelector('.result4');

let btn3=document.querySelector('.btn3');
let res5=document.querySelector('.result5');
let res6=document.querySelector('.result6');

let btn4=document.querySelector('.btn4');
let res7=document.querySelector('.result7');

let btn5=document.querySelector('.btn5');
let res8=document.querySelector('.result8');

let btn6=document.querySelector('.btn6');
let res9=document.querySelector('.result9');

let btn7=document.querySelector('.btn7');
let res10=document.querySelector('.result10');

let btn8=document.querySelector('.btn8');
let res11=document.querySelector('.result11');

let btn9=document.querySelector('.btn9');
let res12=document.querySelector('.result12');

let btn10=document.querySelector('.btn10');
let res13=document.querySelector('.result13');

//Task1
function FirstTask(){ 
let sum=0;
for (let i = 0; i < mass.length; i++) {
  if (mass[i] > 0){      
    sum += mass[i];

    res1.innerHTML+=mass[i]+' ';
    res2.innerHTML=sum;
  }
}
}

btn1.onclick=FirstTask;

//Task2
function SecondTask(){  
    let Nmin= Math.min(...mass);
    let N=mass.indexOf(Math.min(...mass));
    res3.innerHTML=Nmin;
    res4.innerHTML= N+1;
    }
    btn2.onclick=SecondTask;
    
//Task3
function ThirdTask(){  
    let Nmax= Math.max(...mass);
    let NM=mass.indexOf(Math.max(...mass));
    res5.innerHTML=Nmax;
    res6.innerHTML= NM+1;
    }
    btn3.onclick=ThirdTask;    

//Task4
function FourthTask(){ 
    
    for (let i = 0; i < mass.length; i++) {
      if (mass[i] < 0){           
        res7.innerHTML+=mass[i]+' ';
      }
    }
    }    
    btn4.onclick=FourthTask;    

//Task 5 
function FifthTask(){     
    for (let i = 0; i < mass.length; i++) {
      if (mass[i] > 0 &&  mass[i] % 2 !== 0){           
        res8.innerHTML+=mass[i]+' ';
      }
    }
    }    
    btn5.onclick=FifthTask;  

    //Task 6 
function SixTask(){     
    for (let i = 0; i < mass.length; i++) {
      if (mass[i] > 0 &&  mass[i] % 2 == 0){           
        res9.innerHTML+=mass[i]+' ';
      }
    }
    }    
    btn6.onclick=SixTask;  

        //Task 7 
function SevenTask(){ 
    let sum=0;    
    for (let i = 0; i < mass.length; i++) {        
      if (mass[i] > 0 &&  mass[i] % 2 == 0){  
        sum += mass[i];        
        res10.innerHTML = sum;
      }
    }
    }    
    btn7.onclick=SevenTask;  

        //Task 8 
function EightTask(){ 
    let sum=0;    
    for (let i = 0; i < mass.length; i++) {        
    if (mass[i] > 0 &&  mass[i] % 2 !== 0){  
     sum += mass[i];        
    res11.innerHTML = sum;
      }
    }
    }    
    btn8.onclick=EightTask;  

    //Task 9
    function NineTask(){  
        let mult=1;
        for( let i = 0; i < mass.length; i++){
            if (mass[i] > 0 ) {
                mult = mult*mass[i];               
                res12.innerHTML = mult ;                 
            }
              }
      }
      btn9.onclick=NineTask;

      //Task 10
      
      function TenTask(){
        let max = mass[0];
        let max1=0;
for (let i = 0; i < mass.length; i++) {
    if (mass[i] > max) {
      max = mass[i];
      mass[max1]=0;
      max1=i;
    }else{
        mass[i]=0;
    }  
   
  }
 res13.innerHTML=mass;
}
btn10.onclick=TenTask;