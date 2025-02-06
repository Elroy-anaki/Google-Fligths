import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import Main from "./pages/Main";





function Root({ isAuth }) {
  return (
    <>
      <div className="flex flex-col w-full mx-auto">
          <NavBar />
          <Main />
          <Outlet />
      </div>

    </>
  );
}


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

      </Route>
    )
  );

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App
