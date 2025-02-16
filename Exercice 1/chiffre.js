function Difficulty()
{

while(true)
    {
        let choice = prompt("Choose a difficulty 1 , 2 , 3 ");
        if(choice==1)
            return[20,5];
        else if(choice==2)
            return[50,5];
        else if(choice==3)
            return [100,5];
        else alert("Choose number between 1 et 3");
    }    
}
function StartGame()
{alert("Welcome to Random Game !!");
let [Range,attempts]=Difficulty();
let RandomNumber=Math.floor(Math.random()*Range);
let attempt = prompt("Choose a number between 0 and "+Range);
let i=attempts;
let guessed=false;
while(0<i && guessed==false)
{if((attempt>Range)||(attempt<0))
    {
        attempt = prompt("Please choose a number between 0 and 20 !!!!");
        i--;

    }
else{
    if (attempt<RandomNumber)
        {
            attempt = prompt("The number should be bigger");
            i--;
            
        }
    else if (attempt>RandomNumber)
    {
        attempt = prompt("The number should be smaller");
        i--;
        
    }
    else
    {
        alert("Congratulations! YOU WON!!!");
        guessed=true;
        
        
        
    }
}
}
if(guessed=false || i==0){
    alert("You lost : the correct number is "+RandomNumber);
}
let newgame=prompt("New game?? yes or no");
        if(newgame=="yes")
            StartGame();
}

const button=document.getElementById("button");

button.addEventListener("click",StartGame);
    

