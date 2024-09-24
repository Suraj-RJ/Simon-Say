let gameSeq = []
let userSeq = []

let btns = ["red", "green", "yellow", "purple"]

let start = false
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(start==false){
        console.log("Game Started")
        start = true;

        levelUp();
    }
});

    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function (){
            btn.classList.remove("flash");
        }, 250);
    }

    function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function (){
            btn.classList.remove("userflash");
        }, 250);
    }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = ` Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn);
}

    function checkAns(idx){
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq .length == gameSeq.length){
                setTimeout(levelUp,1000);
            }
        }else{
            h2.innerHTML = ` Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function (){
                document.querySelector("body").style.backgroundColor = "white";
            }, 250)
            reset();

        }
    }

function btnPrees(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPrees);
}


function reset(){
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0;
}