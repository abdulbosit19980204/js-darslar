'use strict'

// export qilish uchun birinchi o'zgaruvchi elon qilib olib keyin eport qilish mumkin
const firstVariable = "Hello",
    newVar = "Mono variable eksported"
export { firstVariable, newVar }

// bir yoli epoxrt dan keyin eksport qilinadigan o'zgaruvchini yozish mumkin
export const secVar = 'Hello sec'

// default eksport - lekin bitta fayldan faqat bitta eksport default yuborish mumkin
export default function logger() {
    console.log("Logger default export function");
}