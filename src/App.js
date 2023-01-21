import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import MovieDetails from "./Pages/MovieDetails";
import SeriesDetails from "./Pages/SeriesDetails";
import axios from "axios";
function App() {
	const router = createBrowserRouter([
		{
			path: "/auth",
			children: [
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "signup",
					element: <SignUp />,
				},
			],
		},
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/movies",
					element: <Movies />,
					loader: async () => {
						const { data } = await axios("http://localhost:5000/v1/movies");
						return data;
					},
				},
				{
					path: "/movies/:id",
					element: <MovieDetails />,
					loader: async ({ params }) => {
						const { data } = await axios(
							"http://localhost:5000/v1/movies/" + params.id
						);
						return data;
					},
				},
				{
					path: "/series",
					element: <Series />,
					loader: async () => {
						const { data } = await axios("http://localhost:5000/v1/series");
						return data;
					},
				},
				{
					path: "/series/:id",
					element: <SeriesDetails />,
					loader: async ({params}) => {
						const { data } = await axios(
							"http://localhost:5000/v1/series/" + params.id
						);
						return data;
					},
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
