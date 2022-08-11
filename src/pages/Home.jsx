import "../styles/home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/context";
import { Card, Button } from "../components/index";
import { icon1, icon2, icon3 } from "../assets/index";

const Home = () => {
	const icons = [0, icon1, icon2, icon3];
	const data = useAppContext();
	const [userInput, setUserInput] = useState("");
	const [linkStore, setLinkStore] = useState(
		JSON.parse(localStorage.getItem("linkStore"))
	);

	useEffect(() => {
		localStorage.setItem("linkStore", JSON.stringify(linkStore));
	}, [linkStore]);

	const fetchShortenedLink = async () => {
		try {
			const response = await axios.post(
				`https://api.shrtco.de/v2/shorten?url=${userInput}`
			);
			setLinkStore({
				...linkStore,
				[userInput]: await response.data.result.full_short_link,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (e) => {
		e.preventDefault();
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("clicked");
		fetchShortenedLink();
	};

	return (
		<>
			<header>
				<div className="hero-section">
					<h1>{data.header.title}</h1>
					<p className="hero-txt">{data.header.copy}</p>
					<Button type="btn btn-rg btn-rounded">Get Started</Button>
				</div>
				<div className="hero-img-wrap"></div>
			</header>

			<main>
				<section className="shorten-wrap">
					<form className="shorten" onSubmit={handleSubmit}>
						<label>
							<input
								type="text"
								name="link"
								value={userInput}
								onChange={handleInputChange}
								placeholder="Shorten a link here..."
							/>
						</label>
						<Button type="btn btn-lg btn-rounded-sm">Shorten It!</Button>
					</form>
				</section>
				<section className="advanced">
					{linkStore && (
						<div className="links-wrap">
							{Object.entries(linkStore).map((i, index) => (
								<div key={index} className="links">
									<p className="full-link">{i[0]}</p>

									<div>
										<p className="short-link">{i[1]}</p>
										<Button
											type="btn btn-lg btn-rounded-sm"
											onClick={() => navigator.clipboard.writeText(i[1])}
										>
											Copy
										</Button>
									</div>
								</div>
							))}
						</div>
					)}
					<div className="title">
						<h2>Advanced Statistics</h2>
						<p>
							Track how your links are performing across the web with our
							advanced statistics dashboard.
						</p>
					</div>
					<div className="cards">
						{data.main.map((i) => (
							<div key={i.id}>
								<Card icon={icons[i.id]} title={i.title} copy={i.desc} />
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
