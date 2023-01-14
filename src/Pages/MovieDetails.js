import styles from "./MovieDetail.module.css";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const data = {
	adult: false,
	backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
	genre_ids: ["Action", "Fantasy", "Science Fiction"],
	id: 436270,
	original_language: "en",
	original_title: "Black Adam",
	overview:
		"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
	popularity: 3025.564,
	poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
	release_date: "2022-10-19",
	title: "Black Adam",
	video: false,
	vote_average: 7.2,
	vote_count: 3495,
	trailer: ["X0tOpBuYasI", "mkomfZHG5q4"],
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
			<Helmet>
				<title>{data.title} | Icon Movies</title>
			</Helmet>
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
