import React from 'react'
import * as S from '../components/StyleCollection'
import * as CBtn from '../components/Button.Style'
import useModal from '../hooks/useModal'
function Modal() {

  const {PrimaryModal,NegativeModal,modalState1, modalState2,setModalState1,setModalState2,handlerBtnClick} = useModal();

  return (
    <S.SectionBox row={false}>
      <h1>Modal</h1>
      <S.SectionBox gap={10}>
        <CBtn.PrimaryButton children='open modal' onClick={()=>handlerBtnClick(setModalState1)}/>
        <CBtn.NegativeButton size='large' outlined children='open modal' onClick={()=>handlerBtnClick(setModalState2)}/>
        {modalState1 && PrimaryModal}
        {modalState2 && NegativeModal}
      </S.SectionBox>
    </S.SectionBox>
  )
}

export default Modal