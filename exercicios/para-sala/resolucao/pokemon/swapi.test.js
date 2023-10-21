const request = require('supertest');
const api = 'https://swapi.dev/api/';

describe('Testar endpoint da SWAPI', () =>{
    test('deve', async () => {
        const response = await request(api).get('films/1');
        expect(response.body.species).toEqual( [
            "https://swapi.dev/api/species/1/", 
            "https://swapi.dev/api/species/2/", 
            "https://swapi.dev/api/species/3/", 
            "https://swapi.dev/api/species/4/", 
            "https://swapi.dev/api/species/5/"
        ]);
        expect(response.status).toBe(200);

    }, 10000);

    test('deve retornar o nome do personagem ao passar um id de people sem problemas', async () => {
        const response = await request(api).get('people/1');
        expect(response.body.name).toBe("Luke Skywalker");
        expect(response.status).toBe(200);
    }, 10000);

    test('deve checar a data de criacao de um planeta', async () => {
        const response = await request(api).get('planets/12');
        expect(response.body.created).toBe("2014-12-10T12:49:01.491000Z");
        expect(response.status).toBe(200);
    }, 10000);

    test('', async () => {
        const response = await request(api).get('species/');
        expect(response.body.created).toBe("2014-12-10T12:49:01.491000Z");
        expect(response.status).toBe(200);
    }, 10000);
})