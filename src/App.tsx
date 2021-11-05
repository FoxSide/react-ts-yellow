import React from 'react';
import './App.css';

function App() {
    console.log('App rendered')
    return <>
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
    </>
}

function AppTitle() {
    console.log('AppTitle rendered')
    return <div>This is APP component</div>
}

function Rating() {
    console.log('Rating rendered')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendered')
    return <div>star</div>
}

function Accordion() {
    console.log('Accordion rendered')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>)
}

function AccordionTitle() {
    console.log('AccordionTitle rendered')
    return <h3>Меню</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default App;
