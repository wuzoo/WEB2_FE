import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import MobileLayout from './components/layout/MobileLayout';

function App() {
  return (
    <MobileLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </MobileLayout>
  );
}

export default App;
