import styled from "@emotion/styled";
import Box, { BoxProps } from "../Box";

type StackProps = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  spacing?: number;
  justifyContent?: string;
  alignItems?: string;
} & BoxProps;

const Stack = styled(Box)<StackProps>`
  display: flex;
  flex-direction: ${(p => p.direction)};
  gap: ${(p => p.spacing)};
  justify-content: ${(p => p.justifyContent)};
  align-items: ${(p => p.alignItems)};
`;


export default Stack;
