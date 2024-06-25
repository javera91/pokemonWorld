// Seed script to populate the database with Pokémon data
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const pokemons = [
    {
      name: 'Pikachu',
      type: 'Electric',
      specialAttack: 'Thunderbolt',
      legendary: false,
    },
    {
      name: 'Charizard',
      type: 'Fire/Flying',
      specialAttack: 'Flamethrower',
      legendary: false,
    },
    // Add more Pokémon as needed
  ];

  for (const pokemon of pokemons) {
    await prisma.pokemon.create({
      data: pokemon,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
