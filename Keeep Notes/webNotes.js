// Javascript for Web Keep Notes

// We are calling the (displayNotes()) right after the page reloads because we want notes that we have added to display below whenever we open our website.
displayNotes();

// Adding a "click" EventListener to "Add a Note" button with the help of "addBtn" id.
// Below, we are first storing a note written by a user into a localStorage.
let addingNote = document.getElementById("addBtn");
addingNote.addEventListener("click", function(e) {

    // Fetching the Textarea.
    let textareaNote = document.getElementById("noteTxt");
    // Fetching the Title from the input area.
    let inputTitle = document.getElementById("addTitle");
    // Fetching the va lue of "Note" from the localStorage.
    let lsNotes = localStorage.getItem("Note");

    // Checking if the value of "Note" is already present in the localStorage or not.
    // If the value of "Note" is "null" in the localStorage then create an empty array so that we can store notes in it.
    if (lsNotes == null) {
        noteObj = [];
    }
    // If the value of "Note" is present in the localStorage then parse it into object. 
    else {
        noteObj = JSON.parse(lsNotes);
    }

    // Fetching and storing the value of both title and note as an object.
    titleNoteObj = {
        title: addTitle.value,
        note: noteTxt.value,
    }

    // Below, we are pushing the notes that are present in both Input and Textarea to an empty array that we have created above.
    noteObj.push(titleNoteObj);
    // Below, we are storing a note into a localStorage as a string.
    localStorage.setItem("Note", JSON.stringify(noteObj));
    // Making Textarea space empty, after user clicks on "Add a Note" button so that we can add another note.
    textareaNote.value = "";
    // Making Input area of Title empty, after user clicks on "Add a Note" button so that we can add another Title.
    inputTitle.value = "";
    console.log(noteObj);
    // Running a  displayNotes() function here because after clicking on "Add a Note" button we can see a note "Your Web Notes" section.
    displayNotes();
});

// Function to display all the added notes below.
function displayNotes() {
    // Checking if the value of "Note" is already present in the localStorage or not.
    let lsNotes = localStorage.getItem("Note");

    if (lsNotes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(lsNotes);
    }

    // Below, we have defined a variable and kept it blank so that we can add multiple lines of code into it at once with the help of looping.
    let cardHtmlCode = "";
    // Below, we are looping inside the (noteObj) array which contains collection of notes.
    noteObj.forEach(function (element, index) {
        // Below, we are adding html code to display notes inside a card. (+=) to append notes one after the another.
        cardHtmlCode += `                
        <div class="noteCard card my-2 mx-2" style="width: 21rem; border: 1px solid #7E7E7E;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.note}</p>
                <button onClick="deleteNote(this.id)" class="btn btn-warning" id="${index}">Delete Note</button>
            </div>
        </div>`
    });

    // Below, we are fecting the container in which we are going display all the notes by ("noteSection") id.
    let belowNotes = document.getElementById("noteSection");
    // If there are notes present inside the (noteObj) array then insert the above html code that we have stored in the "cardHtmlCode" variable into the innerhtml of the notes container on the html page.
    if (noteObj.length != 0) {
        belowNotes.innerHTML = cardHtmlCode;
    }
    // Else, show this text on to the screen
    else {
        belowNotes.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

};

// Function to "Delete" the note user clicks on it
// For this function to run we have added an "onClick" function to our "Delete Note" button above in the html code.
// Explanation of this function: At the "Delete Note" button 2 things are important: 1st is its "id" that we have changed it into an index number.
// 2nd this the "onClick" function in which we have added the below function and as an argument we have given the (this.id) which is basically an index number of the note.  
function deleteNote(index) {
    // Checking if the value of "Note" is already present in the localStorage or not.
    let lsNotes = localStorage.getItem("Note");

    if (lsNotes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(lsNotes);
    }

    // Below, we are removing the notes from the array. (splice) methods help to remove elements from the array.
    noteObj.splice(index, 1);
    // Updating or Re-setting the notes in the array after removing one note from it.
    localStorage.setItem("Note", JSON.stringify(noteObj));
    // After removing the notes from the array, re-run the displayNotes(); function so that we can see the update on the screen 
    displayNotes();
}


// Serch Functionality: Filtering the notes and finding the particular note we want with a few words in search bar.
// Fetching the search bar with the help of ("searchNotes") id. Also adding an addEventListener "input" fo searching.
let searchNotes = document.getElementById("searchNotes");
searchNotes.addEventListener("input", function() {

    // Fecthing the words typed in a search bar into a variable.
    let inputVal = searchNotes.value.toLowerCase();
    // Fetching the div which have note inside it with the help of ("noteCard") class.
    let noteCard = document.getElementsByClassName("noteCard");
    
    // Looping through each and evry notes inside the container to find the particular words entered in search bar.
    Array.from(noteCard).forEach(function (element) {
        // Fetching the "p" tag inside the "noteCard" class. [0] index number is to get the first result possible inside the "p" tag. 
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        
        // If there are words present in the "p" tag are same as the words in "inputVal" then display those notes. 
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});