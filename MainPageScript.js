// init public
var updateNotesTable;
var recoVideoItemTable;
var appsBarTable;

function Create_UpdateNote(Title, Content, URL) {

    var table = document.createElement("div");
    var table_title = document.createElement("label");
    var table_content = document.createElement("label");

    table_title.innerText = Title;
    table_content.innerText = Content;

    table.setAttribute("class", "UpdateNotes");
    table_content.setAttribute("class", "UpdateNotes_UrLabel");
    table_content.onclick = function () {
        if (URL != null && URL.replace(" ", "") != "") {
            window.open(URL, "blank_");
        }
    }

    table.appendChild(table_title);
    table.appendChild(document.createElement("br"));
    table.appendChild(table_content);

    updateNotesTable.appendChild(table);
}

function Create_RecommendedVideo(Title, thumbnailURL, URL) {
    var table = document.createElement("div");
    var title = document.createElement("label");
    var thumbnail = document.createElement("div");

    table.setAttribute("class", "RecoVideoTableItem");
    title.setAttribute("class", "RecoVideoTableItem_Title");
    thumbnail.setAttribute("class", "RecoVideoTableItem_Video");

    title.innerText = Title;
    thumbnail.style.backgroundImage = "url('" + thumbnailURL + "')";
    thumbnail.onclick = function () {
        window.open(URL, "blank_");
    }

    table.appendChild(title);
    table.appendChild(thumbnail);

    recoVideoItemTable.appendChild(table);
}

function getIDfromYouTubeURL(URL) {
    //console.log(URL.substring(URL.lastIndexOf("=")+1,URL.length));
    return URL.substring(URL.lastIndexOf("=") + 1, URL.length);
}

function Create_AppsBarItem(AppImage, AppTitle, GithubLink) {
    var table = document.createElement("div");
    var appImage = document.createElement("div");
    var appTitle = document.createElement("label");
    var github = document.createElement("button");

    table.setAttribute("class", "AppsBarItem");
    appImage.setAttribute("class", "AppBarsItem_Image");
    appTitle.setAttribute("class", "AppBarsItem_Title");
    github.setAttribute("class", "AppBarsItem_Button");

    appTitle.innerText = AppTitle;
    github.innerText = "Github Page";

    appImage.style.backgroundImage = "url('" + AppImage + "')";

    github.onclick = function () {
        if (GithubLink != null && GithubLink.replace(" ", "") != "") {
            window.open(GithubLink, "blank_");
        }
    }

    table.appendChild(appImage);
    table.appendChild(appTitle);
    table.appendChild(github);

    appsBarTable.appendChild(table);
}

function BodyOnLoad() {
    // set on load
    updateNotesTable = document.getElementById("UpdateNotesTable");
    recoVideoItemTable = document.getElementById("RecoVideoItemTable");
    appsBarTable = document.getElementById("AppsBarTable");

    Create_UpdateNote("Project Downloader", "Created", "https://github.com/REFUPANKER/MyAllProjects_WebSite_T1");
    Create_UpdateNote("Link In Bio", "Everything is changed", "");

    Create_RecommendedVideo("Bir Program Yaptim",
        "https://img.youtube.com/vi/" + getIDfromYouTubeURL("https://www.youtube.com/watch?v=kEU5DhuImkk") + "/0.jpg",
        "https://www.youtube.com/watch?v=kEU5DhuImkk");

    Create_RecommendedVideo("C# \nTo Do List \nOS Gui-V 0.0.2",
        "https://img.youtube.com/vi/" + getIDfromYouTubeURL("https://www.youtube.com/watch?v=02v3lt0boEY") + "/0.jpg",
        "https://www.youtube.com/watch?v=02v3lt0boEY");

    Create_RecommendedVideo("Desktop Tool V2 (C#)",
        "https://img.youtube.com/vi/" + getIDfromYouTubeURL("https://www.youtube.com/watch?v=SUL9VzBjPkU") + "/0.jpg",
        "https://www.youtube.com/watch?v=SUL9VzBjPkU");

    Create_AppsBarItem("https://cdn-icons-png.flaticon.com/512/1813/1813912.png",
        "Project Downloader",
        "https://github.com/REFUPANKER/MyAllProjects_WebSite_T1/blob/C%23-Python-Java/(HTML-CSS-Javascript)/README.md");

    Create_AppsBarItem("https://cdn-icons-png.flaticon.com/512/82/82118.png",
        "Links In Bio",
        "");
}