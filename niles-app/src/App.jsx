import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, HomeNav, WhyNile, Features } from "./pages";

const router = createBrowserRouter([
{
  path:'/',
  element: <HomeNav/>,
  children:[
    {
      index:true,
      element:<HomePage/>
    },
    {
      path:'#',
      element:<WhyNile/>
    },
    {
      path:'#',
      element:<Features/>
    }
  ]
}
])
const App = () => {
  return (
      <main>
      <RouterProvider router={router} />
    </main>
  );
};
export default App;
