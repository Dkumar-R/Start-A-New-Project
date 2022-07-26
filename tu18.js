console.log("This is");
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);

function func1(e){
    console.log("Thank", e);
}