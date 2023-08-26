let btnA= document.getElementById('A')
let btnB= document.getElementById('B')
let countera= document.getElementsByClassName('countera')[0]
let counterb= document.getElementsByClassName('counterb')[0]
let result=document.getElementsByClassName('result')[0]
A.addEventListener('click',()=>{
    increment('A')
})
B.addEventListener('click',()=>{
    increment('B')
})
function increment(player){

if(player==='A'){
console.log(countera.innerText)
countera.innerText= Number(countera.innerText)+1
if(Number(counterb.innerText)-1<0){
    counterb.innerText=0
}
else{
    counterb.innerText=Number(counterb.innerText)-1
}
if(countera.innerText==10){
result.innerText='A won'
return
}
}
else{
counterb.innerText= Number(counterb.innerText)+1
if(Number(countera.innerText)-1<0){
    countera.innerText=0
}
else{
   countera.innerText=Number(countera.innerText)-1 
}

if(counterb.innerText==10){
result.innerText='B won'
return
}
}
}