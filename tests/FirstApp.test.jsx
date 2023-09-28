import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp/>', () => {

  test('debe de hacer match con el snapshot', () => {

    /*     const title = 'Hola, Soy Goku'
        const { container } = render(<FirstApp title={title} />)
    
        expect(container).toMatchSnapshot() */

  })

  test('debe de mostrar el titulo en un h2', () => {

    const title = 'Hola, Soy Goku'
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
    expect(getByText(title)).toBeTruthy()

    /*    const h2 = container.querySelector('h2')
       expect(h2.innerHTML).toContain(title); */

    expect(getByTestId('test-title').innerHTML).toContain(title)

  })

  test('debe de mostrar el subtitulo enviado por props', () => {

    const title = 'Hola, Soy Goku'
    const subtitle = 'Hola, Soy un subtitulo'
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subtitle}
      />
    )
    expect(getAllByText(subtitle).length).toBe(2)

  })
})