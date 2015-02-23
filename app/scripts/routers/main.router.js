(function(){

  'use strict';

  app.MainRouter = Backbone.Router.extend({


    initialize: function(){
      Backbone.history.start();
      this.on('route', this.checkRoute, this);
    },

    routes: {
      'user_create': 'createUser',
      'login': 'loginUser',
      'list_games': 'listGames',
      'game': 'gameRoute',
      '*path':  'defaultRoute'

    },



    createUser: function(){
      app.createUser = new app.UserSignupView();
    },

    loginUser: function(){
      app.loginUser = new app.UserSigninView();
    },

    listGames: function(){
      app.listGames = new app.GamesListView();
    },

    // gameRoute: function () {
    //   app.createGame = new app.BoardView();
    // },

    defaultRoute: function () {
      this.navigate('', {trigger: true});
      console.log('Default');
    },

  });

}());
