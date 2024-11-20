
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Header from './components/Header';
import ProductItem from './components/productItem';




function NavHoster(){

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Header />,
        children: [
          {
            path: "/Home",
            element: <Home />,
          },
          {
            path: "/Product",
            element: <Products />,
          },
          {
            path: "/Product/:itemId",
            element: <ProductItem />,
          },
        ],
      },
    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default NavHoster