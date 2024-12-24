let players = [];
let scores = [];
let rounds = [];
let curCound = 0;
let buildTable=true;

function getPlayers() {
    
    $("MainMenu").style.display = "none";
    $("SetNumPlayers").style.display = "block";

    $("numPlayers").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            BuildPlayerTable();
        }
    });

    $("numPlayers").focus();
}

function DisplayScoreboard(active=-1){
    let tableText = "<th>"
    for(i=0;i<players.length;i++){
        tableText += `<td onClick="DisplayScoreboard(active=${i});" >${players[i]}</td>`
    }
    tableText += "</th><tr>"
    for(i=0;i<scores.length;i++){
        tableText += `<td onClick="DisplayScoreboard(active=${i});>`
        if(i == active && rounds[i] == curRound){
            tableText+=`<input id="ActiveScore" type="text" inputmode="numeric" pattern="[0-9]*" style="width: 50px; height: 30px; font-size: 20px;" onfocusout="UpdateScore(${i});"></input>`;
        }else{
            tableText+=`${scores[i]}`; 
        }
        tableText+="</td>"
    }
    $("ScoreTable").innerHTML=tableText;
}

function UpdateScores(index){
    scores[index] += parseInt($("ActiveScore").value);
    rounds[index]++;

    if(Math.min(rounds)>curRound){
        curRound++;
    }
}

function BuildPlayerTable(){
    if(buildTable){//Hacky, but it keeps it from double-firing
        buildTable = false;

        for(i=0;i<parseInt($("numPlayers").value);i++){
            players.push( prompt(`Name for player ${i+1}`) );
            scores.push(0);
            rounds.push(0);
        }

        $("numPlayers").removeEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                BuildPlayerTable();
            }
        });
        $("SetNumPlayers").style.display="none";
        $("ScoreboardDiv").style.display="block";
        DisplayScoreboard();
        
    }
}


function $(id){
    return document.getElementById(id);
}