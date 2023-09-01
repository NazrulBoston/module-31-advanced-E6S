class Person {
    constructor(name, age, sex){
        this.name = name ;
        this.age = age;
        this.sex = sex;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
}

const kodom = new Person('Kodom Ali', '21', 'male')
console.log(kodom)
const badam = new Person ('Badam', '22', 'male' )
console.log(badam)

kodom.sleep()
badam.sleep()
