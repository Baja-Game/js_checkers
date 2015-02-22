
(function () {
  'use strict';

  app.Player = Backbone.Model.extend({

    initialize: function () {
      console.log('\nLocal player model created: ', this);
    },

    idAttribute: '_id',  // This is for MongoDB

    defaults: {
    }

  });



  app.Players = Backbone.Collection.extend({

    initialize: function () {
      console.log('\nLocal players collection created: ', this);
    },

    model: app.Player,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_player'

  });


}());

