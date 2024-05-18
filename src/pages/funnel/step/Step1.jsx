import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestions } from '../../../api';
import { HistoryTextContext } from '../Funnel';
import AnswerBox from '../answerBox/AnswerBox';
import ChatBox from '../chatbox/ChatBox';
import MyChat from '../chatbox/MyChat';

const Step1 = ({ current, onChangeStep }) => {
  const [clickedId, setClickedId] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState();

  const { texts, setTexts } = useContext(HistoryTextContext);

  const getData = async () => {
    const data = await getQuestions(1);

    console.log(data);

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isSelected) {
      setTimeout(() => {
        onChangeStep(2);
      }, 1000);
    }
  }, [isSelected]);

  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <>
      {current === 1 && (
        <Container step={current}>
          <ChatsWrapper>
            <ChatBox>질문입니다 질문입니다 질문입니다 질문입니다</ChatBox>
            <MyChat>나입니다 나입니다 나입니다 나입니다</MyChat>
          </ChatsWrapper>

          <AnswerBox selectedId={clickedId} onChange={setClickedId} onSelect={handleSelect} />
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

export default Step1;
