let meScore = 0;
let ucsbScore = 0; // 注意 let and var

const meScore_span = document.getElementById("me-score"); //用于.回 html
const ucsbScore_span = document.getElementById("ucsb-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); // get p tag in result

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

console.log("hi");

function ucsbChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)]; // Math.floor 向下取整，同理java，python（向上ceil）
}


function game(meChoice) {
    const ucsb = ucsbChoice();
    const me = meChoice;
    // ** 用switch **
    switch (me + ucsb) { // IMPORTANT 
        case "sp": // 发现不能用 case(a||b||c): 这样的的statement
        case "pr":
        case "rs":
            win(me, ucsb);
            break;

        case "ps":
        case "sr":
        case "rp":
            lose(me, ucsb);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(me, ucsb);
            break;
            //}
    }
}

function win(me, ucsb) {
    meScore++;
    meScore_span.innerHTML = meScore; // ** IMPORTNAT ** 连到 html了。用.回 html
    if (me == "r") me = "石头";
    else if (me == "p") me = "布";
    else me = "剪刀";
    // 也可以写成函数的形式，就不用写两轮if else了。
    result_p.innerHTML = `我出${me}  ucsb出${convert(ucsb)}. 赢了🔥`;
    // ``是一个新的牛逼写法

    //下面这两行是refine的部分：
    document.getElementById(me).classList.add("green-glow");
    setTimeout(function() { document.getElementbyId(me).classList.remove("green-glow") }, 300);

}

function convert(word) {
    if (word === "r") return "石头";
    else if (word === "p") return "布";
    else return "剪刀";
}

function lose(me, ucsb) {
    ucsbScore++;
    ucsbScore_span.innerHTML = ucsbScore;
    result_p.innerHTML = `我出${convert(ucsb)}  ucsb出${convert(me)}. 输了😪`;
    document.getElementById(me).classList.add("red-glow");
    setTimeout(function() { document.getElementbyId(me).classList.remove("red-glow") }, 300);
}

function draw() {
    result_p.innerHTML = `我爱ucsb, 好好毒🌲.`
}





function main() {
    rock_div.addEventListener(
        'click',
        function() {
            game("r");
        }
    )

    paper_div.addEventListener(
        'click',
        function() {
            game("p");
        }
    )

    scissor_div.addEventListener(
        'click',
        function() {
            game("s");
        }
    )
}

main();