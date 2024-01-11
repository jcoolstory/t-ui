import type { Meta, StoryObj } from "@storybook/react";

import Stack from "../component/Stack";
import Box from "../component/Box";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Stack",
  component: Stack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {},
  render: (arg) => {
    return <Stack style={{ border: "1px solid black" }} {...arg}>
      <Box backgroundColor="red">test1</Box>
      <Box backgroundColor="blue">test2</Box>
      <Box backgroundColor="yellow">test3</Box>
    </Stack>;
  },
};
