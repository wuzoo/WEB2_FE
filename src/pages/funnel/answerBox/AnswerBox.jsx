import React from 'react';
import styled, { css } from 'styled-components';

const AnswerBox = ({ answers = [], onChange, selectedId, onSelect }) => {
  const handleAnswerClick = (id) => {
    onChange(id);
    onSelect();
  };

  return (
    <Wrapper>
      <Text>답변을 선택해주세요</Text>
      {answers.map((item, index) => (
        <AnswerButton selected={selectedId === 3} onClick={() => handleAnswerClick(3)}>
          {index + 1}. {item.content}
        </AnswerButton>
      ))}

      <GoBackButton>지금 고백하기</GoBackButton>
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
