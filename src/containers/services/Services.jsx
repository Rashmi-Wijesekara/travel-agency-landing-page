import React from 'react'
import {Category} from '../../components'
import './services.css'

import service1 from '../../assets/service1.svg'
import service2 from '../../assets/service2.svg'
import service3 from '../../assets/service3.svg'
import service4 from '../../assets/service4.svg'

const Services = () => {
	const categories = [
		{
			id: 1,
			img: service1,
			topic: "Calculated Weather ",
			description:
				"Built Wicket longer admire do barton vanity itself do in it.",
		},
		{
			id: 2,
			img: service2,
			topic: "Best Flights",
			description:
				"Engrossed listening. Park gate sell they west hard for the.",
		},
		{
			id: 3,
			img: service3,
			topic: "Local Events",
			description:
				"Barton vanity itself do in it. Preferd to men it engrossed listening. ",
		},
		{
			id: 4,
			img: service4,
			topic: "Customization",
			description: "We deliver outsourced aviation services for military customers",
		},
	];

	return (
		<div className="container">
			<div className="topic-section">
				<div className="topic">CATEGORY</div>
				<div className="des">We Offer Best Services</div>
				<div className="row">
					{categories.map((category) => (
						<div className="col-md-3">
							<Category data={category} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services