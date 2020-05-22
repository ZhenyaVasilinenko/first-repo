// const readline = require('readline');

// const whatColor = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// whatColor.question('What color do you choose? ', function(answer) {
// //   console.log(`Thank you for your choose: ${answer}`);
//   whatColor.close();
//     return answer;
// });

// module.exports = whatColor;
class Pet {
    constructor(name) {
      this.name = name;
    }
  }

  const pets = [
    new Pet('dog'),
    new Pet('cat')
  ];
  exports.getRandomPet = () => {
    return pets[Math.floor(Math.random() * pets.length)];
  }
  exports.pets = pets;