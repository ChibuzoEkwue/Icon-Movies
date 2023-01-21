import { Link } from "react-router-dom";
import styles from "./form.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const Login = () => {
	const [switchBtn, setSwitchBtn] = useState(true);

	const switchChangeHandler = () => {
		setSwitchBtn(!switchBtn);
	};
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required("Field is required"),
			password: yup
				.string()
				.min(4, "Min of 4 letters")
				.max(15, "Max of 15 letters")
				.required("Field is required"),
		}),
		onSubmit: async (values) => {
			console.log(values);
			try {
				const res = await axios.post(
					"http://localhost:5000/v1/auth/login",
					values
				);
				if (switchBtn) {
					localStorage.setItem("userDetails", values.email);
				}
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<>
			<Helmet>
				<title>Login | Icon Movies</title>
			</Helmet>
			<form onSubmit={formik.handleSubmit} className={styles.form}>
				<h2>Welcome back</h2>
				<div>
					<label>Email Address</label>
					<input
						type="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</div>

				<div>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
				</div>
				<div>
					<FormControlLabel
						value="end"
						control={
							<Switch
								color="primary"
								checked={switchBtn}
								onChange={switchChangeHandler}
							/>
						}
						label="Remember me"
						labelPlacement="end"
					/>
				</div>
				<p>
					Don't, have an account <Link to="/auth/signup">create one</Link>
				</p>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</>
	);
};

export default Login;
