const readline = require('readline');

const choiceCharacter = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function choice() {
    choiceCharacter.question("Escolha seu personagem. \nPressione 1 para guerreiro ou 2 para mago.", (value) => {
        if (value === '1') {
            console.log(`Você escolheu o guerreiro. Ele possui as seguintes características: ${warrior}`);
        } else if (value === '2') {
            console.log(`Você escolheu o mago. Ele possui as seguintes características: ${wizard}`);
        } else {
            console.log('Opção inválida.');
        }

        choiceCharacter.close();
    });
}

// Defina as características do guerreiro e do mago antes de chamar a função choice()
const warrior = "Força, resistência, habilidade com armas.";
const wizard = "Poder mágico, conhecimento arcano, habilidade com feitiços.";

choice();