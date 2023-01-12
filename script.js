let playernames=document.getElementsByTagName("input")
let btns= document.getElementsByClassName("rollbutn")
let score = document.querySelectorAll("span")
let winbtn = document.getElementById("winner")
let winnername = document.querySelector("p");

winbtn.disabled=true;

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",()=>{rolldices(btns[i].id)})
}


let btnclick=0;

function rolldices(btnid)
{
    btnclick++;

    if( btnclick==5){winbtn.disabled=false;}
    btns[btnid].disabled = true;

    let arr=['1','2','3','4','5','6']

    let randomindex= Math.floor(Math.random()*6)
    let randomdice= arr[randomindex]
    
    score[btnid].innerText=randomdice;
}

winbtn.addEventListener("click",declareWinner)

function declareWinner(){

let max= 0;
for(let x of score)
{
    if(x.innerText>max)
    {
        max=x.innerText
    }
}
console.log(max)
//now find all those who have highest score
let winnerList=[];

for(let i =0;i<score.length;i++)
{
    if(score[i].innerText===max)
    {
        winnerList.push(i)
    }
}

let names=""

for(let N of winnerList)
{
    names= names + " " + playernames[N].value
}
winnername.innerText=names+ " won the game"
}
