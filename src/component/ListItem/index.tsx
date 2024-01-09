import styled from "@emotion/styled";
import React from "react";

export type ListItemProps = {
  element?: "div" | "button" | "a";
} & React.HTMLAttributes<HTMLDivElement>;

const ListContainer = styled.li``;

const ListItem = ({ element = "div", children, ...props }: ListItemProps) => {
  return (
    <ListContainer>
      {React.createElement(element, props, children)}
    </ListContainer>
  );
};

export default ListItem;
