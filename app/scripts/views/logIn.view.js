(function(){

  'use strict';





  app.LoginView = Backbone.View.extend({

    el: '.main',

    className: 'loginForm',

    template: $('#loginTemp').html(),

    events: {
      'submit #userName': 'createUser'
    },

    initialize: function(){
      console.log('Login Initialized');


      this.render();
    },

    render: function () {
      this.$el.html(this.template);
    },


    createUser: function(e){
      var self = this;
      e.preventDefault();

      var elem = e.currentTarget;
      var loginValUser = $(elem).find('input').val();
      var loginValPassword = $(elem).find('input').val();
      var loginValEmail = $(elem).find('input').val();

      var a = new app.UserLogin({ username: loginValUser, password: loginValPassword, email: loginValEmail });
      

      this.model.add(a).save().done( function ()
      {app.router.navigate('', { trigger: true });
      });

      elem.reset();

    }

  });

}());
