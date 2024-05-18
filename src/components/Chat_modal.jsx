import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MobileLayout from './layout/MobileLayout';

//채팅 화면 안에 모달 띄우기
// props로 중간에 그만둔거면 아무것도 안보내고 다끝난거면 페이지번호 보내기

const Chat_modal = () => {
  //const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <Dialog>
          <Img>illust</Img>
          <Text>지금 고백할까?</Text>

          <ButtonContainer>
            <Btn1 onClick={() => setIsOpen((prev) => !prev)}>돌아가기</Btn1>
            <Btn2 onClick={() => setIsOpen((prev) => !prev)}>고백하기</Btn2>
          </ButtonContainer>
        </Dialog>
      )}
    </>
  );
};

export default Chat_modal;

const Dialog = styled.div`
  position: relative;
  top: 250px;
  left: 10%;
  border: 0;
  width: 297px;
  height: 288px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
const Img = styled.div`
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
