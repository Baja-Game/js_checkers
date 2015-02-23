(function(){

  'use strict';


  app.UserLoginView = Backbone.View.extend({


    className: 'UserLoginForm',

    events: {
      'click #subBtn': 'userLogin'
    },

    template: Handlebars.templates.user_signin,

    initialize: function(){
      this.render();
      console.log('login render');
    },

    render: function(){
      $('.userlogin').html(this.el);
      this.$el.html(this.template);
    },

    // userLogin: function(){
    //   var self = this;
    //   e.preventDefault();
    //
    //   var loginValEmail = this.$el.find('input#email').val();
    //   var loginValPassword = this.$el.find('input#password').val();
    //
    //   var b = new app.UserLogin(user);
    //
    // }

  });

}());
