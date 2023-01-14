import styles from "./featured.module.css";
const Featured = () => {
	const data = {
		backdrop_path: "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
		overview:
			"The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
		title: "Devotion",
	};
	return (
		<div className={styles.featured}>
			<div className={styles.overlay}>
				<img
					src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
					alt={data.title}
				/>
				<div className={styles.info}>
					<h2>{data.title}</h2>
					<span className="desc">{data.overview}</span>
					<div className="buttons">
						<button>Watch</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
