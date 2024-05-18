import NextButton from '../components/Selector_NextButton'; //잊지말자 import
import CharatorList from '../components/Selector_CharatorList';
import Layer_2 from '../assets/Layer_2.svg?react';
import styled from 'styled-components';
import React, { useState } from 'react';

const Selector = () => {
  const [color, setColor] = useState(false);
  const handleClick = () => {
    console.log('asdf');
    setColor((prevState) => !prevState);
  };
  return (
    <Main>
      <Layer_2 width={118} height={34} style={{ marginTop: '20px' }} />
      {/* 여기서 마진탑은 헤더와의 간격임 */}
      <Ment>당신의 1일을 위한 상대를 선택해주세요!</Ment>
      <CharatorListWrapper>
        <CharatorList color={color} handleClick={handleClick} />
        <CharatorList />
      </CharatorListWrapper>
      <NextButton color={color} />
    </Main>
  );
};

export default Selector;
const Main = styled.div`
  margin-left: 16px;
`;

const Ment = styled.h1`
  width: 220px;
  height: 84px;
  word-break: keep-all; //단어 단위로 줄바꿈
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.heading.Head0};
  font-family: Pretendard;
  font-style: normal;
  margin-top: 36px;
`;

const CharatorListWrapper = styled.div`
  margin-top: 44px;
  margin-bottom: 134px;
  display: inline-grid;
  gap: 18px;
`;
