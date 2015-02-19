
(function () {
  'use strict';

  app.Game = Backbone.Model.extend({

    initialize: function () {
      console.log('\nLocal game model created: ', this);
    },

    idAttribute: '_id',  // This is for MongoDB

    defaults: {

      gameID: '',
      wasStartedByMe: true,
      isMyTurn: true,
      lastMoveTime: '',
      opponent: '',
      opponentLastMove: [],
      myPrisonCount: 0,

      // boardState: [
      //   [' ','M',' ','M',' ','M',' ','M'],

      //   ['M',' ','M',' ','M',' ','M',' '],

      //   [' ','M',' ','M',' ','M',' ','M'],

      //   [' ',' ',' ',' ',' ',' ',' ',' '],

      //   [' ',' ',' ',' ',' ',' ',' ',' '],

      //   ['m',' ','m',' ','m',' ','m',' '],

      //   [' ','m',' ','m',' ','m',' ','m'],

      //   ['m',' ','m',' ','m',' ','m',' ']
      // ],

      dullMoveCount: 0,
      isTimed: false

    }

  });



  app.Games = Backbone.Collection.extend({

    initialize: function () {
      console.log('\nLocal games collection created: ', this);
    },

    model: app.Game,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_games'

  });


}());
