import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import BoardGame from './src/objects/BoardGame';
import Score from './src/objects/Score';

const $root = document.querySelector( '#root' );

$root.insertAdjacentHTML( 
	'beforeend',
	`
	${ Score() }
	${ BoardGame(6) }
	`
);
