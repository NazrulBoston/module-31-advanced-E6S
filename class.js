class Teacher {

constructor(name, subject, year){
    this.name = name;
    this.subject = subject;
    this.year = year

}

    lecture() {
        console.log('Sir is teaching Math');
    }

}

const tapan = new Teacher('Tapon sir', 'Physics', '2022');
console.log(tapan)

const rashid = new Teacher('Rashid sir', 'English', '2020')
console.log(rashid)