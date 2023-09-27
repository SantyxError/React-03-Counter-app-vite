import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', () => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(true).toBeEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done()
            })
    })

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', () => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).tobeFalsy()
                done()
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
                done()
            })
    })
})
