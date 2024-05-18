import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/Cell.svg';

const ChatBox = ({ variant = 'character', children }) => {
  return (
    <Box>
      <Profile src={Icon} />
      <div>
        <Name>캐릭터 이름</Name>
        <Container variant={variant}>
          <p>{children}</p>
        </Container>
      </div>
    </Box>
  );
};

export default ChatBox;

const Profile = styled.img`
  width: 48px;
  height: 48px;

  padding: 5px;

  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.white};
`;

const Box = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;

  div {
    position: relative;
    top: 10px;
  }
`;

const Name = styled.p`
  color: ${(props) => props.theme.colors.gray200};
`;

const Container = styled.div`
  position: relative;
  top: 4px;
  padding: 10px;

  width: 252px;

  border-radius: 0px 8px 8px 8px;
  background-color: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.theme.colors.gray300};
`;
