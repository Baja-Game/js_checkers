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
      console.log('i love code');
      e.preventDefault();

      var loginValUser = this.$el.find('input').val();
      var loginValPassword = this.$el.find('input').val();
      var loginValEmail = this.$el.find('input').val();


      var a = new app.UserLogin({ username: loginValUser, password: loginValPassword, email: loginValEmail });

      a.save().done(function(data){
        console.log(data);
      });


    },

  });

}());
