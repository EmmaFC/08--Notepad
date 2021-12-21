let inpAddNote = document.getElementById("inp_add_note");
let btnAddNote = document.getElementById("btn_save_note");

btnAddNote.addEventListener("click", () => {

    let newId = checkIdNumber ();
    let noteID = newId.toString();
    let newNoteContent = inpAddNote.value;
    let newNoteId = document.createElement('div');
    
    newNoteId.innerHTML = 
    `<div id="Note_${noteID}" class="note_field"><div class="note_area" id="this_note">${newNoteContent}</div>
    <div class="buttons_area"><button class="btn_note" type="submit" id="edit_${noteID}" value="Edit">Edit</button>
    <button id="delete_${noteID}" class="btn_note" type="submit" value="Delete">Delete</button></div></div>`;
    document.getElementById("note_display").appendChild(newNoteId);
    console.log("NOTE " +noteID + " : " + newNoteContent);

    function editableNote () {
        let letsEditNote = document.getElementById(`edit_${noteID}`);
       
            letsEditNote.addEventListener("click", () => {
                console.log("NOTE " +noteID + " is ready to be edited");
                newNoteId.innerHTML = 
                `<div id="Note_${noteID}" class="note_field">
                <input class="note_area" id="editor_${noteID}" type="text" pl aceholder="Edit note here">
                <div class="buttons_area"><input class="btn_note" type="submit" id="upload_${noteID}" value="upload"/><button id="delete_${noteID}" class="btn_note" type="submit" value="Delete">Delete</button></div></div>`;
                let btnUploadNote = document.getElementById(`upload_${noteID}`);
                deleteNote ()
                btnUploadNote.addEventListener("click", () => {
                    let inpUploadNote = document.getElementById(`editor_${noteID}`).value;
                    console.log("NOTE changed: " + inpUploadNote);
                    console.log("NOTE " +noteID + " has been saved");
                    newNoteId.innerHTML = 
                    `<div id="Note_${noteID}" class="note_field"><div class="note_area" >${inpUploadNote}</div><div class="buttons_area"><button class="btn_note" type="submit" id="edit_${noteID}" value="Edit">Edit</button><button id="delete_${noteID}" class="btn_note" type="submit" value="Delete">Delete</button></div></div>`;
                    editableNote ()
                    deleteNote ()
                });
            });
    }

    function deleteNote () {
        let letsDeleteNote = document.getElementById(`delete_${noteID}`);
        letsDeleteNote.addEventListener("click", () =>{
            console.log("NOTE " + noteID + " has been deleted");
            newNoteId.innerHTML = "";
            deleteNote ()
        });
    }
        editableNote ()
        deleteNote ()
        return;
});


function checkIdNumber () {

    const idAlreadyUsed = [];
    let newIdNumber = "id_" + Math.floor(Math.random()*100)*1; 

    if ( idAlreadyUsed.includes(newIdNumber) ) {
        console.log(newIdNumber + " : ID NO válido");
        return;
    } 
        console.log(newIdNumber + " : ID válido");
        idAlreadyUsed.push(newIdNumber);
        return newIdNumber;
}

