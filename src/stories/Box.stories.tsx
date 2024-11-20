import type { Meta, StoryObj } from "@storybook/react";

import Box, { CircleBox, RoundBox } from "../component/Box";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Box",
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "test",
  },
};

export const Secondary: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    style: {
    },
  },
};

export const Small: Story = {
  args: {},
};

export const Round: Story = {
  args: {},
  render: () => {
    return <RoundBox radius={15} >Round</RoundBox>;
  },
};

export const Circle: Story = {
  args: {},
  render: () => {
    return <CircleBox style={{ border: "1px solid black" }}>circle</CircleBox>;
  },
};
