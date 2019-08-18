function targetTerdekat(arr) {
    var looking0 = arr.indexOf('o');
    var jarak1 = 0; 
    var jarak2 = arr.length;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'x') {
            jarak1 = Math.abs(looking0 - i);
            if(jarak1 < jarak2) {
                jarak2 = jarak1;
            }
        }
    }
    if(arr.indexOf('x') === - 1) {
        return 0;
    }
    return jarak2;
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
console.log(targetTerdekat([' ', ' ', 'o', ' ']));
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));
