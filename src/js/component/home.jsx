import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar bg-secondary d-flex justify-content-between">
			<div className="container-fluid w-25 m-0">
				<a className="navbar-brand" href="#">Navbar</a>
			</div>
			<div>
				<ul className="nav me-2 mb-2 d-flex align-items-center">
					<li className="nav-item">
						<a className="nav-link text-black" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-black" aria-current="page" href="#">About us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-black" aria-current="page" href="#">Info</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-black" aria-current="page" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
const Jumbotron = () => {
	return (
		<div className="container-lg">Adios</div>
	);
};
const Main = () => {
	return (
		<Jumbotron />
	)
};
const Home = () => {
	return (
		<NavBar />
	);
};
export default Home;
