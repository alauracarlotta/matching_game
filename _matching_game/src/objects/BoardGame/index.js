import CardGame from "../../components/CardGame";
import './style.css';

const BoardGame = ( amountCards ) => {
	
	const $htmlCardGame = CardGame();
	const $htmlcontent = $htmlCardGame.repeat( amountCards );

	console.log( $htmlcontent );
	return  /* html */`
		<section class='board-game'>
			${ $htmlcontent }
		</section>
	`; 
}

export default BoardGame;
