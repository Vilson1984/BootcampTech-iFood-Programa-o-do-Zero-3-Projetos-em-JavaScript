// software at JS to define heroe's level 

// Setting var with heroe's information
let name = "Aragorn" 
let xpHeroe = 1500;
let heroeLevel;

// Setting const at arrays of values and categories 
const xpLevel = [1000, 2000, 5000, 7000, 8000, 9000, 10000]
const xpCategory = ["Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

// Loop to identify xpDoHeroes and heroes's level 
for (let index = 0; index < xpLevel.length; index++) {
    if (xpHeroe <= xpLevel[index]) {
        heroeLevel = xpCategory[index]
        break
    }
}

//Print name and Heroes's level
console.log(`O Herói de name ${name} está no nível de ${heroeLevel}`);