console.log (document.title);
console.dir (document);
let number;//first we made a variable

document.getElementById("submit").onclick = function(){

    number = document.getElementById("raNum").value;
    

    console.log(number); 

    
    if (number % 2 === 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }

}