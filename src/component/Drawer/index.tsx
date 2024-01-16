
import styled from "@emotion/styled";
import { ReactHTMLElement } from "react";
import { BoxProps } from "../Box";
import "./style.css"

const DrawerTop = styled.div<DrawerProps>`
    display: ${ (p) => p.open ? "block" : "none"};
    position: fixed;
    border-bottom: 1px solid #aaa;
    top: 0;
    left: 0;
    right: 0;
    /* transform: translate(0,-100%); */
    animation: slideDown 0.5s ease-in;
    /* bottom: 0; */
`;

const DrawerLeft = styled.div<DrawerProps>`
    display: ${ (p) => p.open ? "block" : "none"};
    position: fixed;
    border-right: 1px solid #aaa;
    top: 0;
    left: 0;
    /* right: 0; */
    bottom: 0;
    animation: slideLeftToRight 0.5s ease-in;
`;

const DrawerRight = styled.div<DrawerProps>`
    display: ${ (p) => p.open ? "block" : "none"};
    position: fixed;
    border-left: 1px solid #aaa;
    top: 0;
    /* left: 0; */
    right: 0;
    bottom: 0;
    animation: slideRightToLeft 0.5s ease-in;
`;

const DrawerBottom = styled.div<DrawerProps>`
    display: ${ (p) => p.open ? "block" : "none"};
    position: fixed;
    border-top: 1px solid #aaa;
    /* top: 0; */
    right: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: slideUp 0.5s ease-in;
`;


export type DrawerProps = {
  placement?: "top" | "right" | "bottom" | "left"
  padding?: string;
  margin?: string;
  open?: boolean;
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>;

const Drawer = ({
  style = {},
  placement = "top",
  padding,
  margin,
  ...props
}: DrawerProps) => {

  if (placement === "top")  {
    return <DrawerTop  {...props} />
  } else if (placement === "left") {
    return <DrawerLeft {...props} />
  } else if (placement === "right") {
    return <DrawerRight {...props} />
  } else if (placement === "bottom") {
    return <DrawerBottom {...props} />
  } 
};

export default Drawer;
