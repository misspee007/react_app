import "../styles/contact.css";
import { useState } from "react";
import { Button } from "../components/index";

const Contact = () => {
	const [value, setValue] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		let input = e.target.value;
		setValue({ ...value, [e.target.name]: input });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(Object.entries(value));
	};

	return (
		<div className="contact-wrap">
			<div className="contact-details">
				<h1>Contact Us</h1>
				<div className="address">
					<i className="bi bi-geo-alt"></i>
					<p>1B St Bottles Street, Bar Beach Avenue</p>
				</div>
				<div>
					<i className="bi bi-telephone"></i>
					<a href="tel:+2348063300569">+234 (0) 806 330 0569</a>
				</div>
				<div>
					<i className="bi bi-envelope"></i>
					<a href="mailto:mail@shortly.com">mail@shortly.com</a>
				</div>
			</div>
			<div className="form-wrap">
				<h1>Get in Touch</h1>
				<p className="copy">
					Got a special request or need some information? Reach out to us and
					we’ll respond as soon as possible
				</p>
				<form onSubmit={handleSubmit}>
					<div>
						<label>
							<input
								type="text"
								placeholder="Your Name"
								name="name"
								id="name"
								value={value.name}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div>
						<label>
							<input
								type="email"
								placeholder="Your email"
								name="email"
								id="email"
								value={value.email}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div>
						<label>
							<input
								type="tel"
								placeholder="Your phone number"
								name="phone"
								id="phone"
								value={value.phone}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div>
						<textarea
							name="message"
							id="message"
							placeholder="Your message"
							value={value.message}
							onChange={handleChange}
						></textarea>
					</div>
					<Button type="btn btn-rounded btn-rg">Send</Button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
