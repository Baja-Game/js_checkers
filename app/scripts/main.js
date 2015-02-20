
(function () {
  'use strict';

  app.login = new app.LoginView();

  app.games = new app.Games();

  app.gamesView = new app.GamesView(app.games);

  app.boardView = new app.BoardView();


  var save = function () {
    var game = new app.Game();
    app.games.add(game).save();
  };


  var fetch = function () {

    app.games.fetch().done(function () {
      var isOddTurn, isEvenTurn, player1IsMe, player2IsMe, isMyTurn,
          myTurnGames = [],
          theirTurnGames = [];

      console.log('\nGames collection fetched from endpoint: ');
      console.log(app.games.models);


      var myMoves = app.games.forEach(function (game) {
        isOddTurn = Number(game.attributes.turn_counter) % 2 == 1;
        isEvenTurn = !isOddTurn;
        // TODO: Swap out 'my_id' for app.user.username once that is exposed.
        player1IsMe = game.attributes.player1 === 'my_id';
        player2IsMe = !player1IsMe;

        isMyTurn = isOddTurn && player1IsMe || isEvenTurn && player2IsMe;

        if (isMyTurn) {
          myTurnGames.push(game);
        } else {
          theirTurnGames.push(game);
        }
      });

      console.log('My moves...');
      console.log(myTurnGames);

      console.log('Their moves...');
      console.log(theirTurnGames);

    });
  };


  // save();

  fetch();

  // var x = md5('asdf');
  // console.log(x);

  console.log('Hash...');
  var hash = CryptoJS.MD5("Message").toString();
  console.log(hash);


}());
