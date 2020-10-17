import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron jumbotron-fluid mx-5 my-3">
			<div className="container">
				<h1 className="display-4">¡Amigos, bienvenidos!</h1>
				<p className="lead">
					Me ha dado por ponerle algo de contenido que me interese a
					este ejercicio de 4geeks, así, a parte de motivarme (más
					aún) me ayuda a entender mejor como funciona React,
					Javascript. Mi cerebro es tan loco que necesito chinchetas
					de "realidad" para poder darle sentido a las cosas. Desde
					luego que me ha ayudado a entender mejor los componentes, el
					tema de las variables dentro de html, etc. Y de paso, he
					disfrutano al recordar ciertos momentos de escalada y demás
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					A tope!
				</a>
			</div>
		</div>
	);
}
