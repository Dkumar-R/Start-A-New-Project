ShowNotes();

//add note localstroge user add a note

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    // console.log(notesObj);

    //shownotes
    ShowNotes();
})

function ShowNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body ">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text" > ${element}</p>
            <button id="${index}"onClick="deleteNote(this.id)" class="btn btn-primary">Delet Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to add notes`;
    }
}

// Function to delete a note

function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    ShowNotes();
}

// Search Box Work

let searchBox = document.getElementById('searchText');
searchBox.addEventListener("input", function () {

    let inputValue = searchBox.value.toLowerCase();
    // console.log("search box click", inputValue);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputValue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";

        }
    })
})