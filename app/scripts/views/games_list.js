
(function () {
  'use strict';

  app.GamesView = Backbone.View.extend({

    className: 'games',

    template: Handlebars.templates.games_table_my_moves_data,

    events: {
      'click #showGamesButton': 'render'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();

      $('.container').html(this.el);
    },

    render: function () {

      this.$el.html(Handlebars.templates.games_table());

      var self = this;
      var list = this.$el.find('#myMove');

      list.empty();

      this.collection.fetch().done(function (data) {
        // console.log('\nGames collection fetched from endpoint: ');
        var myMoves = app.games.filter(function (game) {
          return game.attributes.isMyTurn;
        });
        // console.log('My move...');
        // console.log(myMoves);

        myMoves.forEach(function (myMove) {
          list.prepend(self.template(myMove.attributes));
          // console.log(myMove.attributes._id);
        });
      });
    }
  });

}());

