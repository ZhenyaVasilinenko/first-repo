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