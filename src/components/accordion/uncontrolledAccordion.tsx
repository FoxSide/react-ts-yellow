import React, {useState} from "react";

type AccordionPropsType = {
  title: string
  // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

  let [collapsed, setCollapsed] = useState(true)

  return <div>
    <AccordionTitle title={props.title}/>
    <button onClick={() => {
      collapsed ? setCollapsed(false) : setCollapsed(true)
    }}>Toggle
    </button>
    {collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlepropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlepropsType) {
  console.log('AccordionTitle rendered')
  return <h3>{props.title}</h3>
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