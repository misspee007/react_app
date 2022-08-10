import { createContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./styles/App.css";

import { Navbar, NotFound, Footer } from "./components/index";
import { Home, About, Contact } from "./pages/index";
import data from "./data/data.json";

export const DataContext = createContext();

function App() {
	return (
		<div className="App">
			<DataContext.Provider value={data}>
				<Navbar />
				<Routes>
					<Route path="/shortly" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/notFound" element={<NotFound />} />
					<Route path="*" element={<Navigate to={"/notFound"} replace />} />
				</Routes>
				<Footer />
			</DataContext.Provider>
		</div>
	);
}

export default App;
