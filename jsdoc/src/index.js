// @ts-check
const { add, multiply } = require('./calculator');

/**
 * @file index.js is the root file of this example
 * @author Dabeeo Corp.
 * @see <a href='www.dabeeo.com' >dabeeo</a>
 */
/**
 * Student Name
 * 학생 이름을 저장한다
 * @type {string}
 */
const studentName = 'Amy';

/**
 * 점수 배열
 * @type {Array<number>}
 */
const arr = [1, 2, 3, 4, 5];

/**
 * 할일
 * @type {{id: number|string, text :string}}
 */
const todo = { id: 1, text: 'go market' }

/**
 * 세금을 계산한다
 * @param {number} amount - 금액
 * @param {number} tax - 세율
 * @returns {string} - 총액
 */
const printTax = (amount, tax) => { return `계산된 세금 : ${amount * tax}` }

console.log(printTax(100, 2));


/**
 * 학생
 * @typedef  {Object} Student
 * @property {number} id - Student id
 * @property {string} name - Student name
 * @property {number | string} [age] - optional
 * @property {boolean} isActive - 현재 상태 
 */

/**
 * 학생 변수
 * @type {Student}
 */
const student = { id: 1, name: 'Aria', age: 30, isActive: true }

/**
 * 학생을 만들기 위한 클래스
 */
class Person {

    /**
     * 
     * @param {Object} info person에 대한 정보
     */
    constructor(info) {
        /**
         * @property {string} name 이름
         */
        this.name = info.name;
        /**
         * @property { string | number } age 나이 
         */
        this.age = info.age;
    }
    /**
     * @property {Function} greet  A greet with the name
     */
    greet() {
        console.log(`${this.name} says hi!`);
    }
}
/**
 * Person one
 * See {@link Person}
 */
const person = new Person({ name: 'TOMMY', age: 20 });

console.log(add(1, 20));