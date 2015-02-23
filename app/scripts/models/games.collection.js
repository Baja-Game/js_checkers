
(function () {
  'use strict';

  // TODO: Swap out this token for app.user.token when it comes available.

  var token = 'ursXYhG-AeFxxk8NCzvk';
  // var token = app.user.attributes.auth_token;

  app.Games = Backbone.Collection.extend({

    model: app.Game,

    url: 'https://baja-checkers.herokuapp.com/games?auth_token=' + token

  });


}());

