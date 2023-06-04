import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    category: string

    @IsNotEmpty()
    @IsString()
    imageUrl: string

    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    description: string

    constructor(
        name: string,
        price: number,
        category: string,
        imageUrl: string,
        description: string
    ) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description;
    }


}