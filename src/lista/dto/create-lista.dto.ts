import { IsNotEmpty, IsString } from "class-validator";

export class CreateListaDto {

    @IsNotEmpty()
    @IsString()
    readonly nombre:string;

    @IsNotEmpty()
    @IsString()
    readonly apellido:string;

    @IsNotEmpty()
    @IsString()
    readonly nacionalidad:string;
}
