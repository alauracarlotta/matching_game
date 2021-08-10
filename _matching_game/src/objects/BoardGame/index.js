import CardFrontBack from "../../components/CardFrontBack";
import './style.css';

const BoardGame = ( amountCards ) => {
	
	const $htmlCardFrontBack = CardFrontBack();
	const $htmlcontent = $htmlCardFrontBack.repeat( amountCards );

	console.log( $htmlcontent );
	return  /* html */`
		<section class='board-game'>
			${ $htmlcontent }
		</section>
	`; 
}

export default BoardGame;
