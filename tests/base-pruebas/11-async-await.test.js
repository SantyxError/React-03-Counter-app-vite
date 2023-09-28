import { getImagen } from '../../src/base-pruebas/11-async-await.js';

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe de retornar un URL de imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string')
    })

    test('getImagen debe de retornar un un error si no tenemos ApiKey', async () => {
        const resp = await getImagen();

        expect( resp ).toBe('No se encontró la imagen')
    })
})
