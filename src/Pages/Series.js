import Container from "@mui/material/Container";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Series = () => {
	const series = [
		{
			backdrop_path: "/4fvHPyILjx9oPApaskoXbkeIlzF.jpg",
			first_air_date: "2023-01-01",
			genre_ids: ["Crime", "Drama"],
			id: 156902,
			name: "Kaleidoscope",
			origin_country: ["US"],
			original_language: "en",
			original_name: "Kaleidoscope",
			overview:
				"A master thief and his crew attempt an epic and elaborate heist worth $7 billion dollars — but betrayal, greed and other threats undermine their plans.",
			popularity: 154.287,
			poster_path: "/2nXJoSB5Y6R9ne7pjqL7Cs3zqY1.jpg",
			vote_average: 7.2,
			vote_count: 25,
		},

		{
			backdrop_path: "/r178SNOqH4VD1aydevTdiULhJ4R.jpg",
			first_air_date: "2022-12-16",
			genre_ids: ["Drama"],
			id: 215874,
			name: "Far from Home",
			origin_country: ["NG"],
			original_language: "en",
			original_name: "Far from Home",
			overview:
				"Through a scholarship to a top school, Ishaya ends up in the luxurious world of the happy few in Nigeria, but a secret threatens not only to put an end to this.",
			popularity: 42.401,
			poster_path: "/svGLFlbjDKx67CVUEFtPGooW25F.jpg",
			vote_average: 8.4,
			vote_count: 95,
		},
		{
			backdrop_path: "/ssNFsHt6eqX6MApCSovD2tk7d3k.jpg",
			first_air_date: "2022-05-05",
			genre_ids: ["Crime", "Drama"],
			id: 197428,
			name: "Blood Sisters",
			origin_country: ["NG", "US"],
			original_language: "en",
			original_name: "Blood Sisters",
			overview:
				"Connected by a dangerous secret, best friends Sarah and Kemi are forced to flee after a wealthy groom disappears at his own engagement party.",
			popularity: 6.369,
			poster_path: "/7Y3B0DXJztLj7CAZ4QVGfV6iksX.jpg",
			vote_average: 8.4,
			vote_count: 112,
		},
		{
			backdrop_path: "/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
			first_air_date: "2022-11-13",
			genre_ids: ["Crime", "Drama"],
			id: 153312,
			name: "Tulsa King",
			origin_country: ["US"],
			original_language: "en",
			original_name: "Tulsa King",
			overview:
				"Just after he is released from prison after 25 years, New York mafia capo Dwight “The General” Manfredi is unceremoniously exiled by his boss to set up shop in Tulsa, Okla. Realizing that his mob family may not have his best interests in mind, Dwight slowly builds a “crew” from a group of unlikely characters, to help him establish a new criminal empire in a place that to him might as well be another planet.",
			popularity: 793.196,
			poster_path: "/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg",
			vote_average: 8.7,
			vote_count: 164,
		},
		{
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
		},
	];
	return (
		<>
			<Helmet>
				<title>Series | Icon Movies</title>
			</Helmet>
			<Container style={{ marginTop: "20px" }}>
				<div className="cardLayout">
					{series.map((series) => (
						<Link to={"/series/" + series.id}>
							<Card image={series.poster_path} name={series.name} />
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default Series;
