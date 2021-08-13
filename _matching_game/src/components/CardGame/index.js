import './style.css'; // por termos construido o app com o vite, conseguimos usar esse mecanismo

const CardGame = ( icon = 'alura_pixel' , alt = 'Logo da Alura' ) => {
    return /* html */`
        <article class='card-game'>
            <img src='images/${ icon }.png' alt="${ alt }">
        </article>
    `
    ;
}

export default CardGame;
