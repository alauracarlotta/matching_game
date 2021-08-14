import './style.css';

import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';

const Score = () => {
	return /* html */ `
		<header class='scoreboard'>
			${ PlayerName( 'Player1' ) }
			${ VsPlayer() } 
			${ PlayerName( 'Player2' ) }
		</header>
	`;
}

export default Score;
