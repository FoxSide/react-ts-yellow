import React, {useState} from 'react';
import './App.css';
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/accordion/uncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {Rating, RatingVlueType} from "./components/rating/rating";
import {Accordion} from "./components/accordion/accordion";
// import {UncontroledOnOf} from "./components/UncontroledOnOf/UncontroledOnOf";

function App() {

  let [ratingValue, setratingValue] = useState<RatingVlueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setswitchOn] = useState<boolean>(false);

  return <div className='app'>
    <PageTitle title={'This is APP component'}/>
    <PageTitle title={'My friends'}/>
    <UncontrolledAccordion title={'Menu'}/>
    <UncontrolledAccordion title={'Setting'}/>
    <Accordion title={'123'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
    {/*<h3>Uncontroll :</h3>*/}
    {/*<UncontroledOnOf onChange={setswitchOn}/> {switchOn.toString()}*/}
    <h3>Controll :</h3>
    <OnOf on={switchOn} oneChange={(on) => {(setswitchOn(on))}}/>
    <h3>Uncontroll :</h3>
    <UncontrolledRating/>
    <h3>Controll :</h3>
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
