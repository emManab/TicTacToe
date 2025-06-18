const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');
const h1 = document.getElementsByTagName('h1');

const rbtn = document.getElementById('rstbtn');
let currentPlayer= "X";
count = 0

let winingcondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function startGame(e){
    if(e.target.className !=='ticTac')
        { if(e.target.innerText==""){
            e.target.textContent=currentPlayer;
            winner();
            count++;
            currentPlayer = (currentPlayer === "X") ? "O":"X"
            }
        }
    if(count==9){
        h1[0].innerText = "DRAW !"
    }
}
ticTac.addEventListener('click',startGame)


function winner(){
    winingcondition.forEach((item) => {
        let index0 = item[0]
        let index1 = item[1]
        let index2 = item[2]

        let val0 = boxes[index0].innerText
        let val1 = boxes[index1].innerText
        let val2 = boxes[index2].innerText
        
        if(val0!=='' && val1!=='' && val2!==''){
            if(val0==val1 && val0==val2) {
                boxes[index0].classList.add("winnerClass")
                boxes[index1].classList.add("winnerClass")
                boxes[index2].classList.add("winnerClass")
                console.log("Winner"+"-> "+val0);
                h1[0].innerText = `Winner is ${val1}`;
                ticTac.removeEventListener('click',startGame);
                count = 0;
                boxes.forEach(item => {
                    item.style.pointerEvents = "none"; // Disable hover and clicks on all boxes
                });
            }
        }
    });
}

rbtn.addEventListener('click', () => {
    console.log("Hello");
    count=0;
    boxes.forEach(item => {
        item.classList.remove("winnerClass");
        item.textContent = "";
        item.style.pointerEvents = ""; // Re-enable hover and clicks on all boxes
    }); // Clear all boxes
    h1[0].innerText = "Game Restarted"; // Reset the winner message
    currentPlayer = "X"; // Reset the current player
    ticTac.addEventListener('click', startGame); // Re-enable the game
});

