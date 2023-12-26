import styled from "@emotion/styled";

const BoxControll = styled.div<{ primary?: boolean; disabled?: boolean }>`
  height: 100px;
  width: 100px;
  border: 1px solid ${(props) => (props.primary ? "blue" : "black")};
`;

type BoxProps = {
  type?: "rect" | "round" | "circle";
  primary?: boolean
  style?: React.CSSProperties;
  children?: React.ReactNode
} 
const Box = ({ type = "rect", children, primary }: BoxProps) => {
    let css: React.CSSProperties = {

    }

    if (type === "circle") {
        css.borderRadius = "50%";
    } else if (type === "round") {
        css.borderRadius = "15px"
    }
  return (
    <>
      <BoxControll style={css} primary={primary}>{children}</BoxControll>
    </>
  );
};

type RoundBoxProps = {
  radius: string;
};

export const RoundBox = ({ radius="20px" }: RoundBoxProps) => {
  return <Box type="round" style={{ border:"1px solid black", borderRadius: radius }}></Box>;
};

export const BoxSample = () => {
  return (
    <>
      <BoxControll disabled>stack</BoxControll>
      <BoxControll primary>stack</BoxControll>
    </>
  );
};
export default Box;
