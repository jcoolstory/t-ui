import styled from "@emotion/styled";

const ContainerControll = styled.div`
  margin: "20px 0";
`;

type ContainerProps = {
  fixed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({ ...props }: ContainerProps) => {
  return <ContainerControll {...props} />;
};

export default Container