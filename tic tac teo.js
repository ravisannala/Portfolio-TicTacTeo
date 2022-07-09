
let player = "X";
let gameover = false;
const changeplayer = () => {
    return player === "X" ? "0" : "X";
};
let turn=0
const checkwon = () => { 
    let boxtexts = document.getElementsByClassName("boxtext");
    let winpos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    winpos.forEach((ele) => {
        if (
            boxtexts[ele[0]].innerText === boxtexts[ele[1]].innerText &&
            boxtexts[ele[1]].innerText === boxtexts[ele[2]].innerText && 
            boxtexts[ele[0]].innerText !== ""
            ) {
                document.getElementById("result").innerText =
                  boxtexts[ele[0]].innerText + " Won The Game  ";
                gameover = true;
                document.querySelector("img").style.width= "300px";
                gameover=true;

            }
    });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((box) => {
    let boxtext = box.querySelector(".boxtext");

    box.addEventListener("click", () => {
        if(boxtext.innerText === "" && !gameover) {
        boxtext.innerText = player;
        player = changeplayer();
        checkwon();
        turn++;
        

        console.log(turn);
        document.getElementsByClassName("player")[0].innerText = player;
        
    }
    if(turn===9 && !gameover){
        document.getElementById("result").innerText="Draw";
    }
    

 });
});
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach((boxtext) => {
        boxtext.innerText = "";
    });
    player = "X";
    document.querySelector('img').style.width="0px";
    document.getElementById("result").innerHTML= "Running";
    document.getElementsByClassName("player")[0].innerHTML=player;
    gameover = false;
});