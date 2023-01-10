let names=document.getElementsByTagName("input")
let btns= document.getElementsByClassName("rollbutn")
let score = document.querySelectorAll("span")
let winnerbtn =document.getElementById("winner")
let winnername = document.getElementsByClassName("output");

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",()=>{rolldices(btns[i].id)})
}
function rolldices(btnid)
{
    btns[btnid].disabled = true;

    let arr=['1','2','3','4','5','6']

    let randomindex= Math.floor(Math.random()*6)
    let randomdice= arr[randomindex]
    
    score[btnid].innerText=randomdice;
}