var flag=1
while(flag ==1){
let age=prompt("Enter your age")
age=Number.parseInt(age)
if(age>=18){
    alert("You are eligible to drive")
}else if((age<18)&&(age>0)){
    alert("You are not eligible to drive")
}else if(age<0){
    console.error("Enter the valid age")
    break;
}else{
    break;
}
if(age>4){
    location.href="https://www.google.com/"
}
let recheck=confirm("Do you want to see the prompt again")
if(recheck){
    flag =1
}else{
    flag =0
}
}