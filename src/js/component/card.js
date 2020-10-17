import React from "react";

export function Card() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-3">
					<div className="card" style={{ width: "220px;" }}>
						<div className="card-body">
							<h5 className="card-title text-center">
								Card title
							</h5>
							<p className="card-text text center">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
						</div>
						<div className="card-footer bg-transparent">
							<a
								href="#"
								className="btn btn-primary d-flex justify-content-center mx-2">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "220px;" }}>
						<div className="card-body">
							<h5 className="card-title text-center">
								Card title
							</h5>
							<p className="card-text text center">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "220px;" }}>
						<div className="card-body">
							<h5 className="card-title text-center">
								Card title
							</h5>
							<p className="card-text text center">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "220px;" }}>
						<div className="card-body">
							<h5 className="card-title text-center">
								Card title
							</h5>
							<p className="card-text text center">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
