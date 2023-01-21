import Container from "@mui/material/Container";
import Card from "../Components/Card";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Movies = () => {
	const data = useLoaderData();
	return (
		<>
			<Helmet>
				<title>Movies | Icon Movies</title>
			</Helmet>

			<Container style={{ marginTop: "20px" }}>
				<div className="cardLayout">
					{data.map((movie) => (
						<Link to={"/movies/" + movie.id} key={movie.id}>
							<Card image={movie.poster} name={movie.title} />
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};



export default Movies;
