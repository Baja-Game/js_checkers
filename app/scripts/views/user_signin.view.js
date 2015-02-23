
(function () {
  'use strict';

  app.UserSigninView = Backbone.View.extend({

    template: Handlebars.templates.user_signin,

    initialize: function () {
      var self = this;
      this.render();

      app.newUser = false;

      $('.auth-wrapper').on('click', '#signinButton', function () {
        self.userSignin();
      });
    },

    render: function () {
      $('.auth-wrapper').html(this.template);
    },

    userSignin: function () {

      var user = {
        email:    $('#signinForm').find('input#email').val(),
        password: $('#signinForm').find('input#password').val(),
      };

      app.user = new app.User({user: user});

      app.user.save().done(function (response) {
        console.log(response);

        var token = app.user.attributes.auth_token;

        // Set the cookie to expire in 30 days.
        Cookies.set('userCookie', token, {expires: 60 * 60 * 24 * 30 });

        if (Cookies.get('userCookie') === token) {
          // app.router.navigate('gamesListView', {trigger: true });
        }
      });
    }

  });

}());

