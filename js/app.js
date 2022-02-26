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
//생성자 함수 호출시 반드시 new를 붙여야 함!
const user1 = new User('kim', 34);
console.log('user1', user1);

//undefined
const user2 = User('Lee', 44);
console.log('user2', user2);

user1.print();

//---------------------------------------
// 객체 복제
//Object.assgin

const person = {
    name: 'L33',
    age: 35
}
//복제되지 않음. 두 변수가 하나의 객체를 가리킬 뿐 
const clone = person;
console.log(clone);
console.log(person);

//객체 복제됨
//초기값 + 새로운 값을 병합하여 반환. 키가 같으면 overwrite
const clone2 = Object.assign({}, person);
clone2.age = 333;
person.name = 'KIM';
console.log(clone2);
console.log(person);

//------------------------------------
//Object.keys() : key만 뽑아냄 : 키 배열 반환
//Object.values(): 속성값만 반환
//Object.entries(): 키/값 배열로 반환
//Object.fromEntries() : 키/값 배열로 객체 생성
console.log(Object.keys(person)); // ['name', 'age']
console.log(Object.values(person)); // ['KIM', 35]
console.log(Object.entries(person)); // [['name', 'KIM'], ['age', 35]]

//object 접근 key는 문자열
const obj = {
    1: 33,
    true: 'questions?'
}
console.log(obj[1]);
console.log(obj['1']);
console.log(obj[true]);
console.log(obj['true']);

//--------------------------------------
// 문자열: length, 배열로 접근
let alph = '안녕하세요';
console.log(alph.length);
console.log(alph[0]);
//수정불가
alph[0] = '하';
console.log(alph);
console.log(alph.indexOf('안')); //첫번째 일치하는 문자의 순서. 0부터 시작
console.log(alph.indexOf('안') > -1); //true. 문자포함하는 지 확인위해서는 -1보다 큰지 비교해야 함!
console.log(alph.includes('안'));//문자포함여부

console.log(alph.slice(0, 3)); //안녕하
console.log(alph.slice(2)); //하세요
console.log(alph.slice(0, -1)); //음수는 끝에서부터. 안녕하세
console.log(alph.substring(1, 3)); //음수 인식 안함
console.log(alph.substring(3, 1)); //순서바뀌어도 동일 

// 예제: 제목만 추출
let list = [
    '01. 소개',
    '02. 본문',
    '03. 결론',
    '04. 부록',
    '05. 참고문헌',
    '06. 이메일'
]
let newList = [];
for (l of list) {
    newList.push(l.slice(4))
}
console.log(newList);

//------------------------------------------------
//배열
//push(): 뒤에 삽입, pop(): 뒤에 삭제, unshift():앞에 삽입, shift():앞에 삭제
list.push('dd');
console.log(list);
list.pop();
console.log(list);
list.unshift('dd');
console.log(list);
list.shift();
console.log(list);

//slice, splice, concat
let rest2 = list.slice(1, 2); //삭제하지 않고 반환만 함. 
console.log('반환된 리스트 :', rest2);
console.log(list);

let rest = list.splice(1, 2); //삭제. 삭제된 배열 반환
console.log('삭제된 리스트 :', rest);
console.log(list);

list.splice(1, 2, 'aaa', 'vvv'); //삭제 후 삽입
console.log(list);

list.splice(1, 0, 'bbb'); //삽입
console.log(list);

newList = list.concat(['uuu'], 'zzz') //합친것을 반환. 
console.log(newList);
console.log(list);

//------------------------------------------------
// forEach : 배열에 반복하여 실헹
list.forEach((item, index, arr) => {
    console.log(`${index + 1} ${item} ${arr}`);
});

//배열에서 찾기
console.log(list.indexOf('vvv'));
console.log(list.includes('vvv'));

//------------------------------------------------
//find: true인 경우 첫번째 요소만을 반환. 없으면 undefined.
//findIndex
console.log(list.find((item) => {
    return item === 'vvv'
}));

const userList = [
    { id: 1928, name: 'Lee' },
    { id: 1928, name: 'Park' },
    { id: 1928, name: 'Lee' },
    { id: 9900, name: 'Shin' },
    { id: 9872, name: 'Moon' },
]

let result = userList.find((item) => {
    return item.name === 'Lee'
})
console.log(result);

