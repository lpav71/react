import React from 'react';

class ComponentOne extends React.Component {

    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
        this.state = {welcome: "Кнопка"};
    }
    press(name, age){
        console.log(`Name ${name}  Age: ${age}`);
        alert("Hello React!");
        // Изменить текст на кнопке после нажатия
        this.setState({ welcome: "Спасибо!" });
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '800px'}}>
                <h2 style={{margin: 'auto'}}>Это первый компонент!</h2>
                <input className="form-control"/>
                <button className='btn btn-primary mt-3' style={{width: '100px'}} onClick={() => this.press("Bob", 23)}>{this.state.welcome}</button>
            </div>
        );
    }
}
export default ComponentOne;