import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { default as css, default as styled } from 'styled-components';
import { HistoryTextContext } from '../Funnel';
import ChatBox from '../chatbox/ChatBox';
import MyChat from '../chatbox/MyChat';

import { getAnswers, getQuestions, getWeights } from '../../../api';

const variant = {
  initial: { opacity: 0, x: 400, transition: { duration: 0.5 } },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.5 },
  },
  exit: { opacity: 0, x: -400, transition: { duration: 0.3 } },
};

const Step5 = ({ current, onFinish, onAddWeight, onStop }) => {
  const [clickedId, setClickedId] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState();
  const [answers, setAnswers] = useState([]);
  const { texts, setTexts } = useContext(HistoryTextContext);

  const getData = async () => {
    const response = await getQuestions(1);

    const currentAnswerId = response.data.questionList.at(-1).questionId;

    const answers = await getAnswers(currentAnswerId);

    setAnswers(answers.data.answerList);

    setData(response.data.questionList);
  };
  1;

  useEffect(() => {
    getData();
  }, []);

  const handleModalOpen = () => {
    onStop((prevState) => !prevState);
  };
  return (
    <>
      {current === 5 && (
        <Container
          variants={variant}
          initial="initial"
          animate="animate"
          exit="exit"
          step={current}
        >
          <ChatsWrapper>
            <ChatBox>{data[data.length - 2].content}</ChatBox>
            <MyChat>{texts[texts.length - 2]}</MyChat>
            <ChatBox>{data[data.length - 1].content}</ChatBox>
            {isSelected && <MyChat>{texts.at(-1)}</MyChat>}
          </ChatsWrapper>

          <Wrapper>
            <Text>답변을 선택해주세요</Text>
            {answers.map((item, index) => (
              <AnswerButton
                selected={clickedId === index + 1}
                onClick={async () => {
                  setClickedId(index + 1);

                  setTexts((prev) => [...prev, item.content]);

                  const response = await getWeights(item.answerId);

                  onAddWeight(response.data.weight);

                  onFinish();
                }}
              >
                {index + 1}. {item.content}
              </AnswerButton>
            ))}
            <GoBackButton onClick={handleModalOpen}>지금 고백하기</GoBackButton>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

const ChatsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 48px;

  padding: 0px 16px;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 95vh;
`;

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

export default Step5;
