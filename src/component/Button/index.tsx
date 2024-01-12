import React from 'react';
import Ripple from './Ripple';
import { ButtonContiner, ButtonWrap } from './styles/Button.styled';

type ButtonProps = {
    type?: "text" | "contained" | "outlined";
    disabled?: boolean
    animate?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
    ripple?: boolean
    onClick?: () => void 
}

export const Button = ({ type = "contained", style={} , children, ripple, onClick, ...props }: ButtonProps) => {

    const handleOnClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setTimeout(()=> {
            if (onClick) onClick();
        }, 200)
    }

    return (
    <ButtonContiner>
        <ButtonWrap className={type} onClick={handleOnClick} {...props}>
            {ripple ? <Ripple color={"#666"} duration={600} /> : undefined}
            {children}
        </ButtonWrap>
    </ButtonContiner>
    );
};

export default Button
