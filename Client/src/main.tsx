import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './index.css'

import App from './App';
import ErrorPage from './pages/ErrorPage';
<<<<<<< HEAD
//import MainPage from './pages/MainPage';
import Login from './pages/login';
=======
// import MainPage from './pages/MainPage';
// import Login from './pages/login';
>>>>>>> main
import MyBooks from './pages/myBooks';
import Recommend from './pages/recommend';
import Search from './pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Search />
      }, 
<<<<<<< HEAD
      {
        path: '/login',
        element: <Login />
      },
=======
      // {
      //   path: '/login',
      //   element: <Login />
      // },
>>>>>>> main
      {
        path: '/myBooks',
        element: <MyBooks />
      },
      {
        path: '/recommend',
        element: <Recommend />
      },
      {
        path: '/search',
        element: <Search />
      },
    ]
  }
]);


const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
