function sum (x, y) {
    return x + y;
}

function avg (arrNums) {
    let result = 0;
    arrNums.map((i) => {
        return result += i;
    });

    return result / arrNums.length;
}

export { sum, avg };
