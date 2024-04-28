let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turnO = true; //playerO turn
 const winnptn=[
     [0,1,2],
     [0,4,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
 ];

 const resetGame = () => {
     turnO = true;
     enablebtn();
     msgContainer.classList.add("hide");
     
     
     

 }
 boxes.forEach((box) => {
     box.addEventListener("click",() => {
         if(turnO){
            box.innerText="O";
             turnO=false;
         }else {
            box.innerText="X";
             turnO=true;
         }

         box.disabled = true;
         checkWinner ();

     });
 });

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
 const showWinner = (winner) => {
     msg.innerHTML = `congration ,winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disablebtn();
     
 };

 const checkWinner = () => {
    for(let pattern of winnptn){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }   
        }

    }

 };
 newGameBtn.addEventListener("click" , resetGame);
 resetbtn.addEventListener("click" ,resetGame);