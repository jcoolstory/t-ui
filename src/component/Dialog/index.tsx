import styled from "@emotion/styled";

export type DialogProps = {
  padding?: string;
  margin?: string;
  open?: boolean;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 320px;
  z-index: 50;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

export const RoundPopup = styled.div`
  padding: 30px 10px;
  min-width: 512px;
  border-radius: 15px;
  background-color: #fff;
`;

const Dialog = ({
  padding,
  margin,
  open = false,
  children,
  ...props
}: DialogProps) => {
  if (!open) return;
  return (
    <DialogWrapper {...props}>
      <Dim></Dim>
        <ContentWrapper>{children}</ContentWrapper>
    </DialogWrapper>
  );
};


export const RoundDialog = ({
  children,
  ...props
}: DialogProps) => {
  
  return (<Dialog {...props}>
    <RoundPopup>{children}</RoundPopup>
  </Dialog>)
};

export default Dialog;
