let btn=document.querySelector('.btn-one');
let res1 = document.querySelector('.result-one');
let res2 = document.querySelector('.result-two');
let res3 = document.querySelector('.result-three');


function FirstTask(){
 let mass=[];
 for( let i=0;i < 6 ; i++){
   mass[i] = prompt( ' Введіть значення масиву',+i);
  if(mass[i]=== null){
    alert ( 'Відміна');
    return;
  }
  if(mass[i]=== ' '){
    alert( 'Ви не вказали значення');
  }
 } 
  res1.innerHTML=mass;
  res2.innerHTML=mass.sort();

  mass.splice(1,3);
  res3.innerHTML=mass;
}
 btn.onclick=FirstTask;