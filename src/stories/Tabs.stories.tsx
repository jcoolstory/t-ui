import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "../component/Tabs";
import Tab from "../component/Tab";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {value:0},
  render: (arg) => {
    return (
      <Tabs style={{ width: 200, border: "1px solid black" }} {...arg}>
        <Tab onClick={()=> {console.log("hello")}}>test1</Tab>
        <Tab>test2</Tab>
        <Tab>test3</Tab>
        <Tab>test3</Tab>
        <Tab>test3</Tab>
      </Tabs>
    );
  },
};