import styled, { css } from 'styled-components';

const Button = ({ variant, children }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;

  padding: 10px 16px;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: blue;
      color: white;
    `}

  ${(props) =>
    props.variant === 'default' &&
    css`
      background-color: gray;
    `}
`;
