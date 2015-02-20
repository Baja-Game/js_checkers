
(function () {
  'use strict';

  app.GamesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,

    events: {
      'click #showGamesButton': 'render'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();

      $('#myTurn').after(this.el);
    },

    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },

    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.fetch().done(function () {
        console.log('\nGames collection fetched from endpoint: ');
        var myMoves = app.games.filter(function (game) {
          return game.attributes.isMyTurn;
        });
        console.log('My move...');
        console.log(myMoves);

        myMoves.forEach(function (myMove) {

          var hash = CryptoJS.MD5(game.opponent).toString(),
              clock = game.isTimed ? '<i class="fa fa-clock-o"></i>' : '';

          self.$el.prepend(self.template(myMove.attributes));
          console.log(myMove.attributes._id);
        });
      });
    }
  });

}());


