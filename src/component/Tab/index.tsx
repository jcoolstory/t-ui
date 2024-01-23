import ListItem, { ListItemProps } from "../ListItem";

export type TabProps = {} & ListItemProps;

export const Tab = ({ ...props }: TabProps) => {
  return <ListItem style={{ padding: "10px" }} {...props} />;
};

export default Tab;