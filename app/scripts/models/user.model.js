
(function () {
  'use strict';

  app.User = Backbone.Model.extend({

    url: 'https://baja-checkers.herokuapp.com/users',

    initialize: function () {
      console.log('HIT');
    }

  });

}());

