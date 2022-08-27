import logo from './logo.svg';
import './App.css';
import { Divider } from '@chakra-ui/react';
import { SearchNavbar } from './components/SearchNavbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
   <div>
    <SearchNavbar />
    <AllRoutes />
   </div>
  );
}

export default App;
