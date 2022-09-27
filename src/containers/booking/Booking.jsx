import React from 'react'
import booking from '../../assets/booking.svg'
import values from '../../assets/values.svg'
import './booking.css'

const Booking = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md">
					<div className="topic-section">
						<div className="topic topic-left">Easy and Fast</div>
						<div className="des des-left">
							Book your next trip in 3 easy steps
						</div>
						<div className="">
							<img src={values} alt="" className="booking__values" />
						</div>
					</div>
				</div>
				<div className="col">
					<img src={booking} alt="" className="booking__card" />
				</div>
			</div>
		</div>
	);
}

export default Booking