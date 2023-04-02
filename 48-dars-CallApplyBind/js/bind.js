// bind yana bir misol bilan koramiz

let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
        console.log(this);
        console.log("btn running");
    })
    //BU yerda Window objectini qaytaradi


let i = 0;
btn.addEventListener('click', function() {
    console.log(this);
    console.log("Function bilan e'lon qilingan click run boldi");
    ++i
    if (i <= 1) {
        this.style.backgroundColor = "#ffff0a"
        this.style.borderRadius = "200px"
        console.log(this, i);
        this.style.color = "black";
    } else {
        i = 0;
        // this.style.backgroundColor = "#ffffff"
        this.style.borderRadius = "20px"
        console.log(i)

        this.style.backgroundColor = " rgb(0, 0, 0)"
            // this.style.borderRadius = "150px"
        this.style.color = "white";
    }

})


//strelkali funksiyani o'zini context this i bolmaydi tepasidagi objectga osiladi

const obj = {
    x: 10,
    y: 15,
    sum: function() {
        const logger = () => {
            console.log(this);
        }
        logger()
    },
}

obj.sum()


let xesob = (a) => {
        return a + 10
    } // buni quydagicha qisqartirish mumkin
console.log("xesob = ", xesob(5));

xesob = (a) => a + 10 // bu yerdan korinadiki bizni funksiyamiz bitta qiymat qaytaradigan bolsa bitta qatorga shu korinishda soddalashtirib yozish mumkin
console.log("xesbo sodda = ", xesob(3));