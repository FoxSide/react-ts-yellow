import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/accordion";
import {Rating} from "./components/rating/rating";

function App() {
    console.log('App rendered')
    return <>
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Arcticle 1
        <Rating value={2}/>
        <Accordion title={'Меню 1'}/>
        <Accordion title={'Меню 2'}/>
        Article 2
        <Rating value={5}/>
    </>
}

function PageTitle(props: any) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}

export default App;
