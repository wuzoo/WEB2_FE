import React, { useRef, useState } from 'react';
import MobileLayout from '../components/layout/MobileLayout';
import styled, { css } from 'styled-components';
import Group from '../assets/Group.svg?react';
import { SceneData } from '../constants';
import SceneModal from '../components/SceneModal';

const SceneSelect = () => {
  const modalRef = useRef();
  const initValue = Array.from({ length: SceneData.length - 2 }, () => false);
  const [isClicked, setIsClicked] = useState(initValue);
  const handleSceneClick = (id) => {
    const temp = isClicked.map((elem, index) => id === index && !elem);
    setIsClicked(temp);
  };
  const handleNextBtnClick = () => {
    isClicked.includes(true) && modalRef.current.showModal();
  };
  const handleClose = () => {
    console.log('sadfjhdkslf');
    modalRef.current.close();
    setIsClicked(initValue);
  };

  return (
    <MobileLayout>
      <SceneModal modalRef={modalRef} handleClose={handleClose} />
      <Logo />
      <SceneText>
        당신을 위한 <br />
        스토리를 선택해주세요!
      </SceneText>
      <SceneList>
        {SceneData.map((data) => {
          return (
            <SceneItem
              key={data.id}
              onClick={() => handleSceneClick(data.id)}
              $isClicked={isClicked[data.id]}
            >
              <Image src={data.img} />
              <SceneInfoWrapper>
                <SceneTitle>{data.title}</SceneTitle>
                <SceneDescription>{data.description}</SceneDescription>
              </SceneInfoWrapper>
            </SceneItem>
          );
        })}
      </SceneList>
      <BlurBox />
      <NextBtn $clicked={isClicked.includes(true)} onClick={handleNextBtnClick}>
        다음으로
      </NextBtn>
    </MobileLayout>
  );
};

const Logo = styled(Group)`
  width: 103.23px;
  height: 19.69px;
  margin: 71.13px 248.33px 0 16px;
`;
const SceneText = styled.p`
  ${({ theme }) => theme.heading.Head0};
  color: ${({ theme }) => theme.colors.white};
  margin: 36px 120px 0 16px;
`;

const SceneList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(to bottom);
`;
const BlurBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 374px;
  height: 320px;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 1) 100%);
  z-index: 100;
`;
const SceneItem = styled.li`
  width: 343px;
  height: 130px;

  ${(props) =>
    props.$isClicked
      ? css`
          background-color: ${({ theme }) => theme.colors.primary_pale};
          border: solid 0.5px ${({ theme }) => theme.colors.primary_pink};
          &:nth-of-type(1) {
            margin-bottom: 17.5px;
            margin-top: 21.5px;
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
          margin-bottom: 18px;
          &:nth-of-type(1) {
            margin-top: 22px;
          }
        `}
  border-radius: 10px;
  display: flex;
`;
const Image = styled.img`
  width: 98px;
  height: 98px;
  margin: 16px 0 16px 16px;
`;
const SceneInfoWrapper = styled.div``;
const SceneTitle = styled.h4`
  ${({ theme }) => theme.heading.Head3};
  color: ${({ theme }) => theme.colors.black};
  margin: 20px 0px 8px 16px;
`;

const SceneDescription = styled.p`
  ${({ theme }) => theme.text.Body5};
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0 16px 16px 16px;
`;

const NextBtn = styled.button`
  position: fixed;
  bottom: 50px;
  margin: 0 16px;
  ${(props) =>
    props.$clicked
      ? css`
          background-color: ${({ theme }) => theme.colors.primary_pink};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray700};
          color: ${({ theme }) => theme.colors.gray300};
        `};

  display: flex;
  width: 343px;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0px;
  z-index: 10000;
`;

export default SceneSelect;
