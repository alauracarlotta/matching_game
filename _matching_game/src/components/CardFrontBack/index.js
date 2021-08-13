import CardGame from '../CardGame';
import './style.css';

window.cardFrontBack = {};
window.cardFrontBack.handleClick = ( event ) => {
	const $originClick = event.target;
	const $cardFrontBack = $originClick.closest( '.card-front-back' );

	console.log( $originClick );
	console.log( $cardFrontBack );

	/* if ( $cardFrontBack.classList.contains( '-active' )) {
		
		$cardFrontBack.classList.remove( '-active' );

	} else {

		$cardFrontBack.classList.add( '-active' );
	} */

	$cardFrontBack.classList.toggle( '-active' );
	
}

const CardFrontBack = () => {

	return /* html */ `
		<article class="card-front-back" onclick="cardFrontBack.handleClick( event )">
		
			<div class="card -front">
				${ CardGame() }
			</div>

			<div class="card -back">
				${ CardGame( 'logo_javascript' , 'Logo do JavaScript' ) }
			</div>

		</article>
	`;
}

export default CardFrontBack;
