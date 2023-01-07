import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
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
			element: <Home />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
