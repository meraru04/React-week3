import styled, { css } from "styled-components";

/** 레이아웃을 정렬해주기 위한 스타일 */
const SectionBox = styled.div`
  display: flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  gap: ${({ gap }) => `${gap}px`};
  align-items: ${({ align }) => align};
  justify-content: ${({ jcontent }) => jcontent};
`;

/** 버튼 기본 디자인 스타일 */
const Buttons = styled.button`
  font-weight: 600;
  border-radius: 8px;
  padding: 3px 6px;
  border: none;
  cursor: pointer;
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};

  &:active {
    background-color: ${({ activeColor }) => activeColor};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 130px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 100px;
        `;
      default:
        return css`
          height: 40px;
          width: 100px;
        `;
    }
  }}

  ${({ outlined, bg }) => {
    if (outlined) {
      return css`
        border: 3px solid ${bg};
        background-color: #fff;
        font-weight: 600;

        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

/** 버튼 안의 context를 정렬해주기 위한 스타일 */
const ButtonInner = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ jcontent }) => (jcontent ? jcontent : "center")};
  gap: 7px;
`;

/** input박스의 기본 디자인을 정한 스타일 */
const InputStyle = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
/** 모달창 외부 영역의 스타일 */
const ModalLayout = styled.div`
  background-color: rgba(234, 234, 234, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
`;
/** 모달창 내부 영역의 스타일 */
const ModalInBox = styled.div`
  background-color: white;
  position: absolute;
  padding: 15px;
  border-radius: 15px;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

/** Modal 영역의 Nagative 버튼 클릭시 나타나는 모달창의 닫기 버튼 디자인*/
const ModalCloseBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;

  &::after {
    content: "X";
  }

  &:active {
    background-color: rgb(221, 221, 221, 0.3);
  }
`;
/** 셀렉트 영역의 border 디자인 */
const SelectLayout = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
  overflow: hidden;
`;
/** 셀렉트 영역의 Select 버튼 디자인 */
const SelectBtn = styled.button`
  width: 300px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgb(221, 221, 221);
  background-color: transparent;
`;
/** Select 버튼 클릭시 나타나는 div박스의 디자인 */
const SelectBox = styled.div`
  position: ${({ position }) => (position ? position : "relative")};
  width: 300px;
  height: 160px;
  border-radius: 15px;
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
`;
/** Select div박스 안의 버튼들의 기본 디자인 */
const SelectItemBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 40px;
  text-align: left;
  &:hover {
    background-color: #eee;
    border-top-left-radius: ${({ radiustop }) =>
      radiustop ? radiustop : null};
    border-top-right-radius: ${({ radiustop }) =>
      radiustop ? radiustop : null};
    border-bottom-left-radius: ${({ radiusbottom }) =>
      radiusbottom ? radiusbottom : null};
    border-bottom-right-radius: ${({ radiusbottom }) =>
      radiusbottom ? radiusbottom : null};
  }
`;

const SelectContainer = styled.div`
  position : relative;
`

const SelectInBox = styled.div`
`;

export {
  SectionBox,
  Buttons,
  ButtonInner,
  InputStyle,
  ModalLayout,
  ModalInBox,
  ModalCloseBtn,
  SelectLayout,
  SelectBtn,
  SelectBox,
  SelectItemBtn,
  SelectInBox,
  SelectContainer,
};
