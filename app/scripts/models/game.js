
(function () {
  'use strict';

  app.Game = Backbone.Model.extend({

    initialize: function () {
      var letterBoard = this.mapLetters(this.attributes.game.board);
      this.attributes.game.board = letterBoard;
      // console.log('\nLocal game model created: ', this);
    },

    defaults: {
      game: {
        board: [
          [' ','1',' ','1',' ','1',' ','1'],

          ['1',' ','1',' ','1',' ','1',' '],

          [' ','1',' ','1',' ','1',' ','1'],

          [' ',' ',' ',' ',' ',' ',' ',' '],

          [' ',' ',' ',' ',' ',' ',' ',' '],

          ['2',' ','2',' ','2',' ','2',' '],

          [' ','2',' ','2',' ','2',' ','2'],

          ['2',' ','2',' ','2',' ','2',' ']
        ],
        finished: null,
        id: 0,
        turn_counter: 0,
        updated_at: "2010-12-31T15:00:50.027Z",
        game_log: [],
        dull_move_counter: 0,
        is_timed: false
      },
      temp: 'temp',
      player1: {
        id: 1,
        username: "player1"
      },
      player2: {
        id: 2,
        username: "player2"
      }
    },

    mapLetters: function (board) {
      var letterRow,
          letterBoard = [];
      board.forEach(function (row) {
        letterRow = row.map(function (cell) {
          if (cell === 1) return 'M';
          if (cell === 2) return 'm';
          if (cell === 3) return 'K';
          if (cell === 4) return 'k';
          return ' ';
        });
        letterBoard.push(letterRow);
      });
      return letterBoard;
    }

  });


  // TODO: Swap out this token for app.user.token when it comes available.

  var token = 'ursXYhG-AeFxxk8NCzvk';

  app.Games = Backbone.Collection.extend({

    initialize: function () {
      // console.log('\nLocal games collection created: ', this);
    },

    model: app.Game,

    url: 'https://baja-checkers.herokuapp.com/games?auth_token=' + token

  });


}());
