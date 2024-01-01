import type { Meta, StoryObj } from "@storybook/react";

import Grid from "../component/Grid";
import Box from "../component/Box";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Grid",
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Grid>;
export const Primary: Story = {
  args: {
    children: "test",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Circle: Story = {
  args: {},
  render: (arg) => {
    return (
        <Grid spacing={10} container width="500px" style={{ border: "1px solid black" }}>
          <Grid xs={8} backgroundColor="red"  {...arg}>test1</Grid>
          <Grid xs={2} backgroundColor="yellow">test2</Grid>
        </Grid>
    );
  },
};
