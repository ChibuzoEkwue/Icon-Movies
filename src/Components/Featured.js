import styles from "./featured.module.css";
const Featured = () => {
	const data = {
		backdrop_path: "/6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg",
		overview:
			"When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
title: "Violent Night",
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
