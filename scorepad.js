let players = [];
let scores = [];

function getPlayers() {
    $("MainMenu").style.display = "none";
    $("SetNumPlayers").style.display = "block";
    $("numPlayers").focus();
}

function $(id){
    return document.getElementById(id);
}