///Calculadora de partidas Rankeadas///
console.log("Name: Rolls Royce")
let WinpointA = 130
let LosspointB = 75
let result = calculator()
function calculator(){
    let ranking = WinpointA - LosspointB
    return ranking
}

let i = result
if(i <= 10){
    console.log("The Hero is at the Iron Level with a total wins: " + result)
}else if(i <= 20){
    console.log("The Hero is at the Bronze Level with a total wins: " + result)
}else if(i <= 50){
    console.log("The Hero is at the Silver Level with a total wins: " + result)
}else if(i <= 80){
    console.log("The Hero is at the Gold Level with a total wins: " + result)
}else if(i <= 90){
   console.log("The Hero is at the Diamond Level with a total wins: " + result)
}else if(i <= 100){
    console.log("The Hero is at the Legendary Level  with a total wins: " + result)
}else{
    console.log("The Hero is at the Immortal Level  with a total wins: " + result)
}
