import React from 'react';
import styled from 'styled-components';

const NextButton = () => {
  return (
    <>
      <Button>다음으로</Button>
    </>
  );
};

export default NextButton;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.text.Body2};
  display: flex;
  width: 343px;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* flex-shrink: 0; */
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary_pink};
`;
