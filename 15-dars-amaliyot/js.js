let numberOfSeries = +prompt("nechta serial kordingiz", ""),

    seriesDB = {
        count: numberOfSeries,
        series: {},
        actors: {},
        genres: [],
        privat: false,
    }

// Bu yerda necha serial korgan bolsa shuni kiritadi va shu boyicha series ga seriallar bilan bergan baxosini actorisga esa bosh qahramonlarni yuklaydi

for (i = 0; i < numberOfSeries; i++) {

    let a = prompt(i + 1 + " - Ko'rgan serialingiz?", ""),
        c = prompt(i + 1 + " - serialga Nechi baxo berasiz?", ""),
        d = prompt(i + 1 + " - Bosh qaxramon", "")

    if (a != null && c != null && d != null && a != "" && c != "" && d != "") {
        seriesDB.series[a] = c;
        seriesDB.actors[a] = d;
        console.log("Hamma qiymat to'gri va ma'lumotlar saqlandi");
    } else {
        console.log("Natog'ri ma'lumot tufayli toxtatildi");
        i--;

    }



}
if (seriesDB.count <= 5) {
    console.log("Kam serial ko’ripsiz")
} else if (seriesDB.count > 5 & seriesDB.count <= 10) {
    console.log("Siz classik tamoshabin ekansiz")
} else {
    console.log("Siz serialchi zvezda ekansiz")
}
console.log(numberOfSeries, seriesDB);