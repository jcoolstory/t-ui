import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

type SizeProps = {width:string, height: string, radius?: number}

const BaseSkeleton = styled.div<SizeProps>`
  display: inline-block;
  height: ${props => props.height || "14px"};
  width: ${props => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #f0f0f0;
  background-image: linear-gradient(
    90deg,
    #f0f0f0,
    #f7f7f7,
    #f0f0f0
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  margin-bottom: 8px;
  margin-top: 8px;
  border-radius: ${(p) => p.radius ? `${p.radius}px` : "0"};
`;

export const CircularSkeleton = styled(BaseSkeleton)`
  border-radius: 50%;
`

export const RectangluarSkeleton = styled(BaseSkeleton)`
`

type SkeletonProps = {
    variant: "circular" | "rect" | "round",
    width: string,
    height: string,
    radius?: number,
}

const Skeleton = ({variant="rect", width, height, radius=undefined, ...props}: SkeletonProps) => {
    if (variant === "circular") 
        return <CircularSkeleton width={width} height={height} {...props} />
    else if (variant === "rect")
        return <BaseSkeleton width={width} height={height} {...props} />
    else
        return <BaseSkeleton width={width} height={height} radius={radius ? radius : 10} {...props}/>
}

export default Skeleton