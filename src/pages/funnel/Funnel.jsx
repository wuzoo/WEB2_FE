import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chat_modal from '../../components/Chat_modal';
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
  const [isDone, setIsDone] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);

  const navigate = useNavigate();

  if (isDone) {
    navigate('/result', {
      state: {
        weight,
      },
    });
  }

  const handleAdd = (weight) => {
    setWeight((prev) => prev + weight);
  };

  return (
    <HistoryTextProvider>
      <Step1
        onStop={setIsTriggered}
        onAddWeight={handleAdd}
        current={step}
        onChangeStep={() => setStep(2)}
      ></Step1>
      <Step2
        onStop={setIsTriggered}
        onAddWeight={handleAdd}
        current={step}
        onChangeStep={() => setStep(3)}
      ></Step2>
      <Step3
        onStop={setIsTriggered}
        onAddWeight={handleAdd}
        current={step}
        onChangeStep={() => setStep(4)}
      ></Step3>
      <Step4
        onStop={setIsTriggered}
        onAddWeight={handleAdd}
        current={step}
        onChangeStep={() => setStep(5)}
      ></Step4>
      <Step5
        onStop={setIsTriggered}
        onAddWeight={handleAdd}
        current={step}
        onFinish={() => setIsDone(true)}
      ></Step5>
      <Chat_modal open={isTriggered} weight={weight} />
    </HistoryTextProvider>
  );
};

export default Funnel;
