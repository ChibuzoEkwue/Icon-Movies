import { Link } from "react-router-dom";
import styles from "./form.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Helmet } from "react-helmet-async";
const Login = () => {
	return (
		<>
			<Helmet>
				<title>Login | Icon Movies</title>
			</Helmet>
			<form className={styles.form}>
				<h2>Welcome back</h2>
				<div>
					<label>Email Address</label>
					<input type="email" />
				</div>

				<div>
					<label>Password</label>
					<input type="password" />
				</div>
				<div>
					<FormControlLabel
						value="end"
						control={<Switch color="primary" />}
						label="Remember me"
						labelPlacement="end"
					/>
				</div>
				<p>
					Don't, have an account <Link to="/auth/signup">create one</Link>
				</p>
				<button className="btn">Submit</button>
			</form>
		</>
	);
};

export default Login;
