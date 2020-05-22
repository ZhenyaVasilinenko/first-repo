const readline = require('readline');
const myPetModule = require('./module');

const needPet = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choosePet = myPetModule.getRandomPet();
needPet.question(`Are you lonely? `, function(answer) {
    switch (answer.toLowerCase()) {
        case 'yes':
          console.log(answer, `- you should get a ${choosePet.name}`);
          break;
        default:
          console.log(answer, `- you should walk your ${choosePet.name}`);
      }
      needPet.close();
    });