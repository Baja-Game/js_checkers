
window.app = {};

var x=8;
var y=8;

var checkerBoard = document.getElementById("checkerBoard");

for (var i=0; i<y; i++){
    var row = checkerBoard.appendChild(document.createElement("div"));
    for (var j=0; j<x; j++){
        row.appendChild(document.createElement("span"));
    }
}
