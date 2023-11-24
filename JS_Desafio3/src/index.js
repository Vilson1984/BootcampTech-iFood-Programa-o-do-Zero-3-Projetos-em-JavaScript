//Writing classes's Game


//
const readline = require('readline');

const choiceCharacter = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//building class characters
class character {
    constructor(name, age, type, strike, defese) {
        this.name = name
        this.age = age
        this.type = type
        this.strike = strike
        this.defese = defese
    }

    attack() {
        console.log(`O ${this.name} atacou usando ${this.strike}`)
    }

    block() {
        console.log(`O ${this.name} defendeu usando ${this.defese}`)
    }
}

//set characters
let warrior = new character("Aragorn", 39, "guerreiro", "espada", "escudo")
let wizard = new character("Gandalf", 85, "mago", "magia", "magia de defesa")


//priting characters
//console.log(warrior, wizard)


//Choice the character
function choice() {

 
    choiceCharacter.question("Escolha seu personagem. \nPressione 1 para guerreiro ou 2 para mago.\n\n", (value) => {

        if (value === "1") {
            console.log(`Você escolheu o personagem ${warrior.name}.\n Ele possui as seguintes características: \nEle têm ${warrior.age} anos e sua categoria é ${warrior.type}.`)
                
            warrior.attack()
            warrior.block()

        } else if (value === "2"){
            console.log(`Você escolheu o personagem ${wizard.name}.\n Ele possui as seguintes características: \nEle têm ${wizard.age} anos e sua categoria é ${wizard.type}.`)
            wizard.attack()
            wizard.block() 
        } else {
            console.log("Opção inválida.")
        }
 
        choiceCharacter.close();
  
    });
 
  
}


choice()

//character.attack()
