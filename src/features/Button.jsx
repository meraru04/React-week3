import React from "react";
import * as S from "../components/StyleCollection";
import * as CBtn from "../components/Button.Style";
import { AiOutlineRight } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";

function Button() {

  /** 버튼 클릭시 알림창을 나타내주는 핸들러함수 */
  const handleAlert = () => alert("버튼을 만들어보자.");
  /** 버튼 클릭시 사용자 프롬프트 입력창을 나타내주며 입력값을 콘솔에 나타내주는 핸들러 함수 */
  const handlePrompt = () => console.log(prompt("어렵나요?"));

  return (
    <S.SectionBox row={false} gap={10}>
      <h1>Button</h1>

      <S.SectionBox gap={10}>
        <CBtn.PrimaryButton
          onClick={handleAlert}
          outlined
          size="large"
          children={
            <>
              Large Primary Button <AiOutlineRight />
            </>
          }
        />
        <CBtn.PrimaryButton size="medium" children={"Medium"} />
        <CBtn.PrimaryButton size="small" children={"Small"} />
      </S.SectionBox>

      <S.SectionBox gap={10}>
        <CBtn.NegativeButton
          onClick={handlePrompt}
          outlined
          size="large"
          children={
            <>
              Large Nagative Button <VscBellDot />
            </>
          }
        />
        <CBtn.NegativeButton size="medium" children={"Medium"} />
        <CBtn.NegativeButton size="small" children={"Small"} />
      </S.SectionBox>
      
    </S.SectionBox>
  );
}

export default Button;
