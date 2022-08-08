
function Create_UpdateNote(Title,Content,URL) {
    
    var table=document.createElement("div");
    var table_title=document.createElement("label");
    var table_content=document.createElement("label");

    table_title.innerText=Title;
    table_content.innerText=Content;

    table.setAttribute("class","UpdateNotes");
    table_content.setAttribute("class","UpdateNotes_UrLabel");
    table_content.onclick=function () {
        if (URL!=null && URL.replace(" ","")!="") {
            window.open(URL,"blank_");    
        }
    }

    table.appendChild(table_title);
    table.appendChild(document.createElement("br"));
    table.appendChild(table_content);

    document.getElementById("UpdateNotesTable").appendChild(table);
}

function Create_RecommendedVideo(Title,thumbnailURL,URL) {
    var table=document.createElement("div");
    var title=document.createElement("label");
    var thumbnail=document.createElement("div");

    table.setAttribute("class","RecoVideoTableItem");
    title.setAttribute("class","RecoVideoTableItem_Title");
    thumbnail.setAttribute("class","RecoVideoTableItem_Video");
 
    title.innerText=Title;
    thumbnail.style.backgroundImage="url('"+thumbnailURL+"')";
    thumbnail.onclick=function () {
        window.open(URL,"blank_");
    }
    
    table.appendChild(title);
    table.appendChild(thumbnail);

    document.getElementById("RecoVideoItemTable").appendChild(table);
}

function getIDfromYouTubeURL(URL) {
    //console.log(URL.substring(URL.lastIndexOf("=")+1,URL.length));
    return URL.substring(URL.lastIndexOf("=")+1,URL.length);
}

function BodyOnLoad() {
    Create_UpdateNote("Project Downloader","Created","https://github.com/REFUPANKER/MyAllProjects_WebSite_T1");    
    Create_UpdateNote("Link In Bio","Everything is changed","");   
    
    Create_RecommendedVideo("Bir Program Yaptim",
    "https://img.youtube.com/vi/"+getIDfromYouTubeURL("https://www.youtube.com/watch?v=kEU5DhuImkk")+"/0.jpg",
    "https://www.youtube.com/watch?v=kEU5DhuImkk");

    Create_RecommendedVideo("C# \nTo Do List \nOS Gui-V 0.0.2",
    "https://img.youtube.com/vi/"+getIDfromYouTubeURL("https://www.youtube.com/watch?v=02v3lt0boEY")+"/0.jpg",
    "https://www.youtube.com/watch?v=02v3lt0boEY");

    Create_RecommendedVideo("Desktop Tool V2 (C#)",
    "https://img.youtube.com/vi/"+getIDfromYouTubeURL("https://www.youtube.com/watch?v=SUL9VzBjPkU")+"/0.jpg",
    "https://www.youtube.com/watch?v=SUL9VzBjPkU");
    
    
}