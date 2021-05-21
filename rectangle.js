const rect = {
    perimeter: (x,y) => 2 * (x + y),
    area: (x,y) => x * y
};

function solveRect(l, b) {
    console.log(`Solve for rect with l=${l} and b=${b}`);
    if (l<=0 || b<=0) console.log("Rect dimensions must be positive.");
    else {
        console.log(`Rect area is ${rect.area(l,b)}`);
        console.log(`Rect perimeter is ${rect.perimeter(l,b)}`);
    }
}