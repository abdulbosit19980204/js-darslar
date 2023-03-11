function first() {
    console.log("1")
}

function second() {
    console.log("2")
}

function done() {
    console.log("that's great")
}

function edu(subject, callback) {
    console.log(`I wana lear ${subject}`);
    callback();
}


edu("Java script", done)