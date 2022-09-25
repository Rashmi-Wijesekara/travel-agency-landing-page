import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-md">
			<div className="container-fluid">
				<a className="navbar__logo mr-auto" href="#">
					<img
						src={logo}
						alt="logo"
						className="navbar__logo-img"
					/>
				</a>

				{/* mobile menu icon */}
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					class="collapse navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="" className="nav-link">
								Destinations
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Hotels
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Flights
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Bookings
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Login
							</a>
						</li>

						<button className="btn btn-outline-dark">Sign up</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
