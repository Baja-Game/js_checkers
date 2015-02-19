
(function () {
  'use strict';

  var url = 'https://baja-checkers.herokuapp.com/users',
      user = {
        email: 'john@doe.com',
        password: 'password1',
        username: 'John'
      };

  // $.post(url, {user: user}, function (data) {
  //   console.log(data.user.authentication_token);
  // });




  app.games = new app.Games();


  var save = function () {
    var game = new app.Game();
    app.games.add(game).save();
  };


  var fetch = function () {
    // app.games.fetch().done(function (data) {
    //   console.log('\nGames collection fetched from endpoint: ');
    //   var myMoves = app.games.filter(function (game) {
    //     return game.attributes.isMyTurn;
    //   });
    //   console.log('My move...');
    //   console.log(myMoves);

    //   myMoves.forEach(function (myMove) {
    //     console.log(myMove.attributes._id);
    //   });

      var gamesList = new app.GamesView(app.games);

    // });
  };


  // save();

  fetch();

  // var x = md5('asdf');
  // console.log(x);

  console.log('Hash...');
  var hash = CryptoJS.MD5("Message").toString();
  console.log(hash);

}());

