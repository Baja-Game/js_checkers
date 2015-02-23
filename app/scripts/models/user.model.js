
(function () {
  'use strict';

  app.User = Backbone.Model.extend({

    initialize: function () {
      if (app.newUser) {
        this.url = 'https://baja-checkers.herokuapp.com/users';
      } else {
        this.url = 'https://baja-checkers.herokuapp.com/users/sign_in';
      }
    }

  });

}());

