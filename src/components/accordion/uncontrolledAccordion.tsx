import React, {useReducer, useState} from "react";

type AccordionPropsType = {
  title: string
}
type ActionType = {
  type: string
}

const reducer = (state: boolean, action: ActionType) => {
  if (action.type === 'toggle-collapsed') {
    return !state
  }
  return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {

  // const [collapsed, setCollapsed] = useState(true)
  const [collapsed, dispatch] = useReducer(reducer, false)

  return <div>
    <AccordionTitle title={props.title} onClick={() => {dispatch({type: 'toggle-collapsed'})}}/>
    {collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlepropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlepropsType) {
  return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}


function AccordionBody() {
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