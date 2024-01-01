import styled from "@emotion/styled";
import Box, { BoxProps } from "../Box";

type GridProps = {
  container?: boolean;
  item?: boolean;
  xs?: number;
  spacing?: number;
} & BoxProps;

const GridControl = styled(Box)<GridProps>`
  display: flex;
  --Grid-columns: 12;
  width: ${(p) => `calc(100% * ${p.xs} / var(--Grid-columns))`};
`;

const Grid = ({
  spacing = 0,
  container = false,
  xs = 12,
  style = {},
  ...props
}: GridProps) => {
  const css = { ...style };
  if (spacing) css["gap"] = spacing;

  return (
    <GridControl
      style={css}
      xs={xs}
      container={container}
      {...props}
    ></GridControl>
  );
};

export default Grid;
