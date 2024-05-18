import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//채팅 화면 안에 모달 띄우기
// props로 isOpen상태, variant
//부모에서 isOpen useState만들어야함 (여기서 이용)
//varient는 true: 중간에 고백했을떄
//false: 마무리 됐을 때

const Chat_modal = ({ isOpen, variant }) => {
  if (variant) {
    //중간에 고백했을때!!!!
    return (
      <>
        {isOpen && (
          <Dialog>
            <Img src="" alt="illust" />
            <Text>지금 고백할까?</Text>

            <ButtonContainer>
              <Btn1 onClick={() => setIsOpen((prev) => !prev)}>돌아가기</Btn1>
              <Btn2 onClick={() => setIsOpen((prev) => !prev)}>고백하기</Btn2>
            </ButtonContainer>
          </Dialog>
        )}
      </>
    );
  } else {
    return (
      <>
        {isOpen && (
          <Dialog>
            <Img src="" alt="illust" />
            <Text>모든 대화가 끝났어요! 이제 고백할 차례예요</Text>
            <ButtonContainer>
              <Btn2 onClick={() => setIsOpen((prev) => !prev)}>고백하기</Btn2>
            </ButtonContainer>
          </Dialog>
        )}
      </>
    );
  }
};

export default Chat_modal;

const Dialog = styled.div`
  position: absolute;
  top: 100px;
  left: 10%;
  border: 0;
  width: 297px;
  height: 288px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
const Img = styled.img`
  position: relative;
  top: 24px;
  left: 95px;
  width: 106px;
  height: 129px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;
const Text = styled.p`
  position: relative;
  top: 50px;
  left: 95px;
  ${({ theme }) => theme.text.Body2}
  color: ${({ theme }) => theme.colors.black};
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 70px;
  left: 10px;
  display: flex;
  gap: 7px;
`;
const Btn1 = styled.button`
  display: flex;
  width: 133px;
  height: 49px;
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  border: 0px;

  ${({ theme }) => theme.text.Body2};
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const Btn2 = styled.button`
  display: flex;
  width: 133px;
  height: 49px;
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  border: 0;
  background-color: ${({ theme }) => theme.colors.primary_pink};
`;
