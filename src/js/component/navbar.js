import React from "react";

export function Navbar() {
	return (
		<nav class="navbar navbar-dark navbar-expands bg-dark sticky-top">
			<span class="navbar-brand mb-0 h1">Start Bootstrap</span>

			<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
				<li class="nav-item active p-2">
					<a class="nav-link" href="#">
						Home <span class="sr-only">(current)</span>
					</a>
				</li>
				<li class="nav-item p-2">
					<a class="nav-link" href="#">
						About
					</a>
				</li>
				<li class="nav-item p-2">
					<a class="nav-link" href="#">
						Services
					</a>
				</li>
				<li class="nav-item p-2">
					<a class="nav-link" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
