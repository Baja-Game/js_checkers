
(function () {
  'use strict';

  app.Man = Backbone.Model.extend({

    initialize: function () {
      console.log('\nLocal man model created: ', this);
    },

    idAttribute: '_id',  // This is for MongoDB

    defaults: {
      color: 'lightblue'
    }

  });



  app.Men = Backbone.Collection.extend({

    initialize: function () {
      console.log('\nLocal men collection created: ', this);
    },

    model: app.Man,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_man'

  });


}());

