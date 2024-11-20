import type { Meta, StoryObj } from "@storybook/react";

import Drawer from "../component/Drawer";
import List from "../component/List";
import ListItem from "../component/ListItem";
import { MouseEvent, useState } from "react";
import SimpleMenu, { SimeMenuItemType } from "../component/SimpleMenu";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Drawer",
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placement: "left",
    children: <List style={{width:"100%", minWidth:"200px", padding:"10px"}}>
      <ListItem style={{borderBottom: "1px solid black", margin: "10px" }}>
        1
      </ListItem>
      <ListItem style={{borderBottom: "1px solid black", margin: "10px" }}>
        2
      </ListItem>
      <ListItem style={{borderBottom: "1px solid black", margin: "10px" }}>
        3
      </ListItem>
    </List>,
  },
  render: (args) => {
    return <Drawer style={{ border: "1px solid black" }} {...args}></Drawer>;
  },
};

const items: SimeMenuItemType[]  = [
  {
    id: "bone",
    name: "Test",
  },
  {
    id: "bone2",
    name: "Test2",
  }
]


const Menu =       <SimpleMenu  padding="10px" items={items} onClickMenu={(e)=>{}} />;

export const Left: Story = {
  args: {
    placement: "top",
    children: Menu,
  },
};

export const Top: Story = {
  args: {
    placement: "top",
    children: Menu,
  },
};

export const Right: Story = {
  args: {
    placement: "right",
    children: Menu,
  },
};

export const Bottom: Story = {
  args: {
    placement: "bottom",
    children: Menu,
  },
};
