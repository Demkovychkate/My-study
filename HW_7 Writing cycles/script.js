let mass= [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];

// Task1
let btn1=document.querySelector('.btn1');
let res1=document.querySelector('.result1');
let str1= ' ';

function FirstTask(){
    for(let i=10; i <= 20; i++){
       str1 += [i]; 
       str1 += ' , '
       res1.innerHTML=str1;
       console.log(i);         
    }     
}   
btn1.onclick=FirstTask;

// Task2
let btn2=document.querySelector('.btn2');
let res2=document.querySelector('.result2');
let str2= ' ';

function SecondTask(){
  for(let i=10; i <= 20; i++){
    str2 += Math.pow( [i],2); 
    str2 += ' , '
    res2.innerHTML=str2;
    console.log(i);         
 }     
}   
btn2.onclick=SecondTask;

// Task3
let btn3=document.querySelector('.btn3');
let res3=document.querySelector('.result3');

function ThirdTask(){
  for( i=1; i< 8; i++){
    for( j=1; j< 11; j++){
        res3.innerHTML +=`${i}*${j}=${i*j}<br>`;
    }
  res3.innerHTML += '<br>' ;  
}
}
btn3.onclick=ThirdTask;

// Task4
let btn4=document.querySelector('.btn4');
let res4=document.querySelector('.result4');
let str4= ' ';

function FourthTask(){  
  let sum=0;
  for( let i=1; i <= 15; i++){
    sum += i;
    str4 = sum;
  res4.innerHTML = str4; 
}
}
btn4.onclick=FourthTask;

// Task5
let btn5=document.querySelector('.btn5');
let res5=document.querySelector('.result5');
let str5= ' ';

function FifthTask(){  
  let mult=1;
  for( let i=15; i <= 35; i++){
    mult += mult*i;
    str5 = mult;
  res5.innerHTML = str5; 
}
}
btn5.onclick=FifthTask;  


// Task6
let btn6=document.querySelector('.btn6');
let res6=document.querySelector('.result6');
let str6= ' ';

function  SixTask(){  
  let avarage=0;
  for( let i=1; i <= 500; i++){
    avarage += i/500;
    str6 = avarage;
  res6.innerHTML = str6;  
}
}
btn6.onclick=SixTask;

// Task7
let btn7=document.querySelector('.btn7');
let res7=document.querySelector('.result7');
let str7= ' ';

function  SevenTask(){  
  let sum1=0;
  for( let i=30; i <= 80; i++){
    if(Math.floor(i /2)== i/2){
      sum1 += i;
      str7 = sum1;
    }

  res7.innerHTML = str7;
  console.log(str7);
    }
   
}
btn7.onclick=SevenTask;


// Task8
let btn8=document.querySelector('.btn8');
let res8=document.querySelector('.result8');
let str8= ' ';

function  EightTask(){    
  for( let i=100; i <= 200; i++){
    if( i %3==0 ){
      str8 += [i]; 
      str8 += ' , '
  res8.innerHTML = str8;
    }   
}
}
btn8.onclick=EightTask;

// Task9
let btn9=document.querySelector('.btn9');
let res9=document.querySelector('.result9');
let str9= ' ';

function  NineTask(){  
  let n = 48;  
  for( let i=2; i <= n; i++){
    if(n % i==0 ){
      str9 += [i]; 
      str9 += ' , '
  res9.innerHTML = str9;
  console.log(str9);
    }   
}
}
btn9.onclick=NineTask;

// Task10
let btn10=document.querySelector('.btn10');
let res10=document.querySelector('.result10');
let str10= ' ';

function TenTask(){  
  let n = 48;  
  for( let i=2; i <= n; i++){
    if(n % i==0 ){
     if( i % 2 ===0){
     str10 += i;
     str10 += ','
  res10.innerHTML = str10;
     }
    }   
}
}
btn10.onclick=TenTask;


// Task11
let btn11=document.querySelector('.btn11');
let res11=document.querySelector('.result11');
let str11= ' ';

function ElevenTask(){  
  let n = 48;  
  let sumN=0;
  for( let i=2; i <= n; i++){
    if(n % i==0 ){
     if( i % 2 ===0){
      sumN +=i;
     str11 = sumN;   
  res11.innerHTML = str11;
  console.log(str11);
     }
    }   
}
}
btn11.onclick=ElevenTask;

// Task12
let btn12=document.querySelector('.btn12');
let res12=document.querySelector('.result12');
let str12= ' ';

function TwelveTask(){
  for( i=1; i< 11; i++){
    for( j=1; j < 11; j++){
        res12.innerHTML +=`${i}*${j}=${i*j}<br>`;
       
    }
    res12.innerHTML +='<hr>' 
 }
}
btn12.onclick=TwelveTask;