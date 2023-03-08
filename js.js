let numberOfSeries = +prompt("nechta serial kordingiz", ""),

    seriesDB = {
        count: numberOfSeries,
        series: {},
        actors: {},
        genres: [],
        privat: false,
    }

// a = prompt("Oxirgi ko'rgan serialingiz?", ""),
// c = prompt("Nechi baxo berasiz?", ""),
// b = prompt("Oxirgi ko'rgan serialingiz?", ""),
// d = prompt("Nechi baxo berasiz?", "")

// seriesDB.series[a] = c
// seriesDB.series[b] = d

// Bu yerda necha serial korgan bolsa shuni kiritadi va shu boyicha series ga seriallar bilan bergan baxosini actorisga esa bosh qahramonlarni yuklaydi

for (i = 0; i < numberOfSeries; i++) {
    let a = prompt(i + 1 + " - Ko'rgan serialingiz?", ""),
        c = prompt(i + 1 + " - serialga Nechi baxo berasiz?", ""),
        d = prompt(i + 1 + " - Bosh qaxramon", "")
    seriesDB.series[a] = c
    seriesDB.actors[a] = d
        // seriesDB.series[b] = d
}

console.log(numberOfSeries, seriesDB);