import React from "react";

type PropsType = {
  on: boolean
  oneChange: (on: boolean) => void
}



export function OnOf(props: PropsType) {

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    margin: '2px',
    backgroundColor: props.on ? 'green' : 'white'
  }
  const ofStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    margin: '2px',
    backgroundColor: !props.on ? 'red' : 'white'

  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.on ? 'green' : 'red'
  }
  return (
    <div>
      <div style={onStyle} onClick={() => {props.oneChange(true)}}>On</div>
      <div style={ofStyle} onClick={() => {props.oneChange(false)}}>Off</div>
      <div style={indicatorStyle}/>
    </div>
  )
}