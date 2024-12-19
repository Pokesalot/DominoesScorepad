let players = [];
let scores = [];

function getPlayers() {
    let numberOfPlayers = prompt("Enter the number of players:");

    for (let i = 0; i < numberOfPlayers; i++) {
        let playerName = prompt(`Enter the name of player ${i + 1}:`);
        players.push(playerName);
        scores.push(0);
    }

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    players.forEach(player => {
        let th = document.createElement('th');
        th.innerText = player;
        headerRow.appendChild(th);
    });
    let th = document.createElement('th');
    th.innerText = "End Round";
    headerRow.appendChild(th);
    table.appendChild(headerRow);

    let scoreRow = document.createElement('tr');
    scores.forEach(score => {
        let td = document.createElement('td');
        td.innerText = score;
        scoreRow.appendChild(td);
    });
    let endRoundButton = document.createElement('button');
    endRoundButton.innerText = "End Round";
    endRoundButton.onclick = function() {
        for (let i = 0; i < players.length; i++) {
            let score = parseInt(prompt(`Enter score for ${players[i]}:`));
            scores[i] += score;
            scoreRow.children[i].innerText = scores[i];
        }
    };
    let td = document.createElement('td');
    td.appendChild(endRoundButton);
    scoreRow.appendChild(td);
    table.appendChild(scoreRow);

}