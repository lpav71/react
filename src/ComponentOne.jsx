import React, { useState } from 'react';

const ComponentOne = () => {
    const [welcome, setWelcome] = useState("Кнопка");

    const press = (name, age) => {
        console.log(`Name: ${name}  Age: ${age}`);
        alert("Hello React!");
        setWelcome("Спасибо!");
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '800px' }}>
            <h2 style={{ margin: 'auto' }}>Это первый компонент!</h2>
            <input className="form-control" />
            <button className='btn btn-primary mt-3' style={{ width: '100px' }} onClick={() => press("Bob", 23)}>
                {welcome}
            </button>
        </div>
    );
};

export default ComponentOne;
