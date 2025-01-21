import 'react-app-polyfill/ie11';
import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// import ReactDOM = require('react-dom')
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard 
        product={ product }
        initialValues={{
            count: 6,
            // maxCount: 10,
        }}
      >
        {
            ( { reset, increaseBy, count, isMaxCountReached, maxCount } ) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
      </ProductCard>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
