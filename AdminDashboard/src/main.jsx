import { createRoot } from 'react-dom/client';
import axios from 'axios';
import './index.css';
import App from './App.jsx';

// Import QueryClients
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
const queryClient = new QueryClient();


// Import UI
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
  </QueryClientProvider>
);

// Define the default in axios
axios.defaults.baseURL = 'https://sky-scrapper.p.rapidapi.com';
