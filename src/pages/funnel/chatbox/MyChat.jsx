import React from 'react';
import styled from 'styled-components';

const MyChat = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};

export default MyChat;

const Container = styled.div`
  padding: 10px;

  place-self: end;

  width: 252px;

  border-radius: 8px 0px 8px 8px;
  background-color: #ffe24a;
  color: ${(props) => props.theme.colors.gray900};
`;
