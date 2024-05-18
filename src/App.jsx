import { Outlet } from 'react-router-dom';
import MobileLayout from './components/layout/MobileLayout';

function App() {
  return (
    <MobileLayout>
      <main>
        <Outlet />
      </main>
    </MobileLayout>
  );
}

export default App;
