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
//# sourceMappingURL=seed.js.map