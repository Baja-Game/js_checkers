
(function () {
  'use strict';

  app.GamesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMyMoves: Handlebars.templates.game_no_my_moves,
    templateNoTheirMoves: Handlebars.templates.game_no_their_moves,

    events: {
      'click #showGamesButton': 'render'
    },

    initialize: function (collection, who) {
      this.collection = collection;
      this.render();

      this.myGamesView = (who === 'me') ? true : false;

      if (this.myGamesView) {
        $('.games-wrapper').append('<h2 id="myTurn">Your Move</h2>').append(this.el);
      } else {
        $('.games-wrapper').append('<h2 id="theirTurn">Their Move</h2>').append(this.el);
      }
    },

    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.fetch().done(function () {

        // console.log('FETCH COMPLETE');

        var filteredGamesList,
            isOddTurn, isEvenTurn,
            player1IsMe, player2IsMe,
            isMyTurn,
            opponentUsername, hash, opponent, prisonCount, prisoner, timestamp;

        filteredGamesList = self.collection.filter(function (game) {

          isOddTurn = game.attributes.game.turn_counter % 2 == 1;
          isEvenTurn = !isOddTurn;

          // TODO: Swap out app.username for ?app.user.username? once that is exposed.

          player1IsMe = game.attributes.player1.username === app.username;
          player2IsMe = !player1IsMe;

          // TODO: I may need to flip player1IsMe with player2IsMe
          // depending on how server handles the game startup.
          isMyTurn = isOddTurn && player1IsMe || isEvenTurn && player2IsMe;

          return (self.myGamesView) ? isMyTurn: !isMyTurn;

        });

        if (filteredGamesList.length > 0) {

          filteredGamesList.forEach(function (game) {

            opponentUsername = player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
            hash = CryptoJS.MD5(opponentUsername).toString();
            game.set('hash', hash);

            opponent = player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
            game.set('opponent', opponent);

            prisonCount = self.countPrisoners(game.attributes.game.board, player1IsMe);
            game.set('prisonCount', prisonCount || 'NO');

            prisoner = utils.pluralize('prisoner', prisonCount);
            game.set('prisoner', prisoner);

            game.set('isMyTurn', isMyTurn);

            timestamp = moment(game.attributes.game.updated_at).fromNow();
            game.set('timestamp', timestamp);

            self.$el.append(self.template(game.attributes));
          });

        } else {

          if (self.myGamesView) {
            self.$el.append(self.templateNoMyMoves(game.attributes));
          } else {
            self.$el.append(self.templateNoTheirMoves(game.attributes));
          }


        }

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


