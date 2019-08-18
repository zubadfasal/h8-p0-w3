function tentukanDeretGeometri(arr) {
    for(var i = 0; i < arr.length; i++) {
        return arr[i + 1] / arr[i] === arr[arr.length - 1] /arr[arr.length -2];
    }
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));
