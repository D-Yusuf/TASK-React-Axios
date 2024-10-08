import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pets",
    element: <PetList />,
  },
  {
    path: "/pets/:id",
    element: <PetDetail />,
  },
])

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
