function first(cb) {
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);

}

function second() {
    console.log("2");
}
first(second)

function done() {
    console.log("that's great")
}

function edu(subject, callback) {
    console.log(`I wana lear ${subject}`);
    callback();
}


edu("Java script", done)