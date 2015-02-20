
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

        var filteredGamesList,
            isOddTurn, isEvenTurn,
            player1IsMe, player2IsMe,
            isMyTurn,
            hash, opponent, prisonCount, prisoner, timestamp, clock;

        filteredGamesList = self.collection.filter(function (game) {

          isOddTurn = Number(game.attributes.turn_counter) % 2 == 1;
          isEvenTurn = !isOddTurn;

          // TODO: Swap out 'my_id' for app.user.username once that is exposed.

          player1IsMe = game.attributes.player1 === 'my_id';
          player2IsMe = !player1IsMe;

          isMyTurn = isOddTurn && player1IsMe || isEvenTurn && player2IsMe;

          return (self.myGamesView) ? isMyTurn: !isMyTurn;

        });

        filteredGamesList.forEach(function (game) {

          // TODO: Figure out how to get true back as a boolean rather than a string.

          hash = CryptoJS.MD5(game.attributes.player2).toString();
          game.set('hash', hash);

          opponent = isMyTurn ? game.attributes.player2 : game.attributes.player1;
          game.set('opponent', opponent);

          prisonCount = self.countPrisoners(game.attributes.board, player1IsMe);
          game.set('prisonCount', prisonCount);

          prisoner = self.pluralize(prisonCount, 'prisoner');
          game.set('prisoner', prisoner);

          game.set('isMyTurn', isMyTurn);

          timestamp = moment(game.attributes.timestamp).fromNow();
          game.set('timestamp', timestamp);

          clock = game.attributes.is_timed === 'true' ? '<i class="fa fa-clock-o"></i>' : '---';
          game.set('clock', clock);

          self.$el.append(self.template(game.attributes));
        });

      });
    },

    countPrisoners: function (board, player1IsMe) {
      var i, j,
          freeMenCount = 0;
      board.forEach(function (row) {
        row.forEach(function (cell) {
          if (player1IsMe) {
            if (cell === 'M' || cell === 'K') {
              freeMenCount++;
            }
          } else {
            if (cell === 'm' || cell === 'k') {
              freeMenCount++;
            }
          }
        });
      });
      return (12 - freeMenCount);
    }

  });
}());


