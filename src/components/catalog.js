import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as gameService from '../services/gameService.js';

const itemsPerPage = 5;

const gameTemplate = (game) => html`
    <div class="card game-card" style="width: 5rem;">
        <img src=${game.image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <a href="/games/${game.gameId}" class="btn btn-primary">Details</a>
        </div>
    </div>
`;

const catalogTemplate = (games, page, totalPages) => html`
    <h1>Games catalog</h1>

    <div class="game-list">
        ${games.map(game => gameTemplate(game))}
    </div>

    <nav class="pagination" aria-label="Page navigation example">
        <ul class="pagination">
            ${page > 1 ? html`
                <li class="page-item"><a class="page-link" href="/games?page=${page - 1}">Previous</a></li>
            ` : html`
                <li class="page-item disabled"><span class="page-link">Previous</span></li>
            `}
            ${Array.from({ length: totalPages }, (_, i) => html`
                <li class="page-item ${page === i + 1 ? 'active' : ''}">
                    <a class="page-link" href="/games?page=${i + 1}">${i + 1}</a>
                </li>
            `)}
            ${page < totalPages ? html`
                <li class="page-item"><a class="page-link" href="/games?page=${page + 1}">Next</a></li>
            ` : html`
                <li class="page-item disabled"><span class="page-link">Next</span></li>
            `}
        </ul>
    </nav>
`;

export const catalogView = (querystring) => {
  gameService.getAll()
    .then(games => {
      let page = 1;
      if (querystring) {
        const searchParams = new URLSearchParams(querystring);
        page = Number(searchParams.get('page') || 1);
        const search = searchParams.get('search')?.toLowerCase();
        if (search) {
          games = games.filter(game => game.name.toLowerCase().includes(search));
        }
      }

      const totalGames = games.length;
      const totalPages = Math.ceil(totalGames / itemsPerPage);
      page = Math.max(1, Math.min(page, totalPages));

      const startIndex = (page - 1) * itemsPerPage;
      const paginatedGames = games.slice(startIndex, startIndex + itemsPerPage);

      render(catalogTemplate(paginatedGames, page, totalPages), document.getElementById('root'));
    });
};
