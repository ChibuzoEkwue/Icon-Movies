import styles from "./EpisodeCard.module.css";
const EpisodesCard = () => {
	const data = [
		{
			air_date: "2022-02-21",
			episode_number: 1,
			id: 3235991,
			name: "Pilot",
			overview:
				"Recently captured international arms dealer and criminal mastermind Elena Fedorova orchestrates a number of coordinated bank heists throughout New York for a mysterious purpose. She may have met her match, however, with principled and relentless FBI agent Val Turner, who will stop at nothing to foil her plan.",
			production_code: "101",
			runtime: 42,
			season_number: 1,
			show_id: 134375,
			still_path: "/aeRjq3efHxacsoZLDGByyhPHWjV.jpg",
			vote_average: 7.5,
			vote_count: 2,
		},
		{
			air_date: "2022-02-28",
			episode_number: 2,
			id: 3522028,
			name: "Fairytale Wedding",
			overview:
				"A kidnapping orchestrated by Elena puts Val to the test as her past resurfaces and becomes a part of the bigger play. The FBI Task Force contends with an unexpected turn of events in one of the banks.",
			production_code: "102",
			runtime: 42,
			season_number: 1,
			show_id: 134375,
			still_path: "/yZpGMpLVnFbXCj3W2wkHNjBn3xd.jpg",
			vote_average: 6.5,
			vote_count: 2,
		},
		{
			air_date: "2022-03-07",
			episode_number: 3,
			id: 3522029,
			name: "Bury the Lede",
			overview:
				"When a hostage's life is threatened, Elena calls upon a popular news anchor, known as America's most trusted man, to negotiate her release.",
			production_code: "103",
			runtime: 41,
			season_number: 1,
			show_id: 134375,
			still_path: "/1THT864jiYj8xz3nM34SChMF0zX.jpg",
			vote_average: 7,
			vote_count: 2,
		},
		{
			air_date: "2022-03-14",
			episode_number: 4,
			id: 3522030,
			name: "#1 with a Bullet",
			overview:
				"Owen helps Val understand the truth about her first encounter with Elena. As Doak becomes a pawn in Elena's game, Val discovers the link between Elena's targets.",
			production_code: "104",
			runtime: 42,
			season_number: 1,
			show_id: 134375,
			still_path: "/7gwgOM2zX7PlOihO15uh4yU2Hcl.jpg",
			vote_average: 6.5,
			vote_count: 2,
		},
		{
			air_date: "2022-03-21",
			episode_number: 5,
			id: 3586111,
			name: "Gold Rush",
			overview:
				"When Snow White operatives attempt to get into the Federal Reserve’s vault, Val races against time to prevent an economic collapse.",
			production_code: "105",
			runtime: 41,
			season_number: 1,
			show_id: 134375,
			still_path: "/yP0q556ujTQnraor6ybFWXWHI5L.jpg",
			vote_average: 7,
			vote_count: 2,
		},
		{
			air_date: "2022-03-28",
			episode_number: 6,
			id: 3598912,
			name: "Judge, Jury and Executioner",
			overview:
				"An inmate on a quest for redemption escapes prison. Doak comes up with a plan to take back one of the banks.",
			production_code: "106",
			runtime: 42,
			season_number: 1,
			show_id: 134375,
			still_path: "/xYk8O0G3rEH3gJSWs8HWtsaANWl.jpg",
			vote_average: 6.5,
			vote_count: 2,
		},
		{
			air_date: "2022-04-11",
			episode_number: 7,
			id: 3618981,
			name: "Sleepover",
			overview:
				"As a rogue assassin hunts Elena, Sergey and Owen grapple with a threat that can unravel their whole plan.",
			production_code: "107",
			runtime: 50,
			season_number: 1,
			show_id: 134375,
			still_path: "/yDmLqOHrCUdT9UjSJQakL8NMp3c.jpg",
			vote_average: 7,
			vote_count: 2,
		},
		{
			air_date: "2022-04-18",
			episode_number: 8,
			id: 3647903,
			name: "All That Glitters",
			overview: "Elena's newest target sheds light on her ultimate endgame.",
			production_code: "108",
			runtime: 50,
			season_number: 1,
			show_id: 134375,
			still_path: "/kuOU6DJBSjePCjiAK4e64bOKrXl.jpg",
			vote_average: 8,
			vote_count: 2,
		},
		{
			air_date: "2022-04-25",
			episode_number: 9,
			id: 3664985,
			name: "Beauty and the Beast",
			overview:
				"When a shocking discovery racks the country, Val's faith in job and country are tested.",
			production_code: "109",
			runtime: 41,
			season_number: 1,
			show_id: 134375,
			still_path: "/3EBz4ZT0ZyKs2fGVaHhoyX1iDde.jpg",
			vote_average: 7.5,
			vote_count: 2,
		},
		{
			air_date: "2022-05-02",
			episode_number: 10,
			id: 3672711,
			name: "Happily Ever After",
			overview:
				"An escape plan goes haywire and old foes face off. Val learns a secret about Owen.",
			production_code: "110",
			runtime: 43,
			season_number: 1,
			show_id: 134375,
			still_path: "/sLsUwXI9IwbQbEHNTA1qdvjwDle.jpg",
			vote_average: 7.5,
			vote_count: 2,
		},
	];
	return (
		<>
			{data.map((series, index) => (
				<div className={styles.episode}>
					<div className={styles.img}>
						<img
							src={"https://image.tmdb.org/t/p/original" + series.still_path}
							alt={series.name}
							
						/>
					</div>
					<div className={styles.details}>
						<h3>
							{series.episode_number}. {series.name}
						</h3>
						<span>{series.overview}</span>
					</div>
					<div className={styles.meta}>
						<h5>{series.air_date}</h5>
						<h6>{series.runtime} min</h6>
					</div>
				</div>
			))}
		</>
	);
};

export default EpisodesCard;
