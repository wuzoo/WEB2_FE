import { Outlet } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
