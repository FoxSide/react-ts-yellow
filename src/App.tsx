import React, {useState} from 'react';
import './App.css';
import {OnOf} from "./components/OnOf/OnOf";
import {Rating, RatingVlueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {Select} from "./components/select/Select";

// import {UncontroledOnOf} from "./components/UncontroledOnOf/UncontroledOnOf";

function App() {

  let [ratingValue, setratingValue] = useState<RatingVlueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setswitchOn] = useState<boolean>(false);
  let [selectColl, setselectColl] = useState<boolean>(true)
  let [value, setValue] = useState('Select a value')

  const items = [
    {title: 'Message', value: 1},
    {title: 'Settings', value: 2},
    {title: 'News', value: 3},
    {title: 'Long text tests', value: 4}
  ]

  return <div className='app'>
    <PageTitle title={'This is APP component'}/>
    <PageTitle title={'My friends'}/>
    <Accordion title={'Menu'}
               collapsed={accordionCollapsed}
               onChange={setAccordionCollapsed}
               items={items}
               onClick={(value) => alert(value)}
    />
    <OnOf on={switchOn} oneChange={(on) => {
      (setswitchOn(on))
    }}/>
    <Rating value={ratingValue} onClick={setratingValue}/>
    <Select value={value}
            onChange={setselectColl}
            collapsed={selectColl}
            items={items}
            onClick={(item) => {setValue(item)}}

    />
  </div>
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
