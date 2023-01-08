import styles from "./groups.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";
const Groups = ({ data, heading, path }) => {
	return (
		<div>
			<div className={styles.header}>
				<h3>{heading}</h3>
				<Link to={path} style={{textDecoration:'none',color:"black"}}>
					<span>View More</span>
				</Link>
			</div>
			<div className="cardLayout">
				{data.map((e) => (
					<Link to={`${path}/${e.id}`}>
						<Card image={e.poster_path} name={e.name} key={e.id} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Groups;
