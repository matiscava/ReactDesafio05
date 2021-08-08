// import React, {useEffect, useState} from 'react';
// import { render } from '@testing-library/react';
import React from 'react';
import '../estilos.css';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={numero:1, stock:11};
    }

    sumarUno(){
        if(this.state.numero<this.state.stock){
        this.setState({numero: this.state.numero +1})
        }
    }
    restarUno(){
        if(this.state.numero>0){
            this.setState({numero: this.state.numero -1})
        }
    }
    enviarCarrito(){
        this.setState({stock: this.state.stock - this.state.numero});
        if((this.state.stock - this.state.numero)===0){
            this.setState({numero:0})
        }else{
            this.setState({numero:1})
        }
    }
    render(){
        return (
            <div className='contenderoItem'>
                <h3 className='Item'>Billetera</h3>
                <div className='contenedorNumero'>
                    <p className='numeroItem'>{this.state.numero}</p>
                    <div className='contendorSpan'>
                        <span className='spanStock IconoAS-chevron-up'onClick={this.sumarUno.bind(this)}></span>
                        <span className='spanStock IconoAS-chevron-down' onClick={this.restarUno.bind(this)}></span>
                    </div>
                </div>
                <p className='numeroStock'>Stock: {this.state.stock}</p>
                <button className='botonCarrito' onClick={this.enviarCarrito.bind(this)}>Enviar al Carrito</button>
            </div>
            )
        }
}

export default App;

// export default App
