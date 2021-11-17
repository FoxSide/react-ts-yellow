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
        <Accordion title={'Menu'} collapsed={true}/>
        <Accordion title={'Setting'} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
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
