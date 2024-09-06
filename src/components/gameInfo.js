import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as gameService from '../services/gameService.js';

const gameTemplate = (game, onLike, isClicked) => html`
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${game.image} class="img-fluid rounded-start" alt=${game.title}>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${game.name}</h5>
        <p class="card-text">${game.description}</p>
        <p class="card-text"><small class="text-body-secondary">Rating: ${game.rating}</small></p>
        <p class="likes">Likes: ${game.likes || 0}</p>
        <button @click=${() => onLike(game)} class="btn btn-primary" ?disabled=${isClicked}>${isClicked ? 'Liked' : 'Like'}</button>
      </div>
    </div>
  </div>
</div>
`;


export const gameView = (context) => {
  const onLike = (game) => {
    if (localStorage.getItem('userId')) {
      gameService.like(game.gameId)
      if(!game.isClicked){
        gameService.like(gameId)
        .then(res => {
          context.page.redirect(`/games/${game.gameId}`);
        })
        .catch(error => {
          console.error('Error liking the game:', error);
        });
      }
    }
    
  };

  const gameId = context.params.gameId;

  gameService.getOne(gameId)
    .then(game => {
      if (game) {
        const isClicked = game.isClicked || false;
        render(gameTemplate(game, onLike, isClicked), document.getElementById('root'));
      } else {
        render(html`<p>Game not found!</p>`, document.getElementById('root'));
      }

    })
    .catch(err => {
      render(html`<p>Error loading game details!</p>`, document.getElementById('root'));
    });
};


