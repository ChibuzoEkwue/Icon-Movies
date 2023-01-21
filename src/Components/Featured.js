import styles from "./featured.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
	const [feature, setFeature] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const {data} = await axios.get("http://localhost:5000/v1/feature");
				console.log(data[0])
				setFeature(data[0])
			} catch (error) {
				console.log(error);
			}
		};
		fetchData()
	}, []);

	return (
		<div className={styles.featured}>
			<div className={styles.overlay}>
				<img
					src={"https://image.tmdb.org/t/p/original" + feature.backdrop}
					alt={feature.title}
				/>
				<div className={styles.info}>
					<h2>{feature.title}</h2>
					<span className="desc">{feature.overview}</span>
					<div className="buttons">
						<button>Watch</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
