import React from 'react';
import Chat_modal from '../components/chat_modal';
import styled from 'styled-components';

//최종결과 조회 api -> imageUrl, title, content
const result = {
  imageUrl: 'link',
  isSuccess: false,
  title: '어쩌구 타이틀',
  content: '어쩌구 캐릭터의 내용',
};
const ResultPage = () => {
  return (
    <TotalContainer>
      <Img src={`${result.imageUrl}`} alt="total image" />
      <TextContainer>
        {result.isSuccess ? (
          <TitleContainer>
            <TitleBlack>오늘부터</TitleBlack>
            <TitlePink>1일</TitlePink>
            <TitleBlack>!</TitleBlack>
            <HeartImg src="ic_pixelheart.svg" alt="pinkheart" />
          </TitleContainer>
        ) : (
          <TitleContainer>
            <TitleBlack>아쉽지만 계속 0일...</TitleBlack>
            <HeartImg src="ic_pixelheart_black.svg" alt="blackheart" />
          </TitleContainer>
        )}

        <Content>{result.content}</Content>
      </TextContainer>
    </TotalContainer>
  );
};

export default ResultPage;

const TotalContainer = styled.div`
  position: relative;
  top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  background-color: white;
`;
const Img = styled.img`
  width: 262px;
  height: 318px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 218px;
`;
const TitleContainer = styled.div`
  display: flex;
  width: 250px;
  ${({ theme }) => theme.heading.Head1}
`;
const TitleBlack = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
const TitlePink = styled.p`
  color: ${({ theme }) => theme.colors.primary_pink};
`;

const HeartImg = styled.img``;
const Content = styled.p`
  ${({ theme }) => theme.text.Body5}
  color: ${({ theme }) => theme.colors.gray400};
`;
