import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateProductDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    name: string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    category: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    imageUrl: string

    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    description: string

    constructor(
        name: string | undefined,
        price: number | undefined,
        category: string | undefined,
        imageUrl: string | undefined,
        description: string | undefined,
    ) {
        name != undefined && (this.name = name);
        price != undefined && (this.price = price);
        category != undefined && (this.category = category);
        imageUrl != undefined && (this.imageUrl = imageUrl);
        description != undefined && (this.description = description);
    }
}