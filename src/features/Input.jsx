import React, { useRef, useState } from "react";
import * as S from "../components/StyleCollection";
import * as CBtn from "../components/Button.Style";
import { useEffect} from "react";

function Input() {

    // 이름과 가격 input박스 dom 객체를 선택하기 위한 변수
    const nameRef = useRef(null);
    const priceRef = useRef(null);

  //  input 컴포넌트가 첫 마운트 됐을 시 name input박스에 커서가 포커싱되는 useEffect메소드*
  useEffect(() => {
    nameRef.current.focus();
  }, [nameRef]);
      
    // input 컴포넌트의 상태값 설정
    const [InputState, setInputState] = useState({
      name: "",
      price: "",
    });
  
  
    // InputState의 name과 price값을 
    const nameValue = InputState.name;
    const priceValue = InputState.price;
  
    /**이름과 가격 input 박스의 입력에 따라 InputState의 값을 업데이트 해주는 핸들러함수**/
    const handlerValueChange = (e) => {
      const { name, value } = e.target;
      if (name === "price") {
        const cdValidity = value.replace(/\D/g, "");
        const formValue = new Intl.NumberFormat().format(cdValidity);
        setInputState({ ...InputState, [name]: formValue });
      } else {
        setInputState({ ...InputState, [name]: value });
      }
    };
  
  
  /** form태그의 onSubmit 이벤트시 실행할 핸들링 함수
   이름과 가격 input박스의 입력 조건에 따라 알림창이 뜬다. */
    const handlerFormSubmit = (e) => {
      e.preventDefault();
      const {name, price} = InputState
      if (!nameValue && !priceValue) {
        alert("이름과 가격 두개 모두 적어주세요.");
      } else if (!nameValue) {
        alert("이름을 입력해주세요.");
        nameRef.current.focus();
      } else if (!priceValue || priceValue === "0") {
        alert("가격을 입력해주세요.");
        priceRef.current.focus();
      } else if (nameValue && priceValue !== "0") {
        const changePrice = price.replaceAll(",","")
        alert(`{name : ${name}, price: ${changePrice}}`);
        setInputState({ ...InputState, name: "", price: "" });
        nameRef.current.focus();
      }
    };

  return (
    <S.SectionBox row={false}>
      <h1>Input</h1>
      <form onSubmit={handlerFormSubmit}>
        <S.SectionBox gap={30} style={{ alignItems: "center" }}>
          <S.SectionBox align={"center"}>
            <label>이름</label>
            <S.InputStyle
              name="name"
              value={nameValue}
              onChange={handlerValueChange}
              ref={nameRef}
              maxLength="10"
              placeholder="이름을 입력해주세요"
            />
          </S.SectionBox>
          <S.SectionBox align={"center"}>
            <label>가격</label>
            <S.InputStyle
              name="price"
              value={priceValue}
              onChange={handlerValueChange}
              ref={priceRef}
              placeholder="가격을 입력해주세요"
            />
          </S.SectionBox>
          <CBtn.PrimaryButton children={"저장"} />
        </S.SectionBox>
      </form>
    </S.SectionBox>
  );
}

export default Input;
