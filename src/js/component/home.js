import React from "react";

//include images into your bundle

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid px-5">
				<div className="row">
					<div className="col-xl-3">
						<Card
							title="Morro Falquí 6A+"
							imgUrl="https://www.panoramicas360.net/wp-content/uploads/2012/12/croquis-sonjannika.jpg"
							text="Escalada con vistas espectaculares. Sencilla y disfrutona. Las reuniones son muy cómodas y está bien equipada. Los alrededores hacen que se te caiga la baba cada vez que despegas tus ojos de la roca"
							buttonUrl="https://www.panoramicas360.net/sonjannika-170-m-6a-escalada-en-los-acantilados-del-norte-de-alicante/"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							title="Diedro de Hoz de Jaca V+"
							imgUrl="https://i.ytimg.com/vi/My-tDN57jDk/hqdefault.jpg"
							text="Vía muy espectacular desde el principio, con un rapel de vértigo para acceder al comienzo. No es una vía dificil pero sí muy vertical que puede jugarte malas pasadas con el coco si no estás bien"
							buttonUrl="https://www.panoramicas360.net/diedro-hoz-de-jaca/"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							title="Forronías"
							imgUrl="https://www.komandokroketa.org/escalada/forronias-sendero-limite/miniaturas/24-L5-alternativo-travesia.jpg"
							text="No puedo no poner este sector donde le echamos tantas horas, donde mi hijo está aprendiendo a escalar y yo me esfuerzo cada día por quitarme el miedo. Tiene un sector de placas que es extremadamente disfruton, donde se puede bailar en la roca y comprobar como vale más la maña que la fuerza."
							buttonUrl="https://fanaticmountain.com/2019/07/20/croquis-forronias-2019/"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							title="Artouste"
							imgUrl="https://www.lugaresdenieve.com/sites/default/files/estaciones/artouste1.jpg"
							text="Por cambiar un poco de tercio, hablemos de esquí. A pocos kilómetros de Formigal, en el otro lado de nuestros maravillosos Pirineos, se encuentra esta estación grandes pretensiones, pero bien acondicionada y con precios (y nieve) muy competititivos. Para algo les tenía que servir la inamovible nube francesa...."
							buttonUrl="https://www.nevasport.com/noticias/art/58333/artouste-se-llena-de-espanoles-gracias-a-su-nueva-politica-de-precios/"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
