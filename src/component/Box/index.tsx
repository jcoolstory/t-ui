import styled from "@emotion/styled";
const BoxControll = styled.div<BoxProps>`
  background-color: ${(p => p.backgroundColor)};
`;

export type BoxProps = {
  type?: "rect" | "circle";
  width?: string ;
  height?: string ;
  padding?: string;
  margin?: string;
  backgroundColor?: string ;
} & React.HTMLAttributes<HTMLDivElement>;

const Box = ({
  type = "rect",
  style = {},
  width,
  height,
  padding,
  margin,
  ...props
}: BoxProps) => {
  const css = { ...style };
  if (width) css["width"] = width;
  if (height) css["height"] = height;
  if (padding) css["padding"] = padding;
  if (height) css["margin"] = margin;
  if (type === "circle") {
    css["borderRadius"] = "50%";
  }

  return <BoxControll {...props} style={css} />;
};

type RoundBoxProps = {
  radius: string | number;
} & BoxProps;

type CircleBoxProps = {
} & React.HTMLAttributes<HTMLDivElement>;

export const RoundBox = ({ radius = "20px", style, ...props }: RoundBoxProps) => {
  return (
    <BoxControll
      style={{borderRadius: radius, ...style}}
      {...props}
    />
  );
};

export const CircleBox = (props: CircleBoxProps) => {
  return (
    <Box
      type="circle"
      {...props}
    />
  );
};

export default Box;
