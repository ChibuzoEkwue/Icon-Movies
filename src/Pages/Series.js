import Container from "@mui/material/Container";
import Card from "../Components/Card";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Series = () => {
	const data = useLoaderData();
	
	return (
		<>
			<Helmet>
				<title>Series | Icon Movies</title>
			</Helmet>
			<Container style={{ marginTop: "20px" }}>
				<div className="cardLayout">
					{data.map((series) => (
						<Link to={"/series/" + series.series_id}>
							<Card image={series.poster} name={series.title} />
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default Series;
