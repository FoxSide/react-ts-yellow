import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Accordion',
  component: Accordion
}

export const AccordionCollapsed = () => <Accordion title={'Users'} collapsed={true} onClick={action('q')}/>
export const AccordionUnCollapsed = () => <Accordion title={'Users'} collapsed={false} onClick={action('q')}/>
export const AccordionChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion title={'Users'} collapsed={value} onClick={setValue}/>
}