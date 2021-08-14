import './style.css';

const VsPlayer = ( content = 'vs') => {
	return /* html */ `
		<span class="vs-player">${ content }</span>
	`;
}

export default VsPlayer;