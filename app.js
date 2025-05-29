let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".resetbtn")
let newgamebtn= document.querySelector(".newbtn")
let conatiner2=document.querySelector(".container2")
let msg=document.querySelector("#msg")
let turnO= true;//playerx playero


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5], 
    [6,7,8]  
]
const resetgame=()=>{
    turnO=true;
    enableboxes();
    conatiner2.classList.add("hide");
}  
boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
          
        if(turnO){
            turnO=false
            box.innerText=("X")
            box.classList.add("O-color")
        }else{
            box.innerText=("O")
            turnO=true;
            box.classList.add("X-color")
        }
        box.disabled=true;

        checkWinner();
    });
});
const showinner=(winner=>{
    msg.innerText=`congratulations , winner is ${winner}`;
    conatiner2.classList.remove("hide")
    disableboxes();
})

const disableboxes=()=>{
    for (let box of boxes ){
        box.disabled=true;
    }
    
}
const enableboxes=()=>{
    for (let box of boxes ){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("X-color","O-color")
    }
    
}
const checkWinner =()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if ( pos1val != "" && pos2val != "" && pos3val !=""){
            if ( pos1val === pos2val && pos2val ===pos3val){
                
                showinner(pos1val);

            }
        }

    }
    
};


newgamebtn.addEventListener("click",resetgame )
resetbtn.addEventListener("click",resetgame )

