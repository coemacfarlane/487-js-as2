var table = document.getElementById("data-table");
var htmlBuild = "<tr><th>Teams</th><th>Wins</th><th>Losses</th></tr>"
var bestScr = 0;
var bestTm;

for (let i = 0; i < teams.length; i++) {
    htmlBuild += "<tr id='row" + i + "'><td>" + teams[i] +
        "</td><td>" + wins[i] +
        "</td><td>" + losses[i] +
        "</td></tr>";

        if (wins[i] > bestScr) {
            bestScr = wins[i];
            bestTm = "row" + i;
            console.log(bestTm);
        }
}

table.innerHTML = htmlBuild;

document.getElementById(bestTm).style.fontWeight = "900";