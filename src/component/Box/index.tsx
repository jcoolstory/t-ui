import styled from "@emotion/styled";
import { ReactHTMLElement } from "react";

const BoxControll = styled.div``;

export type BoxProps = {
  type?: "rect" | "round" | "circle";
  width?: string ;
  height?: string ;
  padding?: string;
  margin?: string;
  max?: boolean;
  backgroundColor?: string ;
} & React.HTMLAttributes<HTMLDivElement>;

const Box = ({
  type = "rect",
  style = {},
  backgroundColor=undefined,
  width,
  height,
  padding,
  margin,
  max=false,
  ...props
}: BoxProps) => {
  const css = { ...style };
  if (width) css["width"] = width;
  if (height) css["height"] = height;
  if (padding) css["padding"] = padding;
  if (height) css["margin"] = margin;
  if (backgroundColor) css["backgroundColor"] = backgroundColor

  return <BoxControll {...props} style={css} />;
};

type RoundBoxProps = {
  radius: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

type CircleBoxProps = {
  radius?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

export const RoundBox = ({ radius = "20px", ...props }: RoundBoxProps) => {
  return (
    <Box
      type="round"
      style={{ border: "1px solid black", borderRadius: radius }}
      {...props}
    />
  );
};

export const CircleBox = ({ radius = "50%", ...props }: CircleBoxProps) => {
  return (
    <Box
      type="circle"
      {...props}
      style={{ border: "1px solid black", borderRadius: "50%" }}
    />
  );
};

export default Box;
