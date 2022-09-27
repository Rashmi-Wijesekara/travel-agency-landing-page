import React from 'react'
import arrow from '../../assets/arrow.svg'
import './destination.css'

const Destination = (props) => {
	const data = props.data

	return (
		<div className="container desti__full">
			<div className="desti__img-container">
				<img src={data.img} alt="" className="desti__img" />
			</div>
			{/* <div className="desti__details-container">
				<div className="row">
					<div className="col desti__details-topic">{data.topic}</div>
					<div className="col desti__details-dollar">{data.dollar}</div>
				</div>
				<div className="row">
					<div className="col-1 desti__details-arrow">
						<img src={arrow} alt="" />
					</div>
					<div className="col desti__details-days">{data.days}</div>
				</div>
			</div> */}
		</div>
	);
}

export default Destination