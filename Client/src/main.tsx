import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'

import App from './App';
import ErrorPage from './pages/ErrorPage';
// import MainPage from './pages/MainPage';
import Login from './pages/login';
import MyBooks from './pages/myBooks';
import Recommend from './pages/recommend';
import Search from './pages/search';
import Signup from './pages/signup';
import ProtectRoute from './components/protectRoute';

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
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/myBooks',
        element: (
          <ProtectRoute>
            <MyBooks />
          </ProtectRoute>
          ),
      },
      {
        path: '/recommend',
        element: <Recommend />
      },
      {
        path: '/signup',
        element: <Signup />
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
