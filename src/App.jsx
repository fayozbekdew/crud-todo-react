import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeLayout from './HomeLayout'
import Create from './components/Create'
import Update from './components/Update'


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <Create />,
          path: "/create",
        },
        {
          element: <Update />,
          path: "/update/:id",
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App