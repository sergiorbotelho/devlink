import { createBrowserRouter } from 'react-router-dom'
import Private from './routes/private';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Networks from './pages/Networks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Private><Admin /></Private>
  },
  {
    path: '/admin/social',
    element: <Private><Networks /></Private>
  },
  {
    path: '*',
    element: <Error />
  }
])

export { router };