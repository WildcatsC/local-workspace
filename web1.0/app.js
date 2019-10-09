const meScore = 0;
const ucsbScore = 0;

const meScore_span = document.getElementById("me-score");
const ucsbScore_span = document.getElementById("ucsb-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function ucsbChoice() {
    const choices = ['r', 'p', 's'];
    return choices[ucsbChoice.random() * 3
    }

    function game(meChoice) {

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
                game("p")
            }
        )

        scissor_div.addEventListener(
            'click',
            function() {
                game("s")
            }
        )
    }