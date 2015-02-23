(function(){

  'use strict';





  app.CreateUserView = Backbone.View.extend({

    className: 'CreateUserForm',

    events: {
      'click #subBtn': 'createUser'
    },

    template: Handlebars.templates.createuser,


    initialize: function(){
      this.render();

    },

    render: function(){
      $('.login').html(this.el);
      this.$el.html(this.template);
    },



    createUser: function(e){
      var self = this;
      e.preventDefault();


      var loginValUser = this.$el.find('input#username').val();
      var loginValPassword = this.$el.find('input#password').val();
      var loginValEmail = this.$el.find('input#email').val();
      var user = {user:{username: loginValUser, email: loginValEmail, password: loginValPassword}};

      var a = new app.CreateUserLogin(user);
      a.save().done(function(data){
        console.log(data);

        var token = a.attributes.auth_token;
        console.log(token);
        // Set the a cookie that expires in 24 hours
				Cookies.set('userCookie', token, {expires: 86400});
        console.log(Cookies.get('userCookie'));

        if(Cookies.get('userCookie') === token){
					app.router.navigate('gamesList', {trigger: true });
				}


      });



    },

  });

}());
