import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard } from "../../src/components/ProductCard";
import { product1 } from "../data/products";

// const { act } = renderer;

describe('ProductCard', () => {

    test('Debe de mostrar el compoente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(1) }></button>
                        </>
                    )
                }
            </ProductCard>
        ).toJSON();

        let tree = wrapper;
        expect( tree ).toMatchSnapshot();
        
        // act( () => {
        //     (tree as any).children[2].this.props.onClick();
        // })

        // tree = wrapper;

        // expect( (tree as any).chidren[1].children[0] ).toBe('1');
    })
    
})
