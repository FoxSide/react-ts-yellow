import React from "react";
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
  collapsed: boolean
  onClick: (value: any) => void
}


export const Select = (props: SelectPropsType) => {
  const onClickHandler = () => props.onChange(!props.collapsed)
  const buttonItem = props.collapsed ? '▼' : '▲'
  return (
    <div className={s.wrapp}>
      <div className={s.title} onClick={onClickHandler}>
        <h3>{props.value}</h3>
        <div className={s.button}>{buttonItem}</div>
      </div>
      <div className={s.items} onClick={onClickHandler}>
        {!props.collapsed && props.items.map(i => <div key={i.value} className={s.item} onClick={() => props.onClick(i.title)}>{i.title}</div>)}
      </div>
    </div>
  )
}