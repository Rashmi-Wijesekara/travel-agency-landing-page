import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg col-10 justify-content-center">
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
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-end"
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

						<button className="btn btn-outline-dark">
							Sign up
						</button>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								EN
							</a>
							<ul className="dropdown-menu dropdown-menu-light">
								<li>
									<a className="dropdown-item" href="#">
										AR
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										KR
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										JP
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
