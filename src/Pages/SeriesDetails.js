import styles from "./MovieDetail.module.css";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import EpisodesCard from "../Components/EpisodesCard";
import { Helmet } from "react-helmet-async";
const data = {
	backdrop_path: "/jfOU0MImgyeNX2vJejSOP9m70nR.jpg",
	first_air_date: "2022-02-21",
	genre_ids: ["Crime", "Drama"],
	id: 134375,
	name: "The Endgame",
	origin_country: ["US"],
	original_language: "en",
	original_name: "The Endgame",
	overview:
		"A high-stakes thriller about Elena Federova, a very recently captured international arms dealer and brilliant criminal mastermind who even in captivity orchestrates a number of coordinated bank heists, and Val Turner, the principled, relentless and socially outcast FBI agent who will stop at nothing to foil her ambitious plan.",
	popularity: 8.139,
	poster_path: "/qH0BuRkZmP6sdi8R6tvlvwdBxmo.jpg",
	vote_average: 7.9,
	vote_count: 58,
	trailer: ["0-Lxz-NBjXE"],
};

const SeriesDetails = () => {
	const [trailer, setTrailer] = useState(null);
	const [season, setSeason] = useState(1);
	const [open, setOpen] = useState(false);
	const handleSeasonChange = (e) => {
		setSeason(e.target.value);
	};
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
			<title>{data.original_name} | Icon Movies</title>
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
						alt={data.name}
					/>
					<div className={styles.info}>
						<h2>{data.name}</h2>
						<div className={styles.meta}>
							<Rating name="read-only" value={data.vote_average} readOnly />
							<div className={styles.genre}>
								{data.genre_ids.map((genre, index) => (
									<Chip
										label={genre}
										style={{
											color: "black",
											backgroundColor: "#62b6b7",
											fontWeight: "900",
										}}
										key={index}
									/>
								))}
							</div>
							<Select
								style={{ minWidth: 120, backgroundColor: "white" }}
								value={season}
								onChange={handleSeasonChange}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
							>
								<MenuItem value={1}>Season 1</MenuItem>
								<MenuItem value={2}>Season 2</MenuItem>
								<MenuItem value={3}>Season 3</MenuItem>
							</Select>
						</div>
						<span className={styles.desc}>{data.overview}</span>
						<div className={styles.buttons}>
							{data.trailer.map((e, index) => (
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
			<Container style={{ marginTop: "2em" }}>
				<h2>Episodes</h2>
				<div className={styles.episodes}>
					<EpisodesCard />
				</div>
			</Container>
		</>
	);
};

export default SeriesDetails;
