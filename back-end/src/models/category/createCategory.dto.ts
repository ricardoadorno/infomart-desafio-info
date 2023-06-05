import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    name: string

    constructor(
        name: string,
    ) {
        this.name = name;
    }


}