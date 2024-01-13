import styled from "@emotion/styled";
import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import ButtonBox from "./ButtonBox";

const IconButtonWarp = styled.div<{columns : number}>`
    display: grid;
    grid-template-columns:
        ${(props) => props.columns && props.columns > 2 ? 
        `auto 1fr repeat(${props.columns - 2}, auto)` : 
        'auto 1fr'};
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 15px;
`

type IconButtonTypes = {
    width?: string | number,
    height?: string | number,
    children: React.ReactNode,
    style?: React.CSSProperties,
}

const IconButton = ({width, height, children, style} : IconButtonTypes) => {
    const childCount = React.Children.count(children);

    return(
        <ButtonBox type='text' animate ripple>
            <IconButtonWarp style={{width, height, ...style}} columns={childCount}>
                {children}
            </IconButtonWarp>
        </ButtonBox>
    );
};


export default IconButton;