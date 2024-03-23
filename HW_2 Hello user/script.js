let btn1 = document.querySelector('.btn-one');

function FirstTask(){
let name = prompt ('What is your name?','John');
alert ( 'Hello, '+name+' How are you? ');
}

btn1.onclick= FirstTask;