
let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if (val == null) {
  text = document.createTextNode("This is the my first element, click to edit it");
}
else {
  text = document.createTextNode(val);
}

//Add text to that created element

divElem.appendChild(text);
divElem.setAttribute('class', 'elem')
divElem.setAttribute("id", "elem");
divElem.setAttribute('style', 'border:2px solid black; width:154px; margin:34px; padding:23px;');
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


container.insertBefore(divElem, first);

// divElem.appendChild(text)
// console.log(divElem, container, first);

divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName('form-control').length;
  if (noTextAreas == 0) {
    let html = divElem.innerHTML;
    divElem.innerHTML = `
    <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px">${html}</textarea>
    <label for="floatingTextarea2">Comments</label>
  </div>`;
  }

  let textarea = document.getElementById('floatingTextarea2');
  textarea.addEventListener('blur', function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem('text', textarea.value);
  })
});

