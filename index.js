const rect = require("./rectangle");

function getAndSolveRect() {
    let l, b;
    while (true) {
        const l = Number.parseFloat(window.prompt("Enter a positive number for the length: "));
        if (l) break;
        else console.log("Number must be a positive number, fool.");
    }
    while (true) {
        const b = Number.parseFloat(window.prompt("Enter a positive number for the width: "));
        if (b) break;
        else console.log("Number must be a positive number, fool.");
    }
    solveRect(l, b);
}

getAndSolveRect();