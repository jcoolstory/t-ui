import styled from "@emotion/styled";
import Box, { BoxProps } from "../Box";

const StackControl = styled(Box)`
  display: flex;
`;

type StackProps = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  spacing?: number;
  justifyContent?: string;
  alignItems?: string;
} & BoxProps;

const Stack = ({
  direction = "row",
  spacing = 0,
  justifyContent = "",
  alignItems = "",
  style = {},
  ...props
}: StackProps) => {
  const css = { ...style };
  if (spacing) css["gap"] = spacing;

  if (direction) css["flexDirection"] = direction;

  if (justifyContent) css["justifyContent"] = justifyContent;

  if (alignItems) css["alignItems"] = alignItems;

  return <StackControl style={css} {...props}></StackControl>;
};

export default Stack;
