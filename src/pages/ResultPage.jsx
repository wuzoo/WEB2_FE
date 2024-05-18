import React from 'react';
import Chat_modal from '../components/chat_modal';
import styled from 'styled-components';

//최종결과 조회 api -> imageUrl, title, content
const result = {
  imageUrl: 'link',
  isSuccess: true,
  title: '어쩌구 타이틀',
  content: '어쩌구 캐릭터의 내용',
};
const ResultPage = () => {
  return (
    <TotalContainer>
      <Img src="giff.gif" alt="total image" />
      <TextContainer>
        {result.isSuccess ? (
          <TitleContainer>
            <TitleWhite>오늘부터</TitleWhite>
            <TitlePink>1일</TitlePink>
            <TitleWhite>!</TitleWhite>
            <HeartImg src="ic_pixelheart.svg" alt="pinkheart" />
          </TitleContainer>
        ) : (
          <TitleContainer>
            <TitleWhite>아쉽지만 계속 0일...</TitleWhite>
            <HeartImg src="ic_pixelheart_black.svg" alt="blackheart" />
          </TitleContainer>
        )}

        <Content>{result.content}</Content>
      </TextContainer>
      <Chat_modal />
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
`;
const Img = styled.img`
  height: 318px;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 218px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  ${({ theme }) => theme.heading.Head1}
`;
const TitleWhite = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
const TitlePink = styled.p`
  color: ${({ theme }) => theme.colors.primary_pink};
`;

const HeartImg = styled.img``;
const Content = styled.p`
  ${({ theme }) => theme.text.Body5}
  color: ${({ theme }) => theme.colors.gray400};
`;
