import React, { useEffect, useState } from 'react';
import Chat_modal from '../components/chat_modal';
import styled from 'styled-components';
import axios from 'axios';

//최종결과 조회 api -> imageUrl, title, content

const ResultPage = () => {
  //여기서 최종결과조회 API받아오고 위 result 구조체로 결과 넣기
  const [result, setResult] = useState({ imageUrl: '', isSuccess: '', title: '', content: '' });

  useEffect(() => {
    axios
      .get(`https://api.g0-100.p-e.kr/api/v1/result/1/220`, {
        headers: {
          'Content-Type': 'application/json',
          memberId: 1,
        },
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {result.isSuccess ? (
        <TotalContainer>
          <Img src="giff.gif" alt="total image" />
          <TextContainer>
            <TitleContainer>
              <TitleWhite>오늘부터</TitleWhite>
              <TitlePink>1일</TitlePink>
              <TitleWhite>!</TitleWhite>
              <HeartImg src="ic_pixelheart.svg" alt="pinkheart" />
            </TitleContainer>
            <Content>{result.content}</Content>
          </TextContainer>
        </TotalContainer>
      ) : (
        <TotalContainer>
          <Img src="giff22.gif" alt="total image" />
          <TextContainer>
            <TitleContainer>
              <TitleWhite>아쉽지만 계속 0일...</TitleWhite>
              <HeartImg src="ic_pixelheart_black.svg" alt="blackheart" />
            </TitleContainer>
            <Content>{result.content}</Content>
          </TextContainer>
        </TotalContainer>
      )}
      <Chat_modal />
    </div>
  );
};

export default ResultPage;

const TotalContainer = styled.div`
  position: relative;
  top: 90px;
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
