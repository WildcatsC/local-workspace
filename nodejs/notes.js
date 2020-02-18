// 刚开始学习的一些零散知识点

/*
{ var x = 1 }
console.log(x) // good 

{ let y = 1 }
console.log(y) // no good

*/

// var ob1 = { a: 1 }
// console.log(ob1.a) // var obj 就是对象

// let ob2 = { b: 1 }
// console.log(ob2.b) // same

//getter: get语法将对象属性 property 绑定到查询该属性时将被调用的函数。
var obj = {
        log: ['a', 'b', 'c'], // 记得逗号
        get latest() { // 这里就是property
            if (this.log.length == 0) return undefined;
            return this.log[this.log.length - 1];
        }
    }
    // console.log(obj.latest);
    // =======================================

// Array.prototype.<methods> 有很多array的方法 Mozilla有教程

// about JSON:
// JSON.parse() and JSON.stringify()
//console.log(JSON.parse({ "key": 'sb' }.key));
var s = { "name": 1 };
//console.log(JSON.stringify(s));
var r = JSON.parse(s.name);
//console.log(r);
// output: {"name":1} \n 1