import React from 'react';
import NextButton from '../components/Selector_NextButton'; //잊지말자 import
import Layer_2 from '../assets/Layer_2.svg?react';
import styled from 'styled-components';

const Selector = () => {
  return (
    <>
      <Layer_2 width={118} height={34} />
      <Ment>당신의 1일을 위한 상대를 선택해주세요!</Ment>
      <NextButton />
    </>
  );
};

export default Selector;

const Ment = styled.h1`
  width: 220px;
  height: 84px;
  word-break: keep-all; //단어 단위로 줄바꿈
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.heading.Head0};
  font-family: Pretendard;
  font-style: normal;
`;
