(function(){

  'use strict';





  app.LoginView = Backbone.View.extend({

    el: '.login',

    // className: 'loginForm',

    template: $('#loginTemp').html(),

    events: {
      'click #subBtn': 'createUser'
    },

    initialize: function(){
      this.render();

    },

    render: function () {
      this.$el.html(this.template);
      console.log('render');
    },


    createUser: function(e){
      var self = this;
      e.preventDefault();


      var loginValUser = this.$el.find('input#username').val();
      var loginValPassword = this.$el.find('input#password').val();
      var loginValEmail = this.$el.find('input#email').val();
      var user = {user:{username: loginValUser, email: loginValEmail, password: loginValPassword}};

      var a = new app.UserLogin(user);
      a.save().done(function(data){
        console.log(data);
        elem.reset();
      });



    },

  });

}());
