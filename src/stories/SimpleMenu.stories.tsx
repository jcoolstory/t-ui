import type { Meta, StoryObj } from "@storybook/react";

import SimpleMenu, { SimeMenuItemType } from "../component/SimpleMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "SimpleMenu",
  component: SimpleMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SimpleMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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

export const Primary: Story = {
  args: {items},
  render: (arg) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: SimeMenuItemType) =>{
      alert(item.id);
    }
    return (
      <SimpleMenu {...arg}  onClickMenu={handleClick}  />
    );
  },
};
