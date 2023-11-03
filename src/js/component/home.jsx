import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar bg-dark d-flex justify-content-between">
			<div className="container-fluid w-25 m-0">
				<a className="navbar-brand text-light" href="#">Navbar</a>
			</div>
			<div>
				<ul className="nav me-2 mb-2 d-flex align-items-center">
					<li className="nav-item">
						<a className="nav-link text-light" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" aria-current="page" href="#">About us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" aria-current="page" href="#">Info</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" aria-current="page" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
const Jumbotron = () => {
	return (
		<div className="container-fluid bg-tertiary w-75 p-4">
			<h1>A Warm Welcome!</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi, soluta necessitatibus, odit mollitia omnis laborum deserunt deleniti, fugit molestias facilis optio iste laboriosam blanditiis ea minus accusantium ratione accusamus.</p>
			<button className="btn btn-primary">Call to action</button>
		</div>
	);
};
const Cards = () => {
	return (
		<div className="container-fluid w-75 p-4 d-flex g-4 flex-wrap flex-lg-nowrap">
			<div className="card">
				<img href="" className="card-img-top" alt="Card image" />
				<div className="card-body">
					<h5 className="card-title text-center">Card Title</h5>
					<p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda laudantium corporis. Natus in obcaecati molestias architecto expedita omnis praesentium amet perferendis? Dolore quos velit sint laboriosam tenetur saepe eveniet?</p>
					<a href="#" className="btn btn-primary align-self-center">Go Somewhere</a>
				</div>
			</div>
			<div className="card">
				<img href="" className="card-img-top" alt="Card image" />
				<div className="card-body">
					<h5 className="card-title text-center">Card Title</h5>
					<p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda laudantium corporis. Natus in obcaecati molestias architecto expedita omnis praesentium amet perferendis? Dolore quos velit sint laboriosam tenetur saepe eveniet?</p>
					<a href="#" className="btn btn-primary">Go Somewhere</a>
				</div>
			</div>
			<div className="card">
				<img href="" className="card-img-top" alt="Card image" />
				<div className="card-body">
					<h5 className="card-title text-center">Card Title</h5>
					<p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda laudantium corporis. Natus in obcaecati molestias architecto expedita omnis praesentium amet perferendis? Dolore quos velit sint laboriosam tenetur saepe eveniet?</p>
					<a href="#" className="btn btn-primary">Go Somewhere</a>
				</div>
			</div>
		</div>
	);
};
const Footer = () => {
	return (
		<footer className="container-fluid w-100 bg-dark">
			<p className="text-light fs-2 text-center">&copy; Your website 2023</p>
		</footer>
	)
}
const Main = () => {
	return (
		<div>
			<Jumbotron />
			<Cards />
		</div>
		
	)

	
};
const Home = () => {
	return (
		<div>
			<NavBar />
			<Main />
			<Footer />
		</div>
		
	);
};
export default Home;
