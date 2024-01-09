import styled from "@emotion/styled";
import Stack, { StackProps } from "../Stack";

export type ListProps = {
} & StackProps;

const ListContainer = styled.ul`
    display: flex;
    padding: 0;
    list-style-type: none;
    margin: 0;
`;

const List = ({children, ...props}: ListProps) => {
    return <ListContainer >
        <Stack {...props} direction="column">
            {children}
        </Stack>
    </ListContainer>
}

export default List;