
(function () {
  'use strict';

  app.Board = Backbone.Model.extend({

    initialize: function () {
      console.log('\nLocal board model created: ', this);
    },

    idAttribute: '_id',  // This is for MongoDB

    defaults: {
      configs: {
        darkSquareColor: '#333',
        lightSquareColor: '#eee'
      },

      boardState: [
        [' ','M',' ','M',' ','M',' ','M'],

        ['M',' ','M',' ','M',' ','M',' '],

        [' ','M',' ','M',' ','M',' ','M'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['m',' ','m',' ','m',' ','m',' '],

        [' ','m',' ','m',' ','m',' ','m'],

        ['m',' ','m',' ','m',' ','m',' ']
      ]
    }

  });



  app.Boards = Backbone.Collection.extend({

    initialize: function () {
      console.log('\nLocal boards collection created: ', this);
    },

    model: app.Board,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_board'

  });


}());
