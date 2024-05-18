import styled from 'styled-components';

const MobileLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  width: 375px;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.black};

  overflow: hidden;
`;

export default MobileLayout;
