
(function () {
  'use strict';

  app.UserSignupView = Backbone.View.extend({

    template: Handlebars.templates.user_signup,

    initialize: function () {
      var self = this;
      this.render();

      app.newUser = true;

      $('.auth-wrapper').on('click', '#signupButton', function () {
        self.userSignup();
      });
    },

    render: function () {
      $('.auth-wrapper').html(this.template);
    },

    userSignup: function () {

      var user = {
        email:    $('#signupForm').find('input#email').val(),
        password: $('#signupForm').find('input#password').val(),
        username: $('#signupForm').find('input#username').val()
      };

      app.user = new app.User({user: user});

      app.user.save().done(function (response) {
        console.log(response);

        var token = app.user.attributes.auth_token;

        // Set the cookie to expire in 30 days.
        Cookies.set('userCookie', token, {expires: 60 * 60 * 24 * 30 });
        Cookies.set('bajaUsername', user.username, {expires: 60 * 60 * 24 * 30 });

        if (Cookies.get('userCookie') === token) {
          // app.router.navigate('gamesListView', {trigger: true });
        }
      });
    }

  });

}());

