import React, {useState} from 'react';
import './App.css';
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/accordion/uncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {Rating, RatingVlueType} from "./components/rating/rating";
import {Accordion} from "./components/accordion/accordion";

function App() {

  let [ratingValue, setratingValue] = useState<RatingVlueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  return <div className='app'>
    <PageTitle title={'This is APP component'}/>
    <PageTitle title={'My friends'}/>
    <UncontrolledAccordion title={'Menu'}/>
    <UncontrolledAccordion title={'Setting'}/>
    <Accordion title={'123'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
    <OnOf/>
    Uncontroll :
    <UncontrolledRating/>
    Controll :
    <Rating value={ratingValue} onClick={setratingValue}/>
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
