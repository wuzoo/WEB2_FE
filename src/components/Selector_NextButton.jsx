import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NextButton = ({ color }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    color && navigate('/scene');
  };
  return (
    <>
      <Button $isColor={color} onClick={handleNext}>
        다음으로
      </Button>
    </>
  );
};

export default NextButton;

const Button = styled.button`
  ${(props) =>
    props.$isColor
      ? css`
          background-color: ${({ theme }) => theme.colors.primary_pink};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: ${({ theme }) => theme.colors.gray700};
          color: ${({ theme }) => theme.colors.gray300};
        `}

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

  margin-bottom: 16px;
  /* 여기서 마진바텀은 푸터와의 간격임 */
`;
