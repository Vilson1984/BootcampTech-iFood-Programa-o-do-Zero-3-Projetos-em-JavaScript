//Calculator rank matches

//Setting var
let quantitiesWin = 101;
let quantitiesLoss = 0;
let result;
let level;
const wins =[9, 20, 50, 80, 90, 100, 101]
const categories = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

//setting function which return a balance between wins and loss
function balance(quantitiesWin, quantitiesLoss) {
   result = quantitiesWin - quantitiesLoss;
   return result;
}
result = balance(quantitiesWin, quantitiesLoss)

//loop for, which set the heroe's categorie
for (let index=0; index < wins.length; index++){
    if (result <= wins[index]){
        level = categories[index]
        break
    }
}

//Print the result balance and heroe's categorie 
console.log(`O Herói tem de saldo de ${result} está no nível de ${level}`);