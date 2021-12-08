import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: (collapsed: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
}
type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}
type ItemType = {
  title: string
  value: any
}


export function Accordion(props: AccordionPropsType) {
  return <div>
    <AccordionTitle title={props.title} onClick={props.onChange} collapsed={props.collapsed}/>
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
  </div>
}

type AccordionTitlepropsType = {
  title: string
  collapsed: boolean
  onClick: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlepropsType) {
  return <h3 onClick={() => {
    props.onClick(!props.collapsed)
  }}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <>
      <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
      </ul>
    </>
  )
}
