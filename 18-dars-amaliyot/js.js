let numberOfSeries;
startApp();

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
}

function startApp() {
    numberOfSeries = +prompt("nechta serial kordingiz", "");
    while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("nechta serial kordingiz", "");
    }
}

// Bu yerda necha serial korgan bolsa shuni kiritadi va shu boyicha series ga seriallar bilan bergan baxosini actorisga esa bosh qahramonlarni yuklaydi
function rememberMySeries() {
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
}
rememberMySeries()

function detectLevelSeries() {
    if (seriesDB.count <= 5) {
        console.log("Kam serial ko’ripsiz")
    } else if (seriesDB.count > 5 & seriesDB.count <= 10) {
        console.log("Siz classik tamoshabin ekansiz")
    } else if (seriesDB.count > 10) {
        console.log("Siz serialchi zvezda ekansiz")
    }
    console.log(numberOfSeries, seriesDB);
}
detectLevelSeries()

let isPrivate = prompt("Qanday personsiz")

function showDb(isPrivate) {
    if (isPrivate == "private") {
        console.log("VIP")
        return true
    } else if (isPrivate != "") {
        console.log("Public person")
        return false
    } else {
        console.log("Error")
    }
}

showDb(isPrivate)


function writeGenres() {
    for (i = 0; i < numberOfSeries; i++) {
        let g = prompt(i + 1 + " - Yaxshi korgan janiringiz")
        if (g != "" || g != null) {
            seriesDB.genres[i + 1 + " - janr"] = g
        }
    }
}

writeGenres()