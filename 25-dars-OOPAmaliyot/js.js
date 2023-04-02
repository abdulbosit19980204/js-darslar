// seriesDB ichiga start degan funksiyamizni qoshib oldik StartAPP degan funksiyani ochirib tashladik
// numberofSeries ni o'rniga obyektimizdan count ga mmurojat qilamiz
const seriesDB = {
    count: 5,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        seriesDB.count = +prompt("nechta serial kordingiz", "");
        while (seriesDB.count == "" || seriesDB.count == null || isNaN(seriesDB.count)) {
            seriesDB.count = +prompt("nechta serial kordingiz", "");
        }
    },
    rememberMySeries: function() {
        for (i = 0; i < seriesDB.count; i++) {

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
    },
    detectLevelSeries: function() {
        if (seriesDB.count <= 5) {
            console.log("Kam serial ko’ripsiz")
        } else if (seriesDB.count > 5 & seriesDB.count <= 10) {
            console.log("Siz classik tamoshabin ekansiz")
        } else if (seriesDB.count > 10) {
            console.log("Siz serialchi zvezda ekansiz")
        }
    },
    writeGenres: function() {
        /*
                for (i = 0; i < seriesDB.count; i++) {
                    // let gener = prompt(i + 1 + " - Yaxshi korgan janiringiz")
                    let gener = prompt(`${i+1} - yaxshi korgan janringiz`, "")
                    if (gener === "" || gener === null) {
                        console.log("Siz noto'g'ri ma'lumot kiritdingiz")
                        i--
                    } else {
                        seriesDB.genres[i] = gener

                    }
                    // console.log(p)
                }
        */


        let geners = prompt("Yaxshi korgan janiringizni vergul yordamida yozing").toLocaleLowerCase()
        if (geners === "" || geners === null) {
            console.log("Siz noto'g'ri ma'lumot kiritdingiz")
            i--
        } else {
            seriesDB.genres = geners.split(', ')
            seriesDB.genres.sort()

        }

        seriesDB.genres.forEach((item, idx) => {
            console.log(`Yaxshi ko'rgan janringiz ${idx + 1} - nomi ${item}`)
        })

    },
    showDb: function() {
        if (!seriesDB.private) {
            console.log(seriesDB)
        }
    },
    visibleDB: function() {
        if (seriesDB.private) {
            seriesDB.private = false
        } else {
            seriesDB.private = true
        }
    }
}

// seriesDB.start()
// seriesDB.rememberMySeries()
// seriesDB.detectLevelSeries()
// seriesDB.writeGenres()
// seriesDB.showDb()