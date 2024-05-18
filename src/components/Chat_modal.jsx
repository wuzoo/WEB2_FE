import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

//채팅 화면 안에 모달 띄우기
// props로 isOpen상태, variant
//부모에서 isOpen useState만들어야함 (여기서 이용)

//varient는 true: 중간에 고백했을떄
//false: 마무리 됐을 때

const Chat_modal = ({ variant, open }) => {
  console.log(open);
  const navi = useNavigate();
  //routs이동 하는 그거 뭐였더라
  console.log('ddd' + variant);
  if (open) {
    if (variant < 8) {
      //중간에 고백했을때!!!!

      return (
        <BackDrop $open={open}>
          <Dialog>
            <Img src="Layer_2.svg" alt="illust" />
            <Text>지금 고백할까?</Text>
            <ButtonContainer>
              <Btn1 onClick={() => setIsOpen((prev) => !prev)}>돌아가기</Btn1>
              <Btn2
                onClick={() => {
                  navi('/result');
                }}
              >
                고백하기
              </Btn2>
            </ButtonContainer>
          </Dialog>
        </BackDrop>
      );
    } else {
      return (
        <BackDrop $open={open}>
          <Dialog>
            <Img src="Layer_2.svg" alt="illust" />
            <Text>
              모든 대화가 끝났어요!
              <br /> 이제 고백할 차례예요
            </Text>
            <ButtonContainer>
              <Btn3
                onClick={() => {
                  navi('/result');
                }}
              >
                고백하기
              </Btn3>
            </ButtonContainer>
          </Dialog>
        </BackDrop>
      );
    }
  }
};

export default Chat_modal;

const BackDrop = styled.div`
  ${(props) =>
    props.$open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Dialog = styled.div`
  position: fixed;
  top: 249px;
  left: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 297px;
  height: 288px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
const Img = styled.img`
  width: 200px;
  height: 129px;
  border-radius: 10px;
`;
const Text = styled.p`
  ${({ theme }) => theme.text.Body2}
  color: ${({ theme }) => theme.colors.black};
  flex-wrap: wrap;
`;
const ButtonContainer = styled.div`
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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_pink};
`;

const Btn3 = styled.button`
  display: flex;
  width: 133px;
  height: 49px;
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 250px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_pink};
`;
