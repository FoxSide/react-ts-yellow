import React from "react";
import {UncontroledOnOf} from "./UncontroledOnOf";
import {action} from "@storybook/addon-actions";

export  default {
  title: 'UncontroledOnOf',
  component: UncontroledOnOf
}

export const DefoultOn = () => <UncontroledOnOf defoultOn={true} onChange={action('clicked')}/>
export const DefoultOff = () => <UncontroledOnOf defoultOn={false} onChange={action('clicked')}/>