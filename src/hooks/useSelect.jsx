import { useState } from "react";
import * as S from "../components/StyleCollection";

function useSelect() {
  // 첫번째 셀렉트 버튼 상태값
  const [SelectState, setSelectState] = useState("리액트");
  // 두번째 셀렉트 버튼 상태값
  const [SelectState2, setSelectState2] = useState("리액트");
  // 첫번째 셀렉트 버튼의 div박스 on,off 상태
  const [SelectMode, setSelectMode] = useState(false);
  // 두번째 셀렉트 버튼의 div박스 on,off 상태
  const [SelectMode2, setSelectMode2] = useState(false);

  /** 각 셀렉트 버튼 클릭시 div박스를 on,off 상태값을 변경하는 핸들링 함수 */
  const handlerSelectClick = (setState) => {
    setState((pre) => !pre);
  };
  
  /** div박스의 각 버튼들을 클릭할 시 셀렉트 버튼의 상태값과 div박스의 on,off 상태를 변경하는 핸들링 함수 */
  const handlerSelectInput = (e, setState, setMode) => {
    setState(e.target.dataset.value);
    setMode((pre) => !pre);
  };

  /** 첫번째 셀렉트 버튼의 셀렉트 박스 컴포넌트 생성*/
  const SelectList = () => {
    return (
      <S.SelectBox top={"173px"} position={"absolute"} left={"2px"}>
        <S.SectionBox row={false}>
          <S.SelectItemBtn
            onClick={(e) =>
              handlerSelectInput(e, setSelectState, setSelectMode)
            }
            data-value="리액트"
            radiustop={"15px"}
          >
            리액트
          </S.SelectItemBtn>
          <S.SelectItemBtn
            onClick={(e) =>
              handlerSelectInput(e, setSelectState, setSelectMode)
            }
            data-value="자바"
          >
            자바
          </S.SelectItemBtn>
          <S.SelectItemBtn
            onClick={(e) =>
              handlerSelectInput(e, setSelectState, setSelectMode)
            }
            data-value="스프링"
          >
            스프링
          </S.SelectItemBtn>
          <S.SelectItemBtn
            onClick={(e) =>
              handlerSelectInput(e, setSelectState, setSelectMode)
            }
            data-value="리액트네이티브"
          >
            리액트네이티브
          </S.SelectItemBtn>
        </S.SectionBox>
      </S.SelectBox>
    );
  };

  /** 두번째 셀렉트 버튼의 셀렉트 박스 컴포넌트 생성*/
  const SelectList2 = () => {
    return (
      <S.SelectBox top={'-1px'} left={'-1px'}>
        <S.SectionBox row={false}>
          <S.SelectItemBtn onClick={(e)=>handlerSelectInput(e,setSelectState2,setSelectMode2)} data-value="리액트" radiustop={"15px"}>
            리액트
          </S.SelectItemBtn>
          <S.SelectItemBtn onClick={(e)=>handlerSelectInput(e,setSelectState2,setSelectMode2)} data-value="자바">자바</S.SelectItemBtn>
          <S.SelectItemBtn onClick={(e)=>handlerSelectInput(e,setSelectState2,setSelectMode2)} data-value="스프링">스프링</S.SelectItemBtn>
          <S.SelectItemBtn onClick={(e)=>handlerSelectInput(e,setSelectState2,setSelectMode2)} data-value="리액트네이티브" radiusbottom={"15px"}>
            리액트네이티브
          </S.SelectItemBtn>
        </S.SectionBox>
      </S.SelectBox>
    );
  };

  return {
    
    handlerSelectClick,
    handlerSelectInput,
    SelectState,
    setSelectState,
    SelectMode,
    SelectMode2,
    SelectState2,
    setSelectMode,
    setSelectMode2,
    setSelectState2,
    SelectList,
    SelectList2,
  };
}

export default useSelect;
