import React from "react";
import '@testing-library/jest-dom/extend-expect'
import Landing from './Landing'
import { render, fireEvent } from "@testing-library/react";
import  {prettyDom} from '@testing-library/dom'

test('renders content ', () => {

    const landing = {
        content: " La mejor Experiencia Vivela.Conoce las Mejores Recetas Dietas de Alto nivel ",
        important: true
    }
    const component = render(<Landing  landing={landing } />)
 ///pretty dom 
    /* component.container.querySelector('li')
    console.log(prettyDom(li))
 */
  /*   component.getByText('Esto es una prueba ')
    component.getByText('No importante ') */

    /* expect(component.container).toHaveTextContent(landing.content) */
})

test('click button create recipe', () => {

    const landing = {
        content: " La mejor Experiencia Vivela.Conoce las Mejores Recetas Dietas de Alto nivel ",
        important: true
    }

    const mockHandler = jest.fn() // es como un espia 
    const component = render(<Landing  landing={landing} toggleButton={mockHandler} />)
    const button = component.getByText('es importante')
    fireEvent.click(button)

    expect(mockHandler.mock.call)

})
