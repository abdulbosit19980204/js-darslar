'use strict'

function Car(name, color) {
   this.name = name
   this.color =color

   this.info = function(){
     console.log(`Name of ${this.name}, color is ${this.color}`);
   }

}

const bwm = new Car("BMW", "Black")
bwm.info() // Name of BMW, color is Black

// BU korinishda obyektimiz ichidagi ma'lumotni to'gridan to'g'ri o'zgartirishimiz mumkin lekin bu noto'g'ri narsa 
// BUni qandaydur method yordamida tashqariga chiqarish yoki olish kerak boladi yani get yoki set qilish
// shu yerda inkapsulyatsiydan foydalaniladi

function InkapCar(name, color, bonus) {
    // name degan ozgaruvchi elon qilib olamiz
    let Carname = name
    let extraBonus = bonus
    this.color =color
    
    this.getBonus = function(){
        return bonus
    }

    this.setBonus = function(bonus){
        if(typeof bonus== 'number' && bonus>0 & bonus<100){
            extraBonus = bonus
        }else{
            console.log("We can't give much bonuse");
        }
    }
    // ma'lumot olish uchun bitta get method yozamiz
    this.getName  = function(){
        return name
    }
    
    // tashqaridan ma'lumot kiritish uchun set method yozamiz
    
    this.setName = function(name){
        Carname = name
    }
    

    this.info = function(){
      console.log(`Name of ${Carname}, color is ${this.color} and Bonus is ${extraBonus}`);
    }
}


 const bwmInk = new InkapCar("BMW", "Black",10)
 console.log(bwmInk.getName());// BMW
bwmInk.info() // Name of BMW, color is Black and Bonus is 10
bwmInk.setName("Merc")
bwmInk.setBonus(99)
bwmInk.info() //Name of Merc, color is Black and Bonus is 50