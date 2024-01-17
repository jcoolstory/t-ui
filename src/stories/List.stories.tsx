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
    return (
      <List style={{ width: 200, border: "1px solid black" }} {...arg}>
        <ListItem>test1</ListItem>
        <ListItem>test2</ListItem>
        <ListItem>test3</ListItem>
      </List>
    );
  },
};

export const ButtonList: Story = {
  args: {},
  render: (arg) => (
    <List
      style={{ border: "1px solid black" }}
      width="200px"
      padding="20px"
      spacing={20}
      {...arg}
    >
      <ListItem>
        <Button type="text" ripple>
          Text Area
        </Button>
      </ListItem>
      <ListItem>
        {" "}
        <Button type="text" ripple>
          Text Area
        </Button>
      </ListItem>
      <ListItem>
        {" "}
        <Button type="text" ripple>
          Text Area
        </Button>
      </ListItem>
    </List>
  ),
};

export const ImageButton: Story = {
  args: {},
  render: (arg) => {
    return (
      <List
        style={{ border: "1px solid black" }}
        width="200px"
        padding="20px"
        spacing={0}
        {...arg}
      >
        <ListItem>
          <ListItemButton style={{ padding: "5px 0" }}>
            <LoanIcon width="30" height="30" />
            Text Area
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Box padding="20px 0">
            <ListItemButton style={{ padding: "5px 0" }}>
              <MoneyBagIcon width="30" height="30" />
              MoneyBagIcon
            </ListItemButton>
          </Box>
        </ListItem>

        <ListItem>
          <ListItemButton style={{ padding: "5px 0" }}>
            <BackIcon width="30" height="30" />
            ArrowNextIcon
          </ListItemButton>
        </ListItem>
      </List>
    );
  },
};
