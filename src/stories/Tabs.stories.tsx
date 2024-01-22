import type { Meta, StoryObj } from "@storybook/react";

import List from "../component/List";
import ListItem from "../component/ListItem";
import ListItemButton from "../component/Button/ListItemButton";
import { ReactComponent as CreditCardIcon } from "./assets/credit-card.svg";
import { ReactComponent as BackIcon } from "./assets/bank.svg";
import { ReactComponent as MoneyBagIcon } from "./assets/money-bag.svg";
import { ReactComponent as LoanIcon } from "./assets/mortgage-loan.svg";
import { ReactComponent as ArrowNextIcon } from "./assets/arrow-next.svg";
import Button from "../component/Button";
import Box from "../component/Box";
import Tabs, { Tab } from "../component/Tabs";
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
  args: {},
  render: (arg) => {
    return (
      <Tabs style={{ width: 200, border: "1px solid black" }} {...arg}>
        <Tab onClick={()=> {console.log("hello")}}>test1</Tab>
        <Tab>test2</Tab>
        <Tab>test3</Tab>
      </Tabs>
    );
  },
};