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
      app.createUser = new app.CreateUserView();
    },

    loginUser: function(){
      app.loginUser = new app.UserLoginView();
    },

    listGames: function(){
      
    },

    gameRoute: function () {
      app.createGame = new app.BoardView();
    },

    defaultRoute: function () {
      this.navigate('', {trigger: true});
      console.log('Default');
    },

  });

}());
