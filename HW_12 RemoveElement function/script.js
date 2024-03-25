const mass= [57,89,36,25,88,18,23];

let btn1=document.querySelector('.btn1');
let res=document.querySelector('.result');

function MainTask(){  
     let removed=mass.splice (2,1);
     res.innerHTML=mass; 
     console.log(removed);

}

btn1.onclick=MainTask;


