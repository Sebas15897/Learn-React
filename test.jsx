// functional components
//props son aquellos valores que puedes colocar cuando tienes propiedades que se pasan de padre a hijo
function HelloWorld(props) {
    return <h1>Hello, {props.name}</h1>
}

<HelloWorld name="Sebastián Contereas"/>


const Saludo = ({ name }) => (
<div>
    <h1>Saludo, {props.name}</h1>;
</div>
)

const props = {
    name: "Sebastián",
    lastName: "Contreras"
}


//class component 

class Welcome extends React.Components {
    render() {
        return <h1>Welcome, {this.props.name}</h1>;
    }
}

//cada uno de los componentes pueden ser utilizados con etiquetas

function MainComponent () {
    return(
    <div>
        <div>
            <img />
            <p>UserName</p>
        </div>
        <div>
            <h2>Form</h2>
            <label>
                Input one
                <input type="text" name="inputOne" />
            </label>
            <label>
                <input type="text" name="inputTwo" />
            </label>
            <label>
                <input type="text" name="inputThree" />
            </label>
            <label>
                <input type="text" name="inputFour" />
            </label>
        </div>
        <div>
            <p>Erros</p>
        </div>
        <footer>
            <p>Some paragraph</p>
            <div>Some logos</div>
        </footer>
    </div>
    );
}

function MainElements() {
    return (
        <div>
            <Header />
            <Form />
            <Erros />
            <Footer />
        </div>
    );
}

function Header() {
    return(
        <div>
            <img />
            <p>UserName</p>
        </div>
    );
}

function Form() {
    return(
        <div>
            <h2>Form</h2>
            <label>
                Input one
                <input type="text" name="inputOne" />
            </label>
            <label>
                <input type="text" name="inputTwo" />
            </label>
            <label>
                <input type="text" name="inputThree" />
            </label>
            <label>
                <input type="text" name="inputFour" />
            </label>
        </div>
    );
}

function Erros() {
    return(
        <div>
            <p>Erros</p>
        </div>
    );
}

function Footer() {
    return(
        <div>
        <footer>
            <p>Some paragraph</p>
            <div>Some logos</div>
        </footer>
    </div>
    );
}

//las propiedades son aquellos datos que pueden ser enviados de padres a hijos

/**
 * 
 * 
 *  States React.js
 * 
 */

function Mycomponent(){
    const name = "Sebastián";
    return (
        <div>{'Hola ${name}'}</div>
    );
}

class MyClassComponent extends React.Component {
    render() {
        const name = "Sebastián";
        return (
            <div>{'Hola ${name}'}</div>
        );
    }
}


//Como se cambiaria

function MyInpyt() {
    let myValue;

    return (
        <input type="text" value={myValue}/>
    );
}

/**
 * EL estado es una variable que tiende a cambiar si el componente lo pide. El cambiarlo significa
 * volver a renderizar el componente para actualizarlo. EL virtual DOM es actualizado y el usuario los
 * ve reflejados inmediatamente
 */

/**
 * useState
 */

import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Sebastián Contreras");

    return (
        <div>{'hola ${name}'}</div>
    );
}

//correcto
const [name, setName] = useState("Sebastián COntreras");
