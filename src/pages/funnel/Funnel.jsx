import React, { createContext, useEffect, useState } from 'react';
import { getQuestions } from '../../api';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';
import Step5 from './step/Step5';

export const HistoryTextContext = createContext({});

const HistoryTextProvider = ({ children }) => {
  const [texts, setTexts] = useState([]);

  const context = {
    texts,
    setTexts,
  };

  return <HistoryTextContext.Provider value={context}>{children}</HistoryTextContext.Provider>;
};

const Funnel = () => {
  const [step, setStep] = useState(1);
  const [weight, setWeight] = useState(0);

  const getData = async () => {
    const response1 = await getQuestions(1);
    // const response2 = await getAnswers(1);
    // const response3 = await getWeights(1);
    // const response4 = await getResult();

    console.log(response1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HistoryTextProvider>
      <Step1 current={step} onChangeStep={() => setStep(2)}></Step1>
      <Step2 current={step} onChangeStep={() => setStep(3)}></Step2>
      <Step3 current={step} onChangeStep={() => setStep(4)}></Step3>
      <Step4 current={step} onChangeStep={() => setStep(5)}></Step4>
      <Step5 current={step} onChangeStep={() => {}}></Step5>
    </HistoryTextProvider>
  );
};

export default Funnel;
