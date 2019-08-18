function perkalianUnik(arr) {
    var multiply = 1;
    for(var i = 0; i < arr.length; i++) {
        multiply *= arr[i];
    }
    var tampung = [];
    var result = 0;
    for(var j = 0; j < arr.length; j++) {
        result = multiply/arr[j];
        tampung.push(result);
    }
    return tampung;
}
console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
