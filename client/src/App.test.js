import { render, screen } from '@testing-library/react';
import App from './App';
import Landing from './components/Landing/Landing'
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'



describe('Pruebas en <Landing />', () => {
  test('<Landing /> se renderiza bien', () => {
      const titulo = 'Esto es una Pruaba';
      const jsxLanding = shallow(<Landing titulo={titulo}/>);
      expect(jsxLanding).toMatchSnapshot();
  })

});
/* 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

});
 */