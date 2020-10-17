import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<img src={props.imgUrl} className="card-img-top" alt="card image" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text center">{props.text}</p>
			</div>
			<div className="card-footer bg-transparent">
				<a
					href={props.buttonUrl}
					className="btn btn-primary btn-sm ml-5">
					más info
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonUrl: PropTypes.string
};
