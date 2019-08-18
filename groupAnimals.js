function groupAnimals(animals) {
    var animalsGroups = [];
    for(var i = 0; i < animals.length; i++) {
        animalsGroups.push([]);
        var indeks = 0;
        for(var j = 0; j < animals.length; j++) {
            if(animals[i][0] === animals[j][0]) {
                animalsGroups[i][indeks] = animals[];
                indeks ++;
            }
        }
    }
    var tampung = 0;
    for(var i = 0; i < animals.length; i++) {
        for(var j = 0; j < animals.length; j++) {
            if (animalsGroups[j] > animalsGroups[j + 1]) {
                tampung = animalsGroups[j + 1];
                animalsGroups[j + 1] = tampung;
            }
        }
    }
    for(var i = 0; i < animalsGroups.length - 1; i++) {
        if(animalsGroups[i][0] === animalsGroups[i + 1][0]) {
            animalsGroups.splice(i, 1);
        }
        return animalsGroups;
    }
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
