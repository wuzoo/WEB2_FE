import React from 'react';
import styled, { css } from 'styled-components';
import img2 from '../assets/Rectangle 800.png';

const CharatorList2 = () => {
  return (
    <CellCharactor>
      <CharactorImg src={img2} alt="박영재걸이미지" />

      <CharactorInfo>
        <InfoTitle>
          <InfoName>이민지</InfoName>
          <AgeFrame>
            <InfoAge>23세</InfoAge>
          </AgeFrame>
        </InfoTitle>
        <InfoDetail>
          귀여운 스타일에 똑부러진 성격이지만 가끔은 덜렁대는 모습을 보여주기도 한다.
        </InfoDetail>
      </CharactorInfo>
    </CellCharactor>
  );
};

export default CharatorList2;

const CellCharactor = styled.div`
  display: flex;

  width: 343px;
  height: 148px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px ${({ theme }) => theme.colors.gray400};
  background: ${({ theme }) => theme.colors.white};
`;

const CharactorImg = styled.img`
  padding: 16px;
  width: 98px;
  height: 116px;
  flex-shrink: 0;
  border-radius: 10px;
  /* background: ${({ theme }) => theme.colors.white}; */
`;

const CharactorInfo = styled.div`
  gap: 8px;
`;

const InfoTitle = styled.div`
  display: -webkit-inline-box;
  margin-top: 20px;
  gap: 10px;
`;

const InfoName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.heading.Head2};
  font-family: Pretendard;
  font-style: normal;
`;

const AgeFrame = styled.div`
  margin-top: 5px;
  width: 25px;
  height: 18px;
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary_pink};
`;

const InfoAge = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.text.Caption1};
  font-family: Pretendard;
  font-style: normal;
`;

const InfoDetail = styled.p`
  width: 197px;
  height: 66px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.text.Body5};
  /* Body/Body5 */
`;
