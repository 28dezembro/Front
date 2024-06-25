import React from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GetJogadores from './page/GET';
import PutJogadores from './page/PUT';
import DeleteJogadores from './page/DELETE';
import PostJogador from './page/POST';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/get",
    element: <GetJogadores />
  },
  {
    path: "/put",
    element: <PutJogadores />
  },
  {
    path: "/delete",
    element: <DeleteJogadores />
  },
  {
  path: "/post",
  element: <PostJogador />
  },
  {
    path: "/teste",
    element: 
    <>
      <GetJogadores />
      <div className="card-container">
        <PutJogadores />
        <DeleteJogadores />
        <PostJogador />
      </div>
    </>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
