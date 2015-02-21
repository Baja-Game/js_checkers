(function(){

  'use strict';

   app.UserLogin = Backbone.Model.extend({

    url: 'https://baja-checkers.herokuapp.com/users',
    idAttribute: '_id',

    initialize: function(){

    },

    defaults: {

      user:{
      email: '',
      password: '',
      username: '',
      }

    },


  });


}());
