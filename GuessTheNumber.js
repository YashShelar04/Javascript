let realNumber = 97
let chances = 0
let flag = 0

do{
var guess=prompt("Guess the number from 1 to 100")
  if(guess==realNumber){
    victory()
    flag =2
  }else if((guess>0)&&(guess<=100)){
    nextChance()
    flag =1
  }else{
     flag=-1
    break;
  }
}while((chances<100)&&(flag !=2))

if(flag==1){
  alert("You lose\nGame Over")
}

function victory(){
  alert(`Your answer is right, answer is ${realNumber}\nYour score is ${100-chances}`)
}

function nextChance(){
  alert("Your answer is wrong")
  if(guess<realNumber){
    alert("Your answer is lesser than the correct answer")
  }else if(guess>realNumber){
    alert("Your answer is greater than the correct answer ")
  }
  ++chances
}