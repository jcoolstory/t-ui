
import styled from "@emotion/styled";

const DrawerWapper = styled.div`
 
  & .open {
    transform: translate(0%);
  }
`

const DrawerTop = styled.div<DrawerProps>`
    position: fixed;
    border-bottom: 1px solid #aaa;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    transition: transform 0.5s ease-out;
`;

const DrawerLeft = styled.div<DrawerProps>`
    position: fixed;
    border-right: 1px solid #aaa;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform 0.5s ease-out;
`;

const DrawerRight = styled.div<DrawerProps>`
    position: fixed;
    border-left: 1px solid #aaa;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    transition: transform 0.5s ease-out;
`;

const DrawerBottom = styled.div<DrawerProps>`
    position: fixed;
    border-top: 1px solid #aaa;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.5s ease-out;
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
  open=false,
  ...props
}: DrawerProps) => {

  const className = open ? "open" : "";
  if (placement === "top")  {
    return (<DrawerWapper><DrawerTop className={className} {...props} /></DrawerWapper>)
  } else if (placement === "left") {
    return (<DrawerWapper><DrawerLeft className={className} {...props} /></DrawerWapper>)
  } else if (placement === "right") {
    return (<DrawerWapper><DrawerRight className={className}  {...props} /></DrawerWapper>)
  } else {  //placement === "bottom"
    return (<DrawerWapper><DrawerBottom className={className}  {...props} /></DrawerWapper>)
  } 
};

export default Drawer;
