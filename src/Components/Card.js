import styles from "./Card.module.css";
const Card = ({ image, name }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={"https://image.tmdb.org/t/p/original" + image} alt={name} />
			</div>
			<div className={styles.name}>{name}</div>
		</div>
	);
};

export default Card;
