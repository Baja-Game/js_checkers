
(function () {
  'use strict';

  app.login = new app.LoginView();

  app.games = new app.Games();

  app.myGamesView = new app.GamesView(app.games, 'me');
  app.theirGamesView = new app.GamesView(app.games, 'them');

  app.boardView = new app.BoardView();


  var save = function () {
    var game = new app.Game();
    app.games.add(game).save();
  };

  // save();

}());
