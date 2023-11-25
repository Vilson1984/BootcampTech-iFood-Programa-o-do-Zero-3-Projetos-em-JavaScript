// set readline necessary to make question for user
const readline = require('readline');

const choiceCharacter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//build class for characters
class Character {
    constructor(name, age, type, strike, defense) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.strike = strike;
        this.defense = defense;
    }

    attack() {
        console.log(`\nO ${this.name} atacou usando ${this.strike}`);
    }

    block() {
        console.log(`\nO ${this.name} defendeu usando ${this.defense}`);
    }
}

//set information about characters
const characters = [
    new Character("Aragorn", 39, "guerreiro", "espada", "escudo"),
    new Character("Gandalf", 85, "mago", "magia", "magia de defesa"),
    new Character("Sheng", 25, "monge", "artes-marciais", "defesa"),
    new Character("Hatori", 25, "ninja", "Shuriken", "bomba de fumaça")
];

//Show Character choosen
function displayCharacterInfo(character) {
    console.log(`\nVocê escolheu o personagem ${character.name}.\nEle possui as seguintes características:\nEle tem ${character.age} anos e sua categoria é ${character.type}.`);
}

//Choice the character
function choice() {
    console.log("Escolha seu personagem:");

    //loop to define the character under var index
    for (let i = 0; i < characters.length; i++) {
        console.log(`Pressione ${i + 1} para escolher ${characters[i].type}`);
    }

    //ask to user a characters's number 
    choiceCharacter.question("\n\nDigite o número correspondente ao personagem desejado:\n", (value) => {
        const index = parseInt(value) - 1;

        if (index >= 0 && index < characters.length) {
            displayCharacterInfo(characters[index]);
        } else {
            console.log("Opção inválida.");
        }

        characters[index].attack()
        choiceCharacter.close();
    });
}

choice();
