import { Link } from "react-router-dom";
import styles from "./form.module.css";
import { Helmet } from "react-helmet-async";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			password: "",
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required("Field is required"),
			firstName: yup.string().required("Field is required"),
			lastName: yup.string().required("Field is required"),
			password: yup
				.string()
				.min(4, "Min of 4 letters")
				.max(15, "Max of 15 letters")
				.required("Field is required"),
		}),
		onSubmit: async (values) => {
			try {
				const req = await axios.post(
					"http://localhost:5000/v1/auth/signup",
					values
				);
				console.log(req);
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<>
			<Helmet>
				<title>Create Account | Icon Movies</title>
			</Helmet>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				<h2>Create your account</h2>
				<div>
					<label>Email Address</label>
					<input
						type="text"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{/* <p>{errors.email?.message}</p> */}
				</div>
				<div>
					<label>First Name</label>
					<input
						type="text"
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
					/>
					{/* <p>{errors.firstName?.message}</p> */}
				</div>
				<div>
					<label>Last Name</label>
					<input
						type="text"
						name="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
					/>
					{/* <p>{errors.lastName?.message}</p> */}
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					{/* <p>{errors.password?.message}</p> */}
				</div>
				<p>
					Already, have an account <Link to="/auth/login">login</Link>
				</p>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</>
	);
};

export default SignUp;
