// dynamic typing bu kelayotgan ma'lumotni bir turdan ikki turga otkazish masalan int tipida ma'lumot kelsa stringga

// typeof - string ga to string
// bu yerda typeof bizga qiymatni tipini chiqarib beradi 
//String esa kelyatgan ma'lumotni stringga otkazib berish uchuhn ishlatiladi
// 1-)
console.log(typeof String(124));

//2-)
//string + int bolgandan keyin natija string tipida boladi
console.log('string' + 14);
console.log(typeof('string' + 14));

//to number
// 1-)
// numberga otkazish uchun Number() dan foydalanamiz
console.log(typeof Number('25'));

//2-)
//bu usul esa string oldiga + qoyish bilan

console.log(typeof + '11');
console.log((+'5' + 5), "VS", ('5' + 5))

//3-)
// parseInt - bu ham Int ga otkazib beradi
console.log(typeof parseInt('25'));
//prompt bilan ishlashda esa quydagicha
let num = parseInt(prompt('age', ""))
console.log(num);

// to boolean
// 0, "", null, undefined, NaN xar doim false qaytaradi
//1-)
let age = 0
if (age) {
    console.log('p');
}
age = 14
if (age) {
    console.log('Q');
}
//2-)
console.log(typeof Boolean('4'));
let a = "true"
b = Boolean(a)
if (b) {
    console.log(typeof b, !b);
}
//3-)
// !! - ham boolean tipiga otkazib beradi
console.log(typeof !!'5');