import Container from "@mui/material/Container";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Movies = () => {
	const movies = [
		{
			adult: false,
			backdrop_path: "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
			genre_ids: ["Action", "Drama", "Family"],
			id: 653851,
			original_language: "en",
			original_title: "Devotion",
			overview:
				"The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
			popularity: 38.63,
			poster_path: "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
			release_date: "2022-11-23",
			title: "Devotion",
			video: false,
			vote_average: 6.9,
			vote_count: 27,
			trailer: ["NCDEGP6VjYY", "nIvBBd8pU1s"],
		},
		{
			adult: false,
			backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
			genre_ids: [
				"Animation",
				"Action",
				"Adventure",
				"Comedy",
				"Family",
				"Fantasy",
			],
			id: 315162,
			original_language: "en",
			original_title: "Puss in Boots: The Last Wish",
			overview:
				"Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
			popularity: 3946.55,
			poster_path: "/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
			release_date: "2022-12-07",
			title: "Puss in Boots: The Last Wish",
			video: false,
			vote_average: 8.5,
			vote_count: 591,
			trailer: ["Y5zqweZAEKI", "Oivho_DwIEc", "tHb7WlgyaUc"],
		},
		{
			adult: false,
			backdrop_path: "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
			genre_ids: ["Mystery", "Thriller", "Comedy"],
			id: 661374,
			original_language: "en",
			original_title: "Glass Onion: A Knives Out Mystery",
			overview:
				"World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
			popularity: 4617.756,
			poster_path: "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
			release_date: "2022-11-23",
			title: "Glass Onion: A Knives Out Mystery",
			video: false,
			vote_average: 7.1,
			vote_count: 2044,
			trailer: ["-xR_lBtEvSc", "gj5ibYSz8C0"],
		},
		{
			adult: false,
			backdrop_path: "/5gPQKfFJnl8d1edbkOzKONo4mnr.jpg",
			genre_ids: ["Science Fiction", "Adventure", "Action"],
			id: 76600,
			original_language: "en",
			original_title: "Avatar: The Way of Water",
			overview:
				"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
			popularity: 5332.225,
			poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
			release_date: "2022-12-14",
			title: "Avatar: The Way of Water",
			video: false,
			vote_average: 7.7,
			vote_count: 3497,
			trailer: ["o5F8MOz_IDw", "d9MyW72ELq0"],
		},
		{
			adult: false,
			backdrop_path: "/6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg",
			genre_ids: ["Action", "Comedy", "Crime", "Thriller"],
			id: 899112,
			original_language: "en",
			original_title: "Violent Night",
			overview:
				"When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
			popularity: 3848.213,
			poster_path: "/nhXjUvOvq7rJlvJFCrZMUUJ9Mn0.jpg",
			release_date: "2022-11-30",
			title: "Violent Night",
			video: false,
			vote_average: 7.7,
			vote_count: 758,
			trailer: ["a53e4HHnx_"],
		},
		{
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
		},
		{
			adult: false,
			backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
			genre_ids: ["Action", "Drama", "History"],
			id: 724495,
			original_language: "en",
			original_title: "The Woman King",
			overview:
				"The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
			popularity: 1924.667,
			poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
			release_date: "2022-09-15",
			title: "The Woman King",
			video: false,
			vote_average: 7.8,
			vote_count: 947,
			trailer: ["3RDaPV_rJ1Y"],
		},
		{
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
		},
		{
			adult: false,
			backdrop_path: "/rdOIqwR7P7fvTpC6LILSmQxEg6O.jpg",
			genre_ids: ["Action", "Thriller", "Crime"],
			id: 763285,
			original_language: "en",
			original_title: "Ambulance",
			overview:
				"Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
			popularity: 100.728,
			poster_path: "/kuxjMVuc3VTD7p42TZpJNsSrM1V.jpg",
			release_date: "2022-03-16",
			title: "Ambulance",
			video: false,
			vote_average: 6.8,
			vote_count: 1363,
			trailer: ["7NU-STboFeI", "tFWOyZNHjX8"],
		},
		{
			adult: false,
			backdrop_path: "/9IDJpHROaC0S1ZlIxrvzOcOX5yC.jpg",
			genre_ids: ["Animation", "Action", "Adventure", "Crime", "Comedy"],
			id: 629542,
			original_language: "en",
			original_title: "The Bad Guys",
			overview:
				"When the Bad Guys, a crew of criminal animals, are finally caught after years of heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
			popularity: 142.353,
			poster_path: "/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
			release_date: "2022-03-17",
			title: "The Bad Guys",
			video: false,
			vote_average: 7.7,
			vote_count: 1268,
			trailer: ["m8Xt0yXaDPU"],
		},
		{
			adult: false,
			backdrop_path: "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
			genre_ids: ["Drama", "Action", "Thriller"],
			id: 545609,
			original_language: "en",
			original_title: "Extraction",
			overview:
				"Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
			popularity: 48.695,
			poster_path: "/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
			release_date: "2020-04-24",
			title: "Extraction",
			video: false,
			vote_average: 7.3,
			vote_count: 4789,
			trailer: ["L6P3nI6VnlY"],
		},
		{
			adult: false,
			backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
			genre_ids: ["Animation", "Family", "Comedy", "Fantasy"],
			id: 508947,
			original_language: "en",
			original_title: "Turning Red",
			overview:
				"Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
			popularity: 265.016,
			poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
			release_date: "2022-03-10",
			title: "Turning Red",
			video: false,
			vote_average: 7.5,
			vote_count: 3709,
			trailer: ["XdKzUbAiswE"],
		},
	];
	return (
		<>
			<Helmet>
				<title>Movies | Icon Movies</title>
			</Helmet>

			<Container style={{ marginTop: "20px" }}>
				<div className="cardLayout">
					{movies.map((movie) => (
						<Link to={"/movies/" + movie.id}>
							<Card image={movie.poster_path} name={movie.title} />
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default Movies;
