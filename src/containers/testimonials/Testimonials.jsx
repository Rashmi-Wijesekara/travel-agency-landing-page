import React from 'react'
import c1 from '../../assets/company1.svg'
import c2 from '../../assets/company2.svg'
import c3 from '../../assets/company3.svg'
import c4 from '../../assets/company4.svg'
import c5 from '../../assets/company5.svg'
import './testimonials.css'

const Testimonials = () => {
	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="col testi__img-container">
					<img src={c1} alt="" className="testi__img" />
				</div>
				<div className="col testi__img-container">
					<img src={c2} alt="" className="testi__img" />
				</div>
				<div className="col testi__img-container">
					<img src={c3} alt="" className="testi__img" />
				</div>
				<div className="col testi__img-container">
					<img src={c4} alt="" className="testi__img" />
				</div>
				<div className="col testi__img-container">
					<img src={c5} alt="" className="testi__img" />
				</div>
			</div>
		</div>
	)
}

export default Testimonials