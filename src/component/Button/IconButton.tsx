import React from "react";
import styled from "@emotion/styled";
import Button, { ButtonProps } from ".";

const IconButtonWrap = styled.span<{gap?: number}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    padding: 5px 3px;
    gap: ${(props) => props.gap}px;
`

type IconButtonTypes = {
    width?: string | number;
    height?: string | number;
    color?: string;
    gap?: number;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    style?: React.CSSProperties;
} & ButtonProps

const IconButton = ({
    width=24,
    height=24,
    gap=5,
    icon: Icon, 
    children,
    style,
    ...props
    } : IconButtonTypes) => {

    return (
        <Button background='#eee' {...props}>
            <IconButtonWrap gap={gap} style={style}>
                <Icon 
                    width={width}
                    height={height}
                />
                {children}
            </IconButtonWrap>
        </Button>
    );
};

export default IconButton