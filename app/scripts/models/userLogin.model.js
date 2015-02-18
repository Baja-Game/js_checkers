(function(){

  'use strict';

   app.UserLogin = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      username: '',
      password: '',
      email: ''
    },

  });

}());
