import React, { useState } from "react";
import * as S from "../components/StyleCollection";
import * as CBtn from "../components/Button.Style";
function useModal() {
  /** Primary Modal의 상태를 나타내는 useState */
  const [modalState1, setModalState1] = useState(false);
  /** Negative Modal의 상태를 나타내는 useState */
  const [modalState2, setModalState2] = useState(false);
  /** 각 모달창 버튼을 클릭시 상태를 변화시키는 핸들링 함수 */
  const handlerBtnClick = (setState) => {
    setState((pre) => !pre);
  };
  /** 이벤트 버블링을 방지하기 위한 핸들링 함수
    handlerBtnClick이 상속되지 않게 만들어준다.
  */
  const handlerBtnClick2 = (e) => {
    e.stopPropagation();
  };

  const PrimaryModal = (
    <S.ModalLayout>
      <S.ModalInBox top={50} left={50}>
        <S.SectionBox row={false} gap={200}>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <S.SectionBox gap={10} jcontent={"right"}>
            <CBtn.NegativeButton
              onClick={() => handlerBtnClick(setModalState1)}
              children="닫기"
            />
            <CBtn.PrimaryButton children="확인" />
          </S.SectionBox>
        </S.SectionBox>
      </S.ModalInBox>
    </S.ModalLayout>
  );

  const NegativeModal = (
    <S.ModalLayout onClick={() => handlerBtnClick(setModalState2)}>
      <S.ModalInBox
        onClick={(e) => handlerBtnClick2(e)}
        top={50}
        left={50}
        width={"300px"}
        height={"200px"}
      >
        <S.SectionBox gap={10}>
          <S.SectionBox align={"start"} gap={30}>
            <p>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
            </p>
            <S.ModalCloseBtn onClick={() => handlerBtnClick(setModalState2)} />
          </S.SectionBox>
        </S.SectionBox>
      </S.ModalInBox>
    </S.ModalLayout>
  );

  return {
    PrimaryModal,
    NegativeModal,
    modalState1,
    setModalState1,
    modalState2,
    setModalState2,
    handlerBtnClick,
  };
}

export default useModal;
