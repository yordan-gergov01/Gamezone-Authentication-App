import page from '../node_modules/page/page.mjs';
import { catalogView } from './components/catalog.js';
import { loginView } from './components/login.js';
import { registerView } from './components/register.js';
import { updateNavbar } from './components/navigation.js';
import { gameView } from './components/gameInfo.js';


page('/', () => {
    updateNavbar();
    catalogView();
});
page('/games', (context) => {
    updateNavbar();
    catalogView(context.querystring);
});
page('/login', () => {
    updateNavbar();
    loginView();
});
page('/register', () => {
    updateNavbar();
    registerView();
});
page('/games/:gameId', (context) => {
    updateNavbar();
    gameView(context);
});

page.start();