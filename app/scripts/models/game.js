
(function () {
  'use strict';

  app.Game = Backbone.Model.extend({

    initialize: function () {
      console.log('\nLocal game model created: ', this);
    },

    idAttribute: '_id',  // This is for MongoDB

    defaults: {
      game_id: 'unique_string',
      timestamp: '2015-02-17T18:25:43.511Z',
      player1: 'my_id',
      player2: null,
      board: [
        [' ','M',' ','M',' ','M',' ','M'],

        ['M',' ','M',' ','M',' ','M',' '],

        [' ','M',' ','M',' ','M',' ','M'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['m',' ','m',' ','m',' ','m',' '],

        [' ','m',' ','m',' ','m',' ','m'],

        ['m',' ','m',' ','m',' ','m',' ']
      ],
      last_move: [],
      turn_counter: 0,
      dull_move_counter: 0,
      is_timed: false,
      finished: 0
    }

    // TODO: Map the backend board to a matrix that looks like the default above.

  });



  app.Games = Backbone.Collection.extend({

    initialize: function () {
      console.log('\nLocal games collection created: ', this);
    },

    model: app.Game,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_games_array'

  });


}());
