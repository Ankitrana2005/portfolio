let userscore=0;

let compscore=0;

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const gencompchoice =()=>{
    const options =["rock", "paper", "scissors"]; 
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawgame=()=>{
     
    msg.innerText="game was draw. play again";
    msg.style.backgroundColor="darkblue";
}
 const showwinner=(userwin, userchoice,compchoice)=>{
    if (userwin){
        userscore++;
        userscorepara.innerText=userscore; 
        
        msg.innerText=`you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        
        msg.innerText=`you lose ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="red"; 
    }
 }



const playgame=(userchoice)=>{
    
    const compchoice=gencompchoice();
    
if (userchoice === compchoice){
    drawgame();}
    else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin=compchoice === "paper" ?false:true; 
        }else if (userchoice==="paper"){
          userwin=  compchoice==="scissors"?false:true;
        } else {
           userwin= compchoice==="rock"? false:true;
        }
    showwinner(userwin,userchoice,compchoice);
 }
    
};


choices.forEach ((choice)=>{
    // console.log(choice);
    choice.addEventListener("click" ,()=>{
        const userchoice= choice.getAttribute("id")
        playgame(userchoice);

    })
})
