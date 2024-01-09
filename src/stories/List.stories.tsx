import type { Meta, StoryObj } from "@storybook/react";

import List from "../component/List";
import ListItem from "../component/ListItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "List",
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {},
  render: (arg) => {
    return <List style={{ border: "1px solid black" }} {...arg}>
      <ListItem >test1</ListItem>
      <ListItem >test2</ListItem>
      <ListItem >test3</ListItem>
    </List>;
  },
};
