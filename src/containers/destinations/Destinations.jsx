import React from 'react'
import {Destination} from '../../components'
import destination1 from '../../assets/destination1.svg'
import destination2 from '../../assets/destination2.svg'
import destination3 from '../../assets/destination3.svg'

const Destinations = () => {
	const categories = [
		{
			id: 1,
			img: destination1,
			topic: "Rome, Italty",
			dollar: "$5,42k",
			days: "10 Days Trip",
		},
		{
			id: 2,
			img: destination2,
			topic: "London, UK",
			dollar: "$4.2k",
			days: "12 Days Trip",
		},
		{
			id: 3,
			img: destination3,
			topic: "Full Europe",
			dollar: "$15k",
			days: "28 Days Trip",
		},
	];

	return (
		<div className="container">
			<div className="topic-section">
				<div className="topic">Top Selling</div>
				<div className="des">Top Destinations</div>
				<div className="row">
					{categories.map((category) => (
						<div className="col-md-4">
							<Destination data={category} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Destinations