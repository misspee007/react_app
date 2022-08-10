import "../styles/home.css";
import { useAppContext } from "../context/context";

import { Card, Button } from "../components/index";

const Home = () => {
	const data = useAppContext();

	return (
		<>
			<header>
				<div className="hero-section">
					<h1>{data.header.title}</h1>
					<p className="hero-txt">{data.header.copy}</p>
					<Button text="Get Started" type="btn btn-rg btn-rounded" />
				</div>
				<div className="hero-img-wrap"></div>
			</header>

			<main>
				<section className="shorten-wrap">
					<form className="shorten">
						<label>
							<input
								type="text"
								name=""
								id=""
								placeholder="Shorten a link here..."
							/>
						</label>
						<Button text="Shorten It!" type="btn btn-lg btn-rounded-sm" />
					</form>
				</section>
				<section className="advanced">
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
								<Card icon={i.icon} title={i.title} copy={i.desc} />
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
