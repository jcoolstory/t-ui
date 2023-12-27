import styled from "@emotion/styled";

const ButtonControll = styled.button<{ disabled?: boolean; animate?: boolean}>`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: none;
  &:disabled {
    background: #eee !important;
    color: #999 !important;
    border: none !important;
  }

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ animate }) => animate && ButtonAnimation}
`;

const ButtonAnimation = `
    transition: all 0.2s ease;
    &:active {
        background: #f0f0f0 !important;
        transform: scale3d(0.92, 0.95, 1);
    }
`;

type ButtonProps = {
  type?: "text" | "contained" | "outlined";
  disabled?: boolean
  animate?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: Function
}

const setColor = (css:React.CSSProperties, type:any) => {
    if (type === "text") {
        css.background = "transparent";
        css.color = "#000"
    } else if (type === "contained") {
        css.background = "#0064ff";
        css.color = "#fff"
    } else if (type === "outlined") {
        css.background = "transparent";
        css.border = "2px solid #0064ff";
        css.color = "#000"
    }

    return css;
}

export const Button = ({ type = "contained", style={}, children, onClick, ...props }: ButtonProps) => {
    // const handleClick = () => {
    //     alert("HI");
    // }

    const css = setColor(style, type);

    return (
    <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
    }}>
        <ButtonControll style={css} {...props}>{children}</ButtonControll>
        <ButtonControll {...props} style={css} >{children}</ButtonControll>
    </div>
    );
};

export const ButtonSample = ({ type = "contained", disabled=false, animate=false, style={}, children, onClick }: ButtonProps) => {
    const handleClick = () => {
        alert("HI");
    }

    const css = setColor(style, type);

    return (
    <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
    }}>
        <ButtonControll style={css} onClick={handleClick}>{children}</ButtonControll>
        <ButtonControll style={css} disabled onClick={handleClick}>{children}</ButtonControll>
        <ButtonControll style={css} animate onClick={handleClick}>{children}</ButtonControll>
    </div>
    );
};

export default Button

