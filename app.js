//----------------------------------
//객체 리터럴
const user = {
    name: 'Shin',
    age: 33
}
console.log(user);

//----------------------------------
//생성자 함수
//첫글자를 대문자 관례
function User(name, age) {
    // this = {}; 내부 실행
    this.name = name;
    this.age = age;
    this.print = function () {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
    // return this 내부 실행
}

const user1 = new User('kim', 34);
const user2 = new User('Lee', 44);
console.log(user1)
user1.print();