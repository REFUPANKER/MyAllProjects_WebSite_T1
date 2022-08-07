
//var UpdateNotesTBL=
function Create_UpdateNote(Title,Content,URL) {
    
    var table=document.createElement("div");
    var table_title=document.createElement("label");
    var table_content=document.createElement("label");

    table_title.innerText=Title;
    table_content.innerText=Content;

    table.setAttribute("class","UpdateNotes");
    table_content.setAttribute("class","UpdateNotes_UrLabel");
    table_content.onclick=function () {
        window.open(URL,"blank_");
    }

    table.appendChild(table_title);
    table.appendChild(document.createElement("br"));
    table.appendChild(table_content);

    document.getElementById("UpdateNotesTable").appendChild(table);
}

function BodyOnLoad() {
    Create_UpdateNote("Test","We are testing !!","https://www.google.com");    
}