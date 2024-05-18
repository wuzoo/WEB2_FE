import styled from 'styled-components';

const MobileLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  width: 375px;
  min-height: 100vh;

  background-color: lightgray;

  overflow: hidden;
`;

export default MobileLayout;
