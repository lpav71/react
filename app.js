import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт CSS Bootstrap
import 'bootstrap'; // Импорт JS Bootstrap

import ComponentOne from './src/ComponentOne';
import ComponentTwo from './src/ComponentTwo';

const App = () => {
    const welcome = "Кнопка";

    return (
        <div>
            <h1 className='mb-3' style={{ margin: '20px auto', width: '642px' }}>
                Простой проект с React и Webpack
            </h1>
            <hr />
            <ComponentOne />
            <ComponentTwo />
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);



