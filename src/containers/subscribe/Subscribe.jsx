import React from 'react'
import './subscribe.css'

const Subscribe = () => {
	return (
		<div className="container subscribe__bg">
			<div className="subscribe__inner">
				<div className="subscribe__topic">
					Subscribe to get information, latest news and
					other interesting offers about Cobham
				</div>

				<div className="row align-items-center subscribe__btn-section">
					<div className="col-8">
						<input
							type="text"
							className="form-control subscribe__input"
							placeholder="Your Email"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>
					<div className="col-4">
						<button className="btn btn-primary subscribe__btn">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Subscribe