import styles from "./MovieDetail.module.css";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
const data = {
	adult: false,
	backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
	genre_ids: ["Action", "Adventure", "Science Fiction"],
	id: 505642,
	original_language: "en",
	original_title: "Black Panther: Wakanda Forever",
	overview:
		"Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
	popularity: 1478.157,
	poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
	release_date: "2022-11-09",
	title: "Black Panther: Wakanda Forever",
	video: false,
	vote_average: 7.5,
	vote_count: 1553,
	trailer: ["RlOB3UALvrQ", "_Z3QKkl1WyM"],
};

const MovieDetails = () => {
	const [trailer, setTrailer] = useState(null);

	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = (e) => {
		setTrailer(e);
		setOpen(!open);
	};
	return (
		<>
			{open && (
				<div>
					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
						open={open}
						onClick={handleClose}
					>
						<iframe
							width="800"
							height="500"
							src={"https://www.youtube.com/embed/" + trailer}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</Backdrop>
				</div>
			)}
			<div className={styles.body}>
				<div className={styles.overlay}>
					<img
						src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
						alt={data.title}
					/>
					<div className={styles.info}>
						<h2>{data.title}</h2>
						<div className={styles.meta}>
							<Rating name="read-only" value={data.vote_average} readOnly />
							<div className={styles.genre}>
								{data.genre_ids.map((genre) => (
									<Chip
										label={genre}
										style={{
											color: "black",
											backgroundColor: "#62b6b7",
											fontWeight: "900",
										}}
									/>
								))}
							</div>
						</div>
						<span className={styles.desc}>{data.overview}</span>
						<div className={styles.buttons}>
							{data.trailer.map((e, index) => (
								<button
									onClick={() => {
										handleToggle(e);
									}}
								>
									Watch Trailer {index + 1}
								</button>
							))}
							<button>Add to List</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
