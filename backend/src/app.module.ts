import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [PrismaModule, PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
