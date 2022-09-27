import React from "react";
import "./category.css";

const Category = (props) => {
	const data = props.data;

	return (
		<div className="container category__outer">
			{data.id !== 2 ? (
				<>
					<img
						src={data.img}
						alt=""
						className="category__img"
					/>
					<div className="category__details">
						<div className="category__topic">
							{data.topic}
						</div>
						<div className="category__des">
							{data.description}
						</div>
					</div>
				</>
			) : (
				<>
					<img
						src={data.img}
						alt=""
						className="category__img-large"
					/>
					<div className="category__details-large">
						<div className="category__topic">
							{data.topic}
						</div>
						<div className="category__des">
							{data.description}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Category;
