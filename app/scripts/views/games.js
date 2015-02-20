
(function () {
  'use strict';

  app.GamesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,

    events: {
      'click #showGamesButton': 'render'
    },

    initialize: function (collection, who) {
      this.collection = collection;
      this.render();

      this.myGamesView = (who === 'me') ? true : false;

      if (this.myGamesView) {
        $('#myTurn').after(this.el);
      } else {
        $('#theirTurn').after(this.el);
      }
    },

    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },

    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.fetch().done(function () {

        console.log('\nGames collection fetched from endpoint: ');

        var clock, hash, isOddTurn, isEvenTurn, player1IsMe, player2IsMe, isMyTurn;

        app.myTurnGames = [];
        app.theirTurnGames = [];

        self.collection.forEach(function (game) {

          clock = game.attributes.is_timed === 'true' ? '<i class="fa fa-clock-o"></i>' : '---';
          game.set('clock', clock);

          hash = CryptoJS.MD5(game.attributes.player2).toString();
          game.set('hash', hash);

          isOddTurn = Number(game.attributes.turn_counter) % 2 == 1;
          isEvenTurn = !isOddTurn;
          // TODO: Swap out 'my_id' for app.user.username once that is exposed.
          player1IsMe = game.attributes.player1 === 'my_id';
          player2IsMe = !player1IsMe;

          isMyTurn = isOddTurn && player1IsMe || isEvenTurn && player2IsMe;

          if (isMyTurn) {
            app.myTurnGames.push(game);
          } else {
            app.theirTurnGames.push(game);
          }
        });

        console.log('My moves...');
        console.log(app.myTurnGames);

        console.log('Their moves...');
        console.log(app.theirTurnGames);

        var arr = self.myGamesView ? app.myTurnGames : app.theirTurnGames;

        arr.forEach(function (game) {
          self.$el.append(self.template(game.attributes));
        });
      });
    }
  });
}());


