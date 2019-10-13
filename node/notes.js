// 刚开始学习的一些零散知识点

/*
{ var x = 1 }
console.log(x) // good 

{ let y = 1 }
console.log(y) // no good

*/

var ob1 = { a: 1 }
console.log(ob1.a) // var obj 就是对象

let ob2 = { b: 1 }
console.log(ob2.b) // same

//getter:
var obj = {
    log: ['a', 'b', 'c'], // 记得逗号
    get latest() {
        if (this.log.length == 0) {
            return undefined
        }
        return this.log[this.log.length - 1]
    }
}