//------------------------------------------------
//filter : true인 모든 요소를 반환
result = userList.filter((item) => {
    return item.name === 'Lee'
})
console.log(result);

//-------------------------------------------------
//map : 각 원소에 대해 배열을 만들어  반환
result = userList.map((item, index) => {
    return Object.assign({}, item, {
        calc: index / 100
    })
});
console.log(result);

//-------------------------------------------------
//join, split
result = list.join('-');
console.log(result);

let result2 = result.split('-');
console.log(result2);

// 각 문자를 분리
result2 = "hello World".split("");
console.log(result2);

//---------------------------------------------------
//sort
let numList = [9, 4, 2, 0, 98, 39]
result = numList.sort((a, b) => a - b);
console.log(result);
console.log(numList);

//---------------------------------------------------
//reduce, reduceRight
result = numList.reduce((prev, cur) => {
    return prev + cur;
}, 0);
console.log(result);

const mList = [
    { id: 1928, name: 'Lee' },
    { id: 1928, name: 'Park' },
    { id: 1928, name: 'Lee' },
    { id: 9900, name: 'Shin' },
    { id: 9872, name: 'Moon' },
];

result = mList.reduce((prev, cur) => {
    console.log(prev);
    if (cur.name.indexOf('e') > -1) {
        prev.push(cur.name)
    }
    return prev;
}, []);
console.log(result);

//---------------------------------------
//구조분해할당
//Destructuring assignment
//배열구조분해, 기본값 설정, 무시 가능. 없는 경우 undefined
let [x, y] = [1, 2];
[x, y] = [y, x];
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
//객체구조분해,기본값 설정 가능
let member = { name1: 'Shin', id: 100 };
let { id, name1 } = member;  //순서 관계없음. 
//let {id:myId, name1:myName} = member 
// id = member.id;
// name1 = member.name1;
console.log(name1, id);

//---------------------------------------
//spread syntax, Rest parameters
//배열로 넘어옴 

function rest_func(...args) {
    console.log(args);
    console.log(args.length);
}
rest_func(1, 2);

function add(...numbers) {
    let result = 0;
    numbers.forEach(item => {
        result += item;
    });
    return result;
}
console.log(add(1, 2));

//생성자 함수
function Person(name, years, ...skills) {
    this.name = name;
    this.years = years;
    this.skill = skills;
}

const p1 = new Person('Shin', 3, 'html', 'css', 'js');
const p2 = new Person('Lee', 2, 'react', 'typescript', 'mui');
const p3 = new Person('Kim', 2, 'react');

console.log(p1);
console.log(p2);
console.log(p3);

const a1 = [1, 2, 3];
const a2 = [...a1, 5, ...a1, 7, 9];
console.log(a2);

let p4 = { name: 'shin' };
let p5 = { ...p4, years: 20 };
console.log(p5);

//----------------------------------
//closure
function makeCounter() {
    let num = 0; //은닉화

    return function () {
        return num++;
    }
}
let counter = makeCounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2

//----------------------------------
const tId = setTimeout((item) => {
    console.log(item, '1 sec timeout');
}, 1000, 'shin');
clearTimeout(tId);

//----------------------------------
//prototype : 상속

const vehicle = {
    doors: 3
}
const car = {
    wheels: 4,
    drive() {
        console.log('drive....')
    }
}
const bmw = {
    color: 'red'
}

//상속
car.__proto__ = vehicle;
bmw.__proto__ = car;
console.log(bmw);
//상속받은 속성을 가지고 있음.
//prototype chain
console.log(bmw.wheels)
bmw.drive();

for (let p in bmw) {
    if (bmw.hasOwnProperty(p))
        console.log('정의한 속성:', p);
    else
        console.log('상속받은 속성:', p);

}
console.log(Object.keys(bmw)); //상속받은 속성은 제외됨. 

//-------------------------------------------
// call : this를 넘겨줌
const tom = {
    name: 'TOM'
}
function showName() {
    console.log(this.name);
}
showName();
showName.call(tom); //this로 전달

function update(age) {
    this.age = age;
}
update.call(tom, 20); //첫번째 매개변수는 this로 해석됨
console.log(tom);
console.log(tom.age);

update.apply(tom, [24]); //첫번째 매개변수는 this로 해석됨. this를 제외한 변수는 배열로 전달
console.log(tom);
console.log(tom.age);

