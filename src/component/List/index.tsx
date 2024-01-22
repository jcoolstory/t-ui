import styled from "@emotion/styled";
import Stack, { StackProps } from "../Stack";
import { ListContainer } from "./styles";

export type ListProps = {} & StackProps;

const List = ({ children, ...props }: ListProps) => {
  return (
    <ListContainer>
      <Stack direction="column"  {...props}>
        {children}
      </Stack>
    </ListContainer>
  );
};

export default List;
