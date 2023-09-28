import { getImagen } from '../../src/base-pruebas/11-async-await.js';

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe de retornar una imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string')
    })
})
