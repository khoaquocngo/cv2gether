import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'config/theme';
import Confession from 'pages/Confession';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Confession />} />
          <Route path='/confession' element={<Confession />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
