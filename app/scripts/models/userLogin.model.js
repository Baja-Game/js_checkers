(function(){

  'use strict';

   app.CreateUserLogin = Backbone.Model.extend({

    url: 'https://baja-checkers.herokuapp.com/users/sign_in',
    idAttribute: '_id',

    initialize: function(){

    },



  });


}());
