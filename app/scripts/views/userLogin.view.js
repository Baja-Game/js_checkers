(function(){

  'use strict';


  app.UserLoginView = Backbone.View.extend({


    className: 'UserLoginForm',

    events: {
      'click #subBtn': 'userLogin'
    },

    template: Handlebars.templates.userLogin,

    initialize: function(){

    }

  });

}());
