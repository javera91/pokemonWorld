import { ApiProperty } from "@nestjs/swagger";

export class CreatePokemonDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    specialAttack: string;

    @ApiProperty()
    legendary: boolean;
}

