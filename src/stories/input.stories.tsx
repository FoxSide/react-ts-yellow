import React, {ChangeEvent, useState} from "react";

export default {
  title: 'input'
}

export const ControlledCheckBox = () => {
  const [parrentVelue, setParrentVelue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParrentVelue(e.currentTarget.checked)
  }
  return (
  <input type={"checkbox"} checked={parrentVelue} onChange={onChange}/>
  )
}
export const ControlledInpuut = () => {
  const [parrentVelue, setParrentVelue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParrentVelue(e.currentTarget.value)
  }
  return (
    <input value={parrentVelue} onChange={onChange}/>
  )
}
export const ControlledCelect = () => {
  const [parrentVelue, setParrentVelue] = useState<string|undefined>(undefined)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParrentVelue(e.currentTarget.value)
  }
  return (
    <select value={parrentVelue} onChange={onChange}>
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kyiev</option>
    </select>
  )
}