import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' element={<h1>MyApp</h1>} />)
);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
