import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import MovieDetails from "./Pages/MovieDetails";
import SeriesDetails from "./Pages/SeriesDetails"
function App() {
	const router = createBrowserRouter([
		{
			path: "/auth/login",
			element: <Login />,
		},
		{
			path: "/auth/signup",
			element: <SignUp />,
		},
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/movies",
					element: <Movies />,
				},
				{
					path: "/movies/:id",
					element: <MovieDetails />,
				},
				{
					path: "/series",
					element: <Series />,
				},
				{
					path: "/series/:id",
					element: <SeriesDetails />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
