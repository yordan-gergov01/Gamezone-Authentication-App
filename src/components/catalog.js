import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as gameService from '../services/gameService.js';

const gameTemplate = (game) => html`
    <div class="card game-card" style="width: 18rem;">
  <img src=${game.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.name}</h5>
    <a href="/games/${game.gameId}" class="btn btn-primary">Details</a>
  </div>
</div>
`;

const catalogTemplate = (games) => html`
    <h1>Games catalog</h1>

    <div class="game-list">
        ${games.map(x => gameTemplate(x))}
    </div>
`;

export const catalogView = (querystring) => {
  gameService.getAll()
    .then(games => {
      if (querystring) {
        const searchParams = new URLSearchParams(querystring);
        const search = searchParams.get('search').toLowerCase();
        games = games.filter(x => x.name.toLowerCase().includes(search));
      }

      render(catalogTemplate(games), document.getElementById('root'));
    });
};