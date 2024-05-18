import React from 'react';
import styled from 'styled-components';
import manImg from '../assets/man.svg?react';
import xlogo from '../assets/xlogo.svg?react';
const SceneModal = ({ modalRef, handleClose }) => {
  return (
    <ModalWrapper ref={modalRef}>
      <ModalLayout>
        <CloseBtn onClick={handleClose} />
        <ChImg />
        <ChInfoWrapper>
          <ChInfo>
            <ChName>박영재</ChName>
            <ChAge>26세</ChAge>
          </ChInfo>
          <ChDescription>
            버디버디조부터 솝커톤까지 같은 조에 배정된 우리. 이거 운명인가?
          </ChDescription>
        </ChInfoWrapper>
        <StartBtn>시작하기</StartBtn>
      </ModalLayout>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.dialog`
  border-radius: 10px;
  border: 0;
  margin: 216px 39px 217px 39px;
  width: 297px;
  height: 379px;
  z-index: 10000;
`;
const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
`;
const CloseBtn = styled(xlogo)`
  position: fixed;
  right: 53px;
  top: 231px;
`;
const ChInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChImg = styled(manImg)`
  width: 129px;
  height: 150px;
  margin: 26px 0 14px 0;
`;
const ChInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
const ChName = styled.p`
  width: 52px;
  height: 32px;
  ${({ theme }) => theme.heading.Head2};
  color: ${({ theme }) => theme.colors.black};
`;
const ChAge = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 41px;
  height: 22px;
  border-radius: 12px;
  ${({ theme }) => theme.text.Caption1};
  padding: auto;
  text-align: center;
  line-height: 22px;
`;
const ChDescription = styled.p`
  ${({ theme }) => theme.text.Body5};
  color: ${({ theme }) => theme.colors.gray400};
  width: 229px;
  height: 66px;
  text-align: center;
`;
const StartBtn = styled.button`
  margin: 18px 12px 12px 12px;
  background-color: ${({ theme }) => theme.colors.primary_pink};
  color: ${({ theme }) => theme.colors.white};
  width: 273px;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0px;
`;

export default SceneModal;
