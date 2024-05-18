import React from 'react';
import styled from 'styled-components';
import Battery from '../../assets/Battery.svg?react';
import Cell from '../../assets/Cell.svg?react';
import Wif from '../../assets/Wifi.svg?react';

const Header = () => {
  return (
    <HeaderWrapper>
      <Time>9:41</Time>
      <Icons>
        <Cell />
        <Wif />
        <Battery />
      </Icons>
    </HeaderWrapper>
  );
};

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Time = styled.p`
  color: ${(props) => props.theme.colors.white};
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;

  padding: 14px 21px;
`;

export default Header;
