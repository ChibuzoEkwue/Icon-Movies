import Featured from "../Components/Featured";
import Container from "@mui/material/Container";
import Groups from "../Components/Groups";
import { Helmet } from "react-helmet-async";
const Home = () => {
	const series = [
		{
			id: 156902,
			name: "Kaleidoscope",
			poster_path: "/2nXJoSB5Y6R9ne7pjqL7Cs3zqY1.jpg",
		},

		{
			id: 215874,
			name: "Far from Home",
			poster_path: "/svGLFlbjDKx67CVUEFtPGooW25F.jpg",
		},
		{
			id: 197428,
			name: "Blood Sisters",
			poster_path: "/7Y3B0DXJztLj7CAZ4QVGfV6iksX.jpg",
		},
		{
			id: 153312,
			name: "Tulsa King",
			poster_path: "/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg",
		},
	];
	const movies = [
		{
			id: 653851,
			poster_path: "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
			name: "Devotion",
		},
		
		{
			id: 76600,
			poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
			name: "Avatar: The Way of Water",
		},
		{
			id: 899112,
			poster_path: "/nhXjUvOvq7rJlvJFCrZMUUJ9Mn0.jpg",
			name: "Violent Night",
		},
		{
			id: 436270,
			poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
			name: "Black Adam",
		},
	];
	return (
		<>
		<Helmet>
			<title>Icon Movies</title>
		</Helmet>
			<Featured />
			<Container>
				<Groups data={series} heading="Top Series" path="/series" />
				<Groups data={movies} heading="Top Movies" path="/movies" />
			</Container>
		</>
	);
};

export default Home;
