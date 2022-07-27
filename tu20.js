console.log("tu20");

let vageArray = ['tamato', 'onion','banan', 'patato']

localStorage.setItem('Name' , 'Harry');
localStorage.setItem('Name2' , 'Vaee');

// localStorage.removeItem('Name2')
localStorage.setItem('vage' , JSON.stringify(vageArray));

 
let name = JSON.stringify(localStorage.getItem('vage'));
console.log(name);

document.getElementById("btn").addEventListener('click', func1);
function func1(){
    localStorage.removeItem('Name2',);
    localStorage.removeItem('Name',);
    localStorage.removeItem('vage',);

}