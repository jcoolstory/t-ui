import styled from "@emotion/styled";
import Box, { BoxProps } from "../Box";

export type StackProps = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  spacing?: number;
  justifyContent?: string;
  alignItems?: string;
} & BoxProps;

const StackControl = styled(Box)<StackProps>`
  display: flex;
  flex-direction: ${(p => p.direction)};
  justify-content: ${(p => p.justifyContent)};
  align-items: ${(p => p.alignItems)};
`;

const Stack = ({
  spacing = 0,
  style = {},
  ...props
}: StackProps) => {
  const css = { ...style };

  if (spacing) css["gap"] = spacing;
  return <StackControl style={css} {...props}></StackControl>;
};

export default Stack;
