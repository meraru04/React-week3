import React from 'react'
import * as S from '../components/StyleCollection'
import {BiSolidDownArrow} from 'react-icons/bi'
import useSelect from '../hooks/useSelect'
function Select() {

  const {SelectState,
    SelectState2,
    SelectList,
    SelectList2,
    SelectMode, 
    SelectMode2, 
    setSelectMode2, 
    setSelectMode, 
    handlerSelectClick} = useSelect()

  return (
    <S.SelectContainer>
    <S.SectionBox row={false}>

      <S.SelectLayout>
      <h1>Select</h1>

      <S.SectionBox gap={10}>
        <S.SelectInBox>
        <S.SelectBtn onClick={() => handlerSelectClick(setSelectMode)} children={<S.ButtonInner jcontent={'space-between'} children={<>{SelectState} <BiSolidDownArrow/></>}/>}/>
          {SelectMode && SelectList()}
        </S.SelectInBox>

        <S.SelectInBox>
        <S.SelectBtn onClick={() => handlerSelectClick(setSelectMode2)} children={<S.ButtonInner jcontent={'space-between'} children={<>{SelectState2} <BiSolidDownArrow/></>}></S.ButtonInner>}/>
        {SelectMode2 && SelectList2()}
        </S.SelectInBox>
      </S.SectionBox>

      </S.SelectLayout>
    </S.SectionBox>
    </S.SelectContainer>
  )
}

export default Select