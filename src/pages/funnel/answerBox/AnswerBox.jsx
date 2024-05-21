import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Chat_modal from '../../../components/Chat_modal';

//const [variant, setVariant] = useState();

const AnswerBox = ({ onChange, selectedId, onSelect }) => {
  //let variant;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get('https://api.g0-100.p-e.kr/api/v1/question/1', {
        headers: {
          'Content-Type': 'application/json',
          memberId: 1,
        },
      })
      .then((res) => {
        console.log(res.data.data.questionList.length - 1);
        //setVariant(res.data.data.questionList.length - 1);
        //variant = res.data.data.questionList.length - 1;
        //console.log(variant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAnswerClick = (id) => {
    onChange(id);
    onSelect();
  };
  const handleModalOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <Text>답변을 선택해주세요</Text>
      <AnswerButton selected={selectedId === 1} onClick={() => handleAnswerClick(1)}>
        1. 답변 내용
      </AnswerButton>
      <AnswerButton selected={selectedId === 2} onClick={() => handleAnswerClick(2)}>
        1. 답변 내용
      </AnswerButton>
      <AnswerButton selected={selectedId === 3} onClick={() => handleAnswerClick(3)}>
        1. 답변 내용
      </AnswerButton>
      <GoBackButton onClick={handleModalOpen}>지금 고백하기</GoBackButton>
      <Chat_modal open={open} />
    </Wrapper>
  );
};

const Text = styled.p`
  ${(props) => props.theme.text.Body4}
  color: ${(props) => props.theme.colors.gray400};
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 16px;

  background-color: ${(props) => props.theme.colors.gray100};
`;

const AnswerButton = styled.button`
  width: 340px;

  padding: 10px 0px;

  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme.colors.primary_pale};
      box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.primary_pink};
    `}

  ${(props) => props.theme.text.Body3}
`;

const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 375px;
  height: 65px;

  border: none;
  background-color: ${(props) => props.theme.colors.primary_pink};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.heading.Head3}
`;

export default AnswerBox;
