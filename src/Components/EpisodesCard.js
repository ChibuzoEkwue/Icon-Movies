import styles from "./EpisodeCard.module.css";
const EpisodesCard = ({data}) => {

	return (
		<>
			{data.map((episode, index) => (
				<div className={styles.episode}>
					<div className={styles.img}>
						<img
							src={"https://image.tmdb.org/t/p/original" + episode.still_path}
							alt={episode.title}
							
						/>
					</div>
					<div className={styles.details}>
						<h3>
							{episode.episode_no}. {episode.title}
						</h3>
						<span>{episode.overview}</span>
					</div>
					<div className={styles.meta}>
						<h5>{episode.episode_airdate}</h5>
						<h6>{episode.runtime} min</h6>
					</div>
				</div>
			))}
		</>
	);
};

export default EpisodesCard;
