import React from "react";
const ReactTestRenderer = require('react-test-renderer');
import { ProductTitle } from "../src/components/ProductTitle";

describe('ProductTitle', () => {
    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wraper = ReactTestRenderer.create(
            <ProductTitle title="Custom Product" />
        )
        expect( wraper.toJSON ).toMatchSnapshot();
    })
})