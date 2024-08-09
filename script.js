function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
var switch1 = 1;  
function clicked(){
    var num1 = getRndInteger(1,6);
    var num2 = getRndInteger(1,6);

    var sub1 = "dice" + num1.toString() + '.png';
    var sub2 = "dice" + num2.toString() + '.png';

    document.querySelector('.dice1').setAttribute('src',sub1);
    document.querySelector('.dice2').setAttribute('src',sub2);

    if(num1>num2){
        document.querySelector('#p1').innerText='Player 1 🚩'
        document.querySelector('#p2').innerText='Player 2'
    }else if(num1<num2){
        document.querySelector('#p1').innerText='Player 1'
        document.querySelector('#p2').innerText='Player 2 🚩'
    }else{
        document.getElementById('p1').innerText='Draw'
        document.getElementById('p2').innerText='Draw'
}}
document.getElementsByClassName('btn')[0].addEventListener('click',clicked);
