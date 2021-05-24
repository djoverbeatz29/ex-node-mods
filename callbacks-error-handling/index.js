const rectangle = require("./rectangle");

function solveRect(l, b) {
    console.log(`Solving for rect with l=${l}, b=${b}`);
    rect(l, b, function(err, rect) {
        if (err) console.log(`ERROR: ${err.message}`);
        else {
            console.log(`Here are the dimensions for our ${l} by ${b} rectangle:`)
            console.log(`Perimeter: ${rectangle.perimeter()}`);
            console.log(`Area: ${rectangle.area()}`);
        }
    })
}