import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService){}
  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: createPokemonDto,
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  findOne(id: string) {
    return this.prisma.pokemon.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data: updatePokemonDto,
    });
  }

  remove(id: string) {
    return this.prisma.pokemon.delete({
      where: { id },
    });
  }
}
