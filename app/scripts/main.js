
(function () {
  'use strict';

  app.login = new app.LoginView();

  app.players = new app.Players();

  app.players.fetch().done(function () {
    console.log('\nPlayers fetched: ', this);
  });

  app.men = new app.Men();

  app.men.fetch().done(function () {
    console.log('\nMen fetched: ', this);
  });

  app.boards = new app.Boards();

  app.boards.fetch().done(function () {
    console.log('\nBoards fetched: ', this);
    app.home = new app.Home({boardsCollection: app.boards});

  });




}());
