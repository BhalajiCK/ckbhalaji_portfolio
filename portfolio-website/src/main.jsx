import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import './index.css'; // Tailwind base styles
import './styles/global.css'; // Custom global styles & cursor CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CustomCursor />
  </StrictMode>,
);
