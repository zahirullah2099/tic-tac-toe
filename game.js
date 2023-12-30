let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let count ;

let turn0 = true;
let winPatterns = [
    [0, 1, 2],  
    [3, 4, 5],   
    [6, 7, 8],   
    [0, 3, 6],    
    [1, 4, 7],   
    [2, 5, 8],   
    [0, 4, 8],   
    [2, 4, 6]    
];

const resetGame = ()=>{
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
         

        if(turn0){

            box.classList.add("blue");
            box.innerText="O"; 
            turn0 = false;
        }else{
            box.classList.add("red");
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let showWinner=(winner)=>{
     msg.innerText= `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};


 let checkWinner = ()=>{
    for(let pattern of winPatterns){ 

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val!="" && pos3Val!="") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val)
                disableBtns();
                showWinner(pos1Val);
            }
        }
            
    }
 };
 resetBtn.addEventListener("click", resetGame);
 newGameBtn.addEventListener("click", resetGame);

 