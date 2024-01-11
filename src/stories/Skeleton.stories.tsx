import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "../component/Skeleton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    variant: "round",
    width: "100px",
    height: "100px"
  },
  render: (arg) => {
    return <Skeleton {...arg}/>;
  },
};


export const Rect: Story = {
  args: {
    variant: "rect",
    width: "200px",
    height: "20px"
  },
  render: (arg) => {
    return <Skeleton {...arg}/>;
  },
};

export const Circle: Story = {
  args: {
    variant: "circular",
    width: "200px",
    height: "200px"
  },
  render: (arg) => {
    return <Skeleton {...arg}/>;
  },
};


export const Round: Story = {
  args: {
    variant: "round",
    width: "200px",
    height: "200px",
    radius: 20
  },
  render: (arg) => {
    return <Skeleton {...arg}/>;
  },
};
