
(function () {
  'use strict';

  app.login = new app.LoginView();

  app.games = new app.Games();

  // TODO: This is really inefficient - making 2 RPC calls for the same
  // data in order to populate the "Your Move" list and then again for
  // the "Their Move" list.  Needs to be optimized later.
  // app.myGamesView = new app.GamesView(app.games, 'me');
  // app.theirGamesView = new app.GamesView(app.games, 'them');

  app.menView = new app.MenView();

  app.boardView = new app.BoardView();


  // Render the men on the board:
  // Loop through board
  // if lowercase, place player1 piece in that x,y location
  // if uppercase, place player2 piece in that x,y location

}());
