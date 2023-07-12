import * as S from "./StyleCollection";

const CustomButton = ({ children, ...props }) => {
  return (
    <S.Buttons {...props} activeColor="#F2F2F2">
      <S.ButtonInner>{children}</S.ButtonInner>
    </S.Buttons>
  );
};



const PrimaryButton = (props) => {
  return <CustomButton {...props} bg="#9FF781" color="black"></CustomButton>;
};

const NegativeButton = (props) => {
  return <CustomButton {...props} bg="#FF4000" color="#F6CECE"></CustomButton>;
};

export { PrimaryButton, NegativeButton };


