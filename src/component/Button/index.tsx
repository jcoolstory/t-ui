import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from "@emotion/styled";
import Ripple from './Ripple';

const ButtonContiner = styled.div`
    .text {
        background: transparent;
        color: #000;
    };
    .contained {
        background: #0064FF;
        color: #FFF;
    };
    .outlined {
        background: transparent;
        border: 2px solid #0064FF;
        color: #000;
    };
`

const ButtonControll = styled.button<{disabled?: boolean; animate?: boolean}>`
    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;

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
        transform: scale3d(0.92, 0.95, 1);
    }
`;

type ButtonProps = {
  type?: "text" | "contained" | "outlined";
  disabled?: boolean
  animate?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void 
}

export const Button = ({ type = "contained", style={} , children, onClick, ...props }: ButtonProps) => {

    const handleOnClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setTimeout(()=> {
            if (onClick) onClick();
        }, 300)
    }

    return (
    <ButtonContiner>
        <ButtonControll className={type} onClick={handleOnClick} {...props}>
            <Ripple color={"#666"} duration={600} />
            {children}
        </ButtonControll>
    </ButtonContiner>
    );
};

export default Button
