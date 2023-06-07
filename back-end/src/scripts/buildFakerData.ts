import { CreateProductDto } from "../models/product/createProduct.dto";
import { ProductRepository } from "../repositories/productRepository";

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const arrayData = [
    {
        name: 'Sabonete',
        price: 2.5,
        category: 'higiene',
        description: 'Sabonete líquido para banho',
        imageUrl: '',
    },
    {
        name: 'Detergente',
        price: 3.0,
        category: 'limpeza',
        description: 'Detergente líquido para lavar louças',
        imageUrl: '',
    },
    {
        name: 'Arroz',
        price: 5.99,
        category: 'cozinha',
        description: 'Arroz branco',
        imageUrl: '',
    },
    {
        name: 'Shampoo',
        price: 8.5,
        category: 'higiene',
        description: 'Shampoo para cabelos',
        imageUrl: '',
    },
    {
        name: 'Amaciante',
        price: 4.99,
        category: 'limpeza',
        description: 'Amaciante de roupas',
        imageUrl: '',
    },
    {
        name: 'Feijão',
        price: 4.5,
        category: 'cozinha',
        description: 'Feijão carioca',
        imageUrl: '',
    },
    {
        name: 'Escova de dentes',
        price: 3.99,
        category: 'higiene',
        description: 'Escova de dentes macia',
        imageUrl: '',
    },
    {
        name: 'Sabão em pó',
        price: 6.99,
        category: 'limpeza',
        description: 'Sabão em pó para lavar roupas',
        imageUrl: '',
    },
    {
        name: 'Óleo de soja',
        price: 4.29,
        category: 'cozinha',
        description: 'Óleo de soja refinado',
        imageUrl: '',
    },
    {
        name: 'Pasta de dentes',
        price: 2.99,
        category: 'higiene',
        description: 'Pasta de dentes com flúor',
        imageUrl: '',
    },
    {
        name: 'Água sanitária',
        price: 2.49,
        category: 'limpeza',
        description: 'Água sanitária com cloro',
        imageUrl: '',
    },
    {
        name: 'Macarrão',
        price: 3.79,
        category: 'cozinha',
        description: 'Macarrão espaguete',
        imageUrl: '',
    },
    {
        name: 'Condicionador',
        price: 7.5,
        category: 'higiene',
        description: 'Condicionador para cabelos',
        imageUrl: '',
    },
    {
        name: 'Sabonete em barra',
        price: 1.99,
        category: 'higiene',
        description: 'Sabonete em barra neutro',
        imageUrl: '',
    },
    {
        name: 'Desinfetante',
        price: 3.79,
        category: 'limpeza',
        description: 'Desinfetante para limpeza geral',
        imageUrl: '',
    },
    {
        name: 'Azeite de oliva',
        price: 9.99,
        category: 'cozinha',
        description: 'Azeite de oliva extra virgem',
        imageUrl: '',
    },
    {
        name: 'Papel higiênico',
        price: 6.49,
        category: 'higiene',
        description: 'Papel higiênico folha dupla',
        imageUrl: '',
    },
    {
        name: 'Sabão em barra',
        price: 2.29,
        category: 'limpeza',
        imageUrl: '',
    },
];




async function generateData() {
    try {

        const productRepository = new ProductRepository(prisma);
        for (let data of arrayData) {

            await productRepository.createProduct(data as CreateProductDto)

        }

        console.log('Dados gerados e inseridos no banco de dados com sucesso!');
    } catch (error) {
        console.error('Erro ao gerar e inserir dados no banco de dados:', error);
    }
}

generateData();