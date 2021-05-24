module.exports = (x, y, callback) => {
    if (x > 0 && y > 0) {
        setTimeout(() => callback(null, {
            perimeter: () => 2 * (x + y),
            area: () => x * y
        }), 2000);
    }
    else {
        setTimeout(() => callback(
            new Error("Rectangle dimensions must both be positive."),
            null
        ), 2000);
    }
}