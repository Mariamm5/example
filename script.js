const colums = document.querySelectorAll(".colums");
const main = document.querySelector("#main");
const winDiv = document.querySelector("#winDiv");
const text = document.querySelector(".text");
let m = false;

const btn = document.getElementById("btn")

const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for (let i = 0; i < colums.length; i++) {
    colums[i].addEventListener("click", () => {
        if (!colums[i].innerText) {
            if (m == false) {
                colums[i].innerText = "X";
                win("X");
                m = !m;
            }
            else {
                colums[i].innerText = "O";
                win("O")
                m = !m;
            }
        }
    })
}

function win(elem) {
    let winner = false;
    for (let i = 0; i < winArr.length; i++) {
        if (colums[winArr[i][0]].innerText == elem &&
            colums[winArr[i][1]].innerText == elem &&
            colums[winArr[i][2]].innerText == elem) {
            main.style.display = "none";
            winDiv.style.display = "flex"
            text.innerHTML = `THE WINNER IS  "${elem}"`
            winner = true;
            break;
        }

        if (!winner) {
            let allfilled = true;
            for (let i = 0; i < colums.length; i++) {
                if (!colums[i].innerText) {
                    allfilled = false;
                    break;
                }
            }

            if (allfilled) {
                main.style.display = "none";
                winDiv.style.display = "flex"
                text.innerHTML = "Nobady is win!"
            }
        }

    }
}

btn.addEventListener('click', resetGame);

function resetGame () {
    window.location.reload();
}