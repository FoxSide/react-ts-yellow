import React, {useState} from "react";
import {OnOf} from "./OnOf";
import {action} from "@storybook/addon-actions";

export default {
  title: 'OnOf',
  component: OnOf
}

export const OnMode = () => <OnOf on={true} oneChange={action('clicked')}/>
export const OffMode = () => <OnOf on={false} oneChange={action('clicked')}/>
export const ChengeMode = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOf on={value} oneChange={value => setValue(value)}/>
}
