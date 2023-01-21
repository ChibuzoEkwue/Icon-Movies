import styles from "./MovieDetail.module.css";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
	const data = useLoaderData();
	const genre = JSON.parse(data[0].genre);

	const movieTrailer = JSON.parse(data[0].trailer);
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
				<title>{data[0].title} | Icon Movies</title>
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
						src={"https://image.tmdb.org/t/p/original" + data[0].backdrop}
						alt={data[0].title}
					/>
					<div className={styles.info}>
						<h2>{data[0].title}</h2>
						<div className={styles.meta}>
							<Rating name="read-only" value={data[0].rating} readOnly />
							<div className={styles.genre}>
								{genre.map((genre, index) => (
									<Chip
										key={index}
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
						<span className={styles.desc}>{data[0].overview}</span>
						<div className={styles.buttons}>
							{movieTrailer.map((e, index) => (
								<button
									onClick={() => {
										handleToggle(e);
									}}
									key={index}
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
