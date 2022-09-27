import React from "react";
import heroImg from "../../assets/hero-img.svg";
import playBtn from "../../assets/play-btn.svg";

import "./heroBanner.css";

const HeroBanner = () => {
	return (
		<div className="container-lg mt-5 scale-up-center">
			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-6 ">
					<div className="hero__red-header">
						Best Destinations around the world
					</div>
					<div className="hero__header">
						Travel, enjoy and live a new and full life
					</div>
					<div className="hero__para">
						Built Wicket longer admire do barton vanity
						itself do in it. Preferred to sportsmen it
						engrossed listening. Park gate sell they west
						hard for the.
					</div>

					<div className="row hero__btn-section">
						<div className="col-6 col-md-4">
							<button className="btn btn-warning">
								Find out more
							</button>
						</div>
						<div className="col-6 col-md">
							<div className="row align-items-start hero__play-btn-container">
								<div className="col-4 col-md-3">
									<img
										src={playBtn}
										alt=""
										className="hero__play-img"
									/>
								</div>
								<div className="col hero__play">
									Play Demo
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-md">
					<img src={heroImg} alt="" className="hero__img" />
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
