let btn1= document.querySelector('.btn');
let res=document.querySelector('.result');



function RandomNumbers(length) {

   let Numbers = 'fgdfjgkldfjgkljodgjodfjgiodjgidojdfoiifififfj258566445587()';
   let NumbersLength = Numbers.length;
   let str1 = '';
   for ( let i = 0; i < length; i++ ) {
      str1 += Numbers.charAt(Math.floor(Math.random() * NumbersLength));
   }

   res.innerHTML += str1;
  
   
}

 btn1.onclick=RandomNumbers(15);

