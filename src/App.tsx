import React from 'react';
import './App.css';
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/accordion/uncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";

function App() {
  return <div>
    <PageTitle title={'This is APP component'}/>
    <PageTitle title={'My friends'}/>
    Arcticle 1
    <UncontrolledAccordion title={'Menu'}/>
    <UncontrolledAccordion title={'Setting'}/>
    Article 2
    <OnOf/>
    <OnOf/>
    <OnOf/>
    <UncontrolledRating/>
    <UncontrolledRating/>
    <UncontrolledRating/>
    <UncontrolledRating/>
  </div>
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendered')
  return <h1>{props.title}</h1>
}

export default App;
