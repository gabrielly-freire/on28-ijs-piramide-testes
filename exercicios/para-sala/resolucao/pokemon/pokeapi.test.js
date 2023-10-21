const request = require('supertest');
const api = "https://pokeapi.co/api/v2";

describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar um personagem ao passar um NOME do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/ditto');
        expect(response.body.id).toBe(132);
        expect(response.status).toBe(200);
    });

    test('deve retornar um personagem ao passar um ID do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/90');
        expect(response.body.name).toBe('shellder');
        expect(response.status).toBe(200);
    });

    test('deve retornar a ordem de um personagem ao passar um ID do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/90');
        expect(response.body.order).toBe(145);
        expect(response.status).toBe(200);
    });

    test('deve retornar o tipo de um personagem ao passar um ID do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/90');
        expect(response.body.types[0].type.name).toBe("water");
        expect(response.status).toBe(200);
    });

    test('deve retornar o tipo de um personagem ao passar um ID do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/90');
        expect(response.body.weight).toBe(40);
        expect(response.status).toBe(200);
    });

})