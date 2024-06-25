import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PokemonsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPokemonDto: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        type: string;
        specialAttack: string;
        legendary: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        type: string;
        specialAttack: string;
        legendary: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        type: string;
        specialAttack: string;
        legendary: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        type: string;
        specialAttack: string;
        legendary: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        type: string;
        specialAttack: string;
        legendary: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
