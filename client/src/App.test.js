import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home/Home'
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'



/* describe('Pruebas en <Home />', () => {
    test('<Home /> se renderiza bien', () => {
        const titulo = 'Conoce Todas Nuestras Recetas';
        const jsxHome = shallow(<Home titulo={titulo}/>);
        expect(jsxHome).toMatchSnapshot();
    })

});

 */