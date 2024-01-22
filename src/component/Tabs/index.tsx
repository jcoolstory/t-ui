import styled from "@emotion/styled";
import Stack, { StackProps } from "../Stack";
import List, { ListProps } from "../List";
import ListItem from "../ListItem";
import React from "react";

export type TabsProps = {
  onChangeTab?: any;
} & ListProps;

const Tabs = ({ children, onChangeTab, ...props }: TabsProps) => {
  const handleClick = (index: number) => (event: any) => {
    if (onChangeTab) {
      onChangeTab(event, index);
    }
  };
  const re = React.Children.map(children, (v: React.ReactNode, i) => {
    console.log(v, typeof v);
    return <div onClick={handleClick(i)}>{v}</div>;
  });
  return <List direction="row">{re}</List>;
};

export const Tab = ({ ...props }: TabsProps) => {
  return <ListItem {...props} />;
};

export default Tabs;
