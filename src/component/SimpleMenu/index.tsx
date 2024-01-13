import Stack, { StackProps } from "../Stack";
import { ListContainer } from "../List/styles";
import ListItem from "../ListItem";
import { useCallback } from "react";
import React from "react";

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type MenuClickEvent = {
  e: Event, item: SimeMenuItemType
}
export type SimpleMenuProps = {
  items: SimeMenuItemType[];
  itemsStyle? : React.CSSProperties;
  onClickMenu: (e: Event, item: SimeMenuItemType) => void;
} & StackProps;

export type SimeMenuItemType = {
  id: string;
  name: string;
  icon?: React.ReactNode | string;
  node?: React.ReactNode
};

const MemoListItem = React.memo(ListItem);

const SimpleMenu = ({ items, itemsStyle, onClickMenu, ...props }: SimpleMenuProps) => {

  const handleClick = useCallback( (item: SimeMenuItemType) => (event: Event) => {
      if (onClickMenu) onClickMenu(event, item);
  }, [onClickMenu, items]);

  return (
    <ListContainer>
      <Stack {...props} direction="column">
        {items.map((item) => {
          return (
            <MemoListItem
              style={itemsStyle}
              onClick={handleClick(item)}
              key={item.id}
            >
              { item.node ? item.node : item.name}
            </MemoListItem>
          );
        })}
      </Stack>
    </ListContainer>
  );
};

export default SimpleMenu;
