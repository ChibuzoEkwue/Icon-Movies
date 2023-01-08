import { Link } from "react-router-dom";
import styles from "./form.module.css";
const SignUp = () => {
	return (
		<form className={styles.form}>
			<h2>Create your account</h2>
			<div>
				<label>Email Address</label>
				<input type="text" />
			</div>
			<div>
				<label>First Name</label>
				<input type="text" />
			</div>
			<div>
				<label>Last Name</label>
				<input type="text" />
			</div>
			<div>
				<label>Password</label>
				<input type="password" />
			</div>
			<p>
				Already, have an account <Link to="/auth/login">login</Link>
			</p>
			<button className='btn'>Submit</button>
		</form>
	);
};

export default SignUp;
