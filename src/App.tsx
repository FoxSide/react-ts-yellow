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
        <Rating value={5}/>
        <Accordion title={'Menu'} collapsed={true}/>
        <Accordion title={'My friends'} collapsed={false}/>
        Article 2
        <Rating value={2}/>
    </>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}

export default App;
