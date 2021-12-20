let inpAddNote = document.getElementById("inp_add_note");
let btnAddNote = document.getElementById("btn_save_note");

btnAddNote.addEventListener("click", () => {

    let newId = checkIdNumber ();
    let lastID = newId.toString();
    let newNote = inpAddNote.value;
    let newNoteDisplay = document.createElement('div');
    
    newNoteDisplay.innerHTML = 
    `<div class="note_field">
        <div class="note_area" id="this_note" >${newNote}</div>
        <div class="buttons_area">
            <button class="btn_note" type="submit" id="edit_${newId}" value="Edit">Edit</button>
            <button class="btn_note" type="submit" value="Delete">Delete</button>
        </div>
    </div>`;
    document.getElementById("note_display").appendChild(newNoteDisplay);
    console.log("This is the note: " + newNote);

    let letsEditNote = document.getElementById(`edit_${newId}`);

        letsEditNote.addEventListener("click", () => {
            newNoteDisplay.innerHTML = 
            `<div class="note_field">
                <div class="note_area" id="this_note" >
                    <input id="editor_${lastID}" type="text" pl aceholder="Edit note here">
                </div>
                <div class="buttons_area">
                    <button class="btn_note" type="submit" id="upload_${lastID}">Upload</button>
                    <button class="btn_note" type="submit" value="Delete">Delete</button>
                </div>
            </div>`;
    });

    let btnUploadNote = document.getElementById(`upload_${lastID}`);

    btnUploadNote.addEventListener("click", () => {
        
        let inpUploadNote = document.getElementById(`editor_${lastID}`).value;
        
        newNoteDisplay.innerHTML = `<div class="note_field"><div class="note_area" >${inpUploadNote}</div><div class="buttons_area"><button class="btn_note" type="submit" id="upload_${lastID}" value="Edit">Edit</button><button class="btn_note" type="submit" value="Delete">Delete</button></div></div>`;
    });
});

function checkIdNumber () {

    const idAlreadyUsed = ["pera", "fresa", "platano", "fresa", "kiwi"];
    let newIdNumber = "id_" + Math.floor(Math.random()*100)*1; 

    if ( idAlreadyUsed.includes(newIdNumber) ) {
        console.log("No se incluirá el elemento: " + newIdNumber);
        console.log("Porque está repetido en el array: " + idAlreadyUsed);
        return;
    } 
        console.log(newIdNumber + " es un ID válido");
        idAlreadyUsed.push(newIdNumber);
        console.log("Array de IDs utilizadas: " + idAlreadyUsed);
        return newIdNumber;
}